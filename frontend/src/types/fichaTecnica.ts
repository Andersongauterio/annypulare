import { Categoria } from './categoria';
export type FichaTecnica = {
    id: number;
    nome: string;
    descricao: string;
    categoria: Categoria;
}