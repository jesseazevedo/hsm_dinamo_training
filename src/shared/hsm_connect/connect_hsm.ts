import { Hsm } from "@dinamonetworks/hsm-dinamo/dist/hsm/interfaces";

export default class HSMConnect {
  private host: string;
  private username: string;
  private password: string;

  constructor(host: string, username: string, password: string) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  connect(): Promise<any> {
    // todo: Implementar conexão HSM
  }

  connectWithToken(): Promise<any> {
    // todo: Implementar conexão HSM com token
  }

  disconnect(): void {
    // todo: Implementar desconectar do HSM.
  }
}
