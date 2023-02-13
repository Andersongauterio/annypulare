import { Categoria } from './categoria';
export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    categoria: Categoria;
    modoDePreparo: string;
    propriedades: string;
    tamanho: string;
    qtdeEstoque: number;
}