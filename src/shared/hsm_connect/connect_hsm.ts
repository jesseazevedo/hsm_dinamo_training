import { hsm } from "@dinamonetworks/hsm-dinamo";

export default class HSMConnect {
  host: string;
  username: string;
  password: string;
  token: string | undefined;

  constructor(host: string, username: string, password: string) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  async connect(): Promise<hsm.interfaces.Hsm> {
    try {
      const options = {
        host: this.host,
        authUsernamePassword: {
          username: this.username,
          password: this.password,
        },
      };

      const conn = await hsm.connect(options);
      await this.tokenGenerate(conn);

      return conn;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async connectWithToken(token: string): Promise<hsm.interfaces.Hsm> {
    try {
      const tokenOptions = {
        host: this.host,
        authToken: token,
      };

      const conn = await hsm.connect(tokenOptions);

      return conn;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async disconnect(conn: hsm.interfaces.Hsm): Promise<void> {
    try {
      await conn.disconnect();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private async tokenGenerate(conn: hsm.interfaces.Hsm): Promise<string> {
    try {
      const token: string = await conn.user.generateToken();

      return token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
