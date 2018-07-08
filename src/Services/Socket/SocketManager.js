import Io from "socket.io-client";
const Manager = Io.Manager;

export class SocketManager {
  constructor(config) {
    this.setConfig(config);
    this._manager = new Manager(config.url, config.options);
  }
  setConfig(config) {
    this._config = config;
  }
  getConfig() {
    return this._config;
  }
  getSockets() {}
}
