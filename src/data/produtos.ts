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
    id: 1,
    nome: "Café", 
    preco: 59, 
    categoria: "Outros", 
    descricao: "Café 'Daqui do Sítio' - 500g - Grãos selecionados", 
    imagem: imagePaths.cafe,
    peso: "500g"
  },
  { 
    id: 2,
    nome: "CuestAzul", 
    preco: 69, 
    categoria: "Queijos", 
    descricao: "Queijo azul premiado - 300g", 
    imagem: imagePaths.cuestAzul,
    destaque: true,
    peso: "300g"
  },
  { 
    id: 3,
    nome: "Cuestinha", 
    preco: 59, 
    categoria: "Queijos", 
    descricao: "Queijo especial - 300g", 
    imagem: imagePaths.cuestinha,
    peso: "300g"
  },
  { 
    id: 4,
    nome: "Doce de Leite", 
    preco: 34, 
    categoria: "Doces", 
    descricao: "Doce de Leite cremoso - 400g", 
    imagem: imagePaths.doceLeite,
    peso: "400g"
  },
  { 
    id: 5,
    nome: "Figo", 
    preco: 42, 
    categoria: "Doces", 
    descricao: "Doce de figo orgânico - 600g", 
    imagem: imagePaths.figo,
    peso: "600g"
  },
  { 
    id: 6,
    nome: "Geleia", 
    preco: 20, 
    categoria: "Doces", 
    descricao: "Geleia artesanal - 160g - Sabores: Amora, Damasco, Morango, Abacaxi", 
    imagem: imagePaths.geleia,
    peso: "160g"
  },
  { 
    id: 7,
    nome: "Goiabada", 
    preco: 18, 
    categoria: "Doces", 
    descricao: "Goiabada cascão - 400g", 
    imagem: imagePaths.goiabada,
    peso: "400g"
  },
  { 
    id: 8,
    nome: "Mandala", 
    preco: 69, 
    categoria: "Queijos", 
    descricao: "Queijo premium tipo mandala - 300g", 
    imagem: imagePaths.mandala,
    destaque: true,
    peso: "300g"
  },
  { 
    id: 9,
    nome: "Mandalinha", 
    preco: 59, 
    categoria: "Queijos", 
    descricao: "Versão menor do queijo mandala - 300g", 
    imagem: imagePaths.mandalinha,
    peso: "300g"
  },
  { 
    id: 10,
    nome: "Queijo Fresco", 
    preco: 40, 
    categoria: "Queijos", 
    descricao: "Queijo fresco (grande) - a peça", 
    imagem: imagePaths.queijoFresco,
    peso: "Peça"
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
    id: 12,
    nome: "Cocada", 
    preco: 35, 
    categoria: "Doces", 
    descricao: "Cocada cremosa - 400g", 
    imagem: imagePaths.cocada,
    peso: "400g"
  },
  { 
    id: 13,
    nome: "Queijo Nozinho", 
    preco: 35, 
    categoria: "Queijos", 
    descricao: "Mussarela nozinho - Aprox. 500g - Embalado a vácuo", 
    imagem: imagePaths.queijoNozinho,
    peso: "500g"
  }
];
