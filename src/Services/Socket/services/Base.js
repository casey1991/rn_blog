import io from "socket.io-client";
export class Base {
  constructor(baseUrl, namespace) {
    this._baseUrl = baseUrl;
    this._namespace = namespace;
    this._client = io(baseUrl);
  }
}
