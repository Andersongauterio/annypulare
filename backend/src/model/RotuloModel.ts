import { Rotulo } from "../types/rotulo";
import connection from "../connection";

class RotuloModel {
  async get(): Promise<Rotulo[]> {
    const conn = await connection.getConnection();
    const rows = await conn.query<Rotulo[]>("SELECT * FROM rotulo");
    return rows;
  }

  async getById(id: number): Promise<Rotulo | null> {
    const conn = await connection.getConnection();
    const rows = await conn.query<Rotulo[]>("SELECT * FROM rotulo WHERE id = ?", [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }

  async create(rotulo: Rotulo): Promise<number> {
    const conn = await connection.getConnection();
    const result = await conn.query("INSERT INTO rotulo (nome, descricao, ingredientes, dataFabricacao, dataValidade, lote, quantidade, instrucoes) VALUES (?)", [Object.values(rotulo)]);
    return result.id;
  }

  async update(id: number, rotulo: Rotulo): Promise<Rotulo> {
    const conn = await connection.getConnection();
    const values = Object.values(rotulo).map(value => {
      if (typeof value === 'bigint' && value <= Number.MAX_SAFE_INTEGER) {
        return Number(value);
      }
      return value;
    });
    const query = "UPDATE rotulo SET nome=?, descricao=?, ingredientes=?, dataFabricacao=?, dataValidade=?, lote=?, quantidade=?, instrucoes=? WHERE id = ?";
    const result = await conn.query(query, [...values, id]);
    return result;
  }

  async delete(id: number): Promise<void> {
    const conn = await connection.getConnection();
    await conn.query("DELETE FROM rotulo WHERE id = ?", [id]);
  }
}

export default RotuloModel;
