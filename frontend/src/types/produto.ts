import { Categoria } from './categoria';
import { Insumo } from './insumo';
export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    categoria: Categoria;
    modoDePreparo: string;
    propriedades: string;
    tamanho: string;
    qtdeEstoque: number;
    insumos: Insumo[];
}