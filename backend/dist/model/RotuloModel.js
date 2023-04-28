"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
class RotuloModel {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield connection_1.default.getConnection();
            const rows = yield conn.query("SELECT * FROM rotulo");
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield connection_1.default.getConnection();
            const rows = yield conn.query("SELECT * FROM rotulo WHERE id = ?", [id]);
            if (rows.length === 0) {
                return null;
            }
            return rows[0];
        });
    }
    create(rotulo) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield connection_1.default.getConnection();
            const result = yield conn.query("INSERT INTO rotulo (nome, descricao, ingredientes, dataFabricacao, dataValidade, lote, quantidade, instrucoes) VALUES (?)", [Object.values(rotulo)]);
            return result.id;
        });
    }
    update(id, rotulo) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield connection_1.default.getConnection();
            const values = Object.values(rotulo).map(value => {
                if (typeof value === 'bigint' && value <= Number.MAX_SAFE_INTEGER) {
                    return Number(value);
                }
                return value;
            });
            const query = "UPDATE rotulo SET nome=?, descricao=?, ingredientes=?, dataFabricacao=?, dataValidade=?, lote=?, quantidade=?, instrucoes=? WHERE id = ?";
            const result = yield conn.query(query, [...values, id]);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield connection_1.default.getConnection();
            yield conn.query("DELETE FROM rotulo WHERE id = ?", [id]);
        });
    }
}
exports.default = RotuloModel;
