class HSMConnect {
  host: string;
  username: string;
  password: string;

  constructor(host: string, username: string, password: string) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  connect() {
    // todo: Implementar conexão HSM
  }

  disconnect() {
    // todo: Implementar desconectar do HSM.
  }
}
