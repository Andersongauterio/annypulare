import mariadb, { PoolConnection } from "mariadb";

class Connection {
  private static instance: Connection;
  private pool: mariadb.Pool;

  private constructor() {
    this.pool = mariadb.createPool({
      host: "localhost",
      user: "root",
      password: "root",
      database: "annypulare",
      connectionLimit: 5,
    });
  }

  static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }
    return Connection.instance;
  }

  async getConnection(): Promise<PoolConnection> {
    return this.pool.getConnection();
  }

  async executeQuery(query: string, values?: any[]): Promise<any> {
    let conn;
    try {
      conn = await this.getConnection();
      const res = await conn.query(query, values);
      return res;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.end();
    }
  }
}

export default Connection.getInstance();