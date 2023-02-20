import { UnidadeMedida } from "./unidadeMedida";

export type Insumo = {
    id: number;
    nome: string;
    descricao: string;
    unidadeMedida: UnidadeMedida;
    qtdeEstoque: number;
}