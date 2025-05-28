export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  descricao: string;
  imagem: string;
  peso: string;
  quantidade?: number;
  destaque?: boolean;
}
