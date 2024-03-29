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
const mariadb_1 = __importDefault(require("mariadb"));
class Connection {
    constructor() {
        this.pool = mariadb_1.default.createPool({
            host: "localhost",
            user: "root",
            password: "root",
            database: "annypulare",
            connectionLimit: 5,
        });
    }
    static getInstance() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pool.getConnection();
        });
    }
    executeQuery(query, values) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn;
            try {
                conn = yield this.getConnection();
                const res = yield conn.query(query, values);
                return res;
            }
            catch (err) {
                throw err;
            }
            finally {
                if (conn)
                    conn.end();
            }
        });
    }
}
exports.default = Connection.getInstance();
