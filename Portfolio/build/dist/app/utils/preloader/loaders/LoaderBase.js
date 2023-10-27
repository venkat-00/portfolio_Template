import EventEmitter from "../../../../../_snowpack/pkg/tiny-emitter.js";
import FileMeta from "./FileMeta.js";
import getMimeFromURL from "../util/getMimeFromURL.js";
import stringToArrayBuffer from "../util/stringToArrayBuffer.js";

export default class LoaderBase extends EventEmitter {
  constructor(loadType, options) {
    super();
    this.options = options;
    if (this.options.onComplete) this.on("complete", this.options.onComplete);
    if (this.options.onProgress) this.on("progress", this.options.onProgress);
    this.xhr = null;
    this.content = null;
    this.url = null;
    this.loadType = loadType || LoaderBase.typeText;
    this.loadTypeSet = false;
    this.fileMeta = null;

    this._onStateChange = this._onStateChange.bind(this);
    this._onProgress = this._onProgress.bind(this);
    this._dispatchProgress = this._dispatchProgress.bind(this);
    this._dispatchComplete = this._dispatchComplete.bind(this);
  }

  canLoadUsingXHR() {
    return typeof XMLHttpRequest !== "undefined";
  }

  canLoadType(type) {
    const tempXHR = new XMLHttpRequest();

    // need to open for ff so it doesn't fail
    tempXHR.open("GET", "someFakeURL", true);

    return checkAndSetType(tempXHR, type);
  }

  load(url) {
    this.url = url;

    if (this.canLoadUsingXHR()) {
      this.xhr = new XMLHttpRequest();
      this.xhr.open("GET", url, true);

      this.xhr.onreadystatechange = this._onStateChange;
      this.xhr.onprogress !== undefined &&
        (this.xhr.onprogress = this._onProgress);

      if (this.loadType !== LoaderBase.typeText) {
        if (!checkIfGoodValue.call(this)) {
          console.warn(
            "Attempting to use incompatible load type " +
              this.loadType +
              ". Switching it to " +
              LoaderBase.typeText
          );
          this.loadType = LoaderBase.typeText;
        }

        try {
          this.loadTypeSet =
            checkResponseTypeSupport.call(this) &&
            checkAndSetType(this.xhr, this.loadType);
        } catch (e) {
          this.loadTypeSet = false;
        }

        if (
          !this.loadTypeSet &&
          (this.loadType === LoaderBase.typeBlob ||
            this.loadType === LoaderBase.typeArraybuffer)
        ) {
          this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
      }

      this.xhr.send();
    }
  }

  stopLoad() {
    this.xhr.abort();
  }

  _dispatchStart() {
    this.emit("start");
  }

  _dispatchProgress(value) {
    this.emit("progress", value);
  }

  _dispatchComplete() {
    this.emit("complete", this.content);
  }

  _dispatchError(msg) {
    this.emit("error", msg);
  }

  _onProgress(ev) {
    const loaded = ev.loaded || ev.position;
    const totalSize = ev.total || ev.totalSize;

    if (totalSize) {
      this._dispatchProgress(loaded / totalSize);
    } else {
      this._dispatchProgress(0);
    }
  }

  _onStateChange() {
    if (this.xhr.readyState > 1) {
      let status;
      let waiting = false;
      // Fix error in IE8 where status isn't available until readyState=4
      try {
        status = this.xhr.status;
      } catch (e) {
        waiting = true;
      }

      if (status === 200) {
        switch (this.xhr.readyState) {
          // send() has been called, and headers and status are available
          case 2:
            this.fileMeta = new FileMeta(this.xhr.getAllResponseHeaders());

            this._dispatchStart();
            break;

          // Downloading; responseText holds partial data.
          case 3:
            // todo progress could be calculated here if onprogress does not exist on XHR
            // this.onProgress.dispatch();
            break;

          // Done
          case 4:
            this._parseContent();

            this._dispatchComplete();
            break;
        }
      } else if (!waiting) {
        this.xhr.onreadystatechange = undefined;
        this._dispatchError(this.xhr.status);
      }
    }
  }

  _parseContent() {
    if (this.loadTypeSet || this.loadType === LoaderBase.typeText) {
      this.content = this.xhr.response || this.xhr.responseText;
    } else {
      switch (this.loadType) {
        case LoaderBase.typeArraybuffer:
          if (ArrayBuffer) {
            this.content = stringToArrayBuffer(this.xhr.response);
          } else {
            throw new Error("This browser does not support ArrayBuffer");
          }
          break;
        case LoaderBase.typeBlob:
        case LoaderBase.typeVideo:
        case LoaderBase.typeAudio:
          if (Blob) {
            if (!this.fileMeta) {
              this.fileMeta = new FileMeta();
            }

            if (this.fileMeta.mime === null) {
              this.fileMeta.mime = getMimeFromURL(this.url);
            }

            this.content = new Blob([stringToArrayBuffer(this.xhr.response)], {
              type: this.fileMeta.mime,
            });
          } else {
            throw new Error("This browser does not support Blob");
          }
          break;
        case LoaderBase.typeJSON:
          this.content = JSON.parse(this.xhr.response);
          break;
        case LoaderBase.typeDocument:
          // this needs some work pretty sure there's a better way to handle this
          this.content = this.xhr.response;
          break;
      }
    }
  }
}

function checkIfGoodValue() {
  return (
    this.loadType === LoaderBase.typeText ||
    this.loadType === LoaderBase.typeArraybuffer ||
    this.loadType === LoaderBase.typeBlob ||
    this.loadType === LoaderBase.typeJSON ||
    this.loadType === LoaderBase.typeDocument ||
    this.loadType === LoaderBase.typeVideo ||
    this.loadType === LoaderBase.typeAudio
  );
}

function checkResponseTypeSupport() {
  return this.xhr.responseType !== undefined;
}

function checkAndSetType(xhr, loadType) {
  if (loadType === LoaderBase.typeVideo || loadType === LoaderBase.typeAudio) {
    loadType = LoaderBase.typeBlob;
  }

  xhr.responseType = loadType;

  return xhr.responseType === loadType;
}

LoaderBase.typeText = "text";
LoaderBase.typeArraybuffer = "arraybuffer";
LoaderBase.typeBlob = "blob";
LoaderBase.typeJSON = "json";
LoaderBase.typeDocument = "document";
LoaderBase.typeVideo = "video";
LoaderBase.typeAudio = "audio";
