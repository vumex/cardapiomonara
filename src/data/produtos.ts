import { Produto } from '../types';

// Caminhos das imagens dos produtos
const imagePaths = {
  goiabada: '/images/produtos/goiabada.jpg',
  doceLeite: '/images/produtos/doce_leite.jpg',
  cocada: '/images/produtos/cocada.jpg',
  geleia: '/images/produtos/geleia.jpg',
  figo: '/images/produtos/figo.jpg',
  cafe: '/images/produtos/cafe.jpg',
  cuestAzul: '/images/produtos/cuest_azul.jpg',
  cuestinha: '/images/produtos/cuestinha.jpg',
  mandala: '/images/produtos/mandala.jpg',
  mandalinha: '/images/produtos/mandalinha.jpg',
  queijoFresco: '/images/produtos/queijo_fresco.jpg',
  queijoMeiaCura: '/images/produtos/queijo_meia_cura.jpg',
  queijoNozinho: '/images/produtos/queijo_nozinho.jpg',
};

export const produtos: Produto[] = [
  { 
    id: 10,
    nome: "Queijo Fresco", 
    preco: 42, 
    categoria: "Queijos", 
    descricao: "Queijo fresco (grande) - a peça", 
    imagem: imagePaths.queijoFresco,
    peso: "Peça"
  },
  { 
    id: 4,
    nome: "Doce de Leite", 
    preco: 34, 
    categoria: "Doces", 
    descricao: "Doce de Leite cremoso", 
    imagem: imagePaths.doceLeite,
    peso: "400g"
  },
  { 
    id: 11,
    nome: "Queijo meia cura", 
    preco: 79, 
    categoria: "Queijos", 
    descricao: "Queijo meia cura - escolha o peso", 
    imagem: imagePaths.queijoMeiaCura,
    destaque: true,
    peso: "Kg"
  },
  { 
    id: 5,
    nome: "Figo", 
    preco: 42, 
    categoria: "Doces", 
    descricao: "Doce artesanal com figos orgânicos", 
    imagem: imagePaths.figo,
    peso: "600g"
  },
  { 
    id: 2,
    nome: "CuestAzul", 
    preco: 69, 
    categoria: "Queijos", 
    descricao: "Queijo com notas de mofo azul - premiado internacionalmente", 
    imagem: imagePaths.cuestAzul,
    destaque: true,
    peso: "300g"
  },
  { 
    id: 3,
    nome: "Cuestinha", 
    preco: 59, 
    categoria: "Queijos", 
    descricao: "Maturado em cavernas de pedra", 
    imagem: imagePaths.cuestinha,
    peso: "300g"
  },
  { 
    id: 6,
    nome: "Geleia", 
    preco: 20, 
    categoria: "Doces", 
    descricao: "Geleia 80% fruta, zero adição de açúcar - Sabores: morango e amora", 
    imagem: imagePaths.geleia,
    peso: "160g"
  },
  { 
    id: 7,
    nome: "Goiabada", 
    preco: 18, 
    categoria: "Doces", 
    descricao: "Goiabada cascão artesanal", 
    imagem: imagePaths.goiabada,
    peso: "400g"
  },
  { 
    id: 8,
    nome: "Mandala", 
    preco: 69, 
    categoria: "Queijos", 
    descricao: "Queijo complexo - 12 meses de maturação", 
    imagem: imagePaths.mandala,
    destaque: true,
    peso: "300g"
  },
  { 
    id: 9,
    nome: "Mandalinha", 
    preco: 59, 
    categoria: "Queijos", 
    descricao: "Queijo complexo - 3 meses de maturação", 
    imagem: imagePaths.mandalinha,
    peso: "300g"
  },
  { 
    id: 12,
    nome: "Cocada", 
    preco: 35, 
    categoria: "Doces", 
    descricao: "Cocada cremosa", 
    imagem: imagePaths.cocada,
    peso: "400g"
  },
  { 
    id: 13,
    nome: "Queijo Nozinho", 
    preco: 35, 
    categoria: "Queijos", 
    descricao: "Mussarela nozinho - embalado a vácuo", 
    imagem: imagePaths.queijoNozinho,
    peso: "500g"
  },  
  { 
    id: 1,
    nome: "Café", 
    preco: 68, 
    categoria: "Diversos", 
    descricao: "Diversas vezes premiado - grãos selecionados", 
    imagem: imagePaths.cafe,
    peso: "500g"
  },
];
