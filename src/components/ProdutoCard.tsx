import React from 'react';
import { Produto } from '../types';

interface ProdutoCardProps {
  produto: Produto;
  onClick?: (produto: Produto) => void;
  animado?: boolean;
  onAdicionarAoCarrinho?: (nome: string, preco: number, produto: Produto) => void;
  index?: number;
}

export const ProdutoCard: React.FC<ProdutoCardProps> = ({ 
  produto, 
  onClick: _onClick, 
  animado = false,
  onAdicionarAoCarrinho,
  index = 0
}) => {
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl 
        ${produto.destaque ? 'border-2 border-amber-500 produto-destaque' : ''}
        ${animado ? 'produto-card-animado' : ''}`}
      style={{ animationDelay }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="w-full h-full max-w-xl object-cover transition-transform duration-300 hover:scale-105"
        />
        {produto.destaque && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white rounded-full p-2 text-xs font-bold">
            Destaque
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-amber-900">{produto.nome}</h3>
        <p className="text-gray-600 text-sm mb-1">{produto.descricao}</p>
        <p className="text-gray-500 text-xs mb-2">{produto.peso}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-amber-800 font-bold text-lg">R$ {produto.preco.toFixed(2)}</span>
          <button 
            className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-full text-sm transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              onAdicionarAoCarrinho && onAdicionarAoCarrinho(produto.nome, produto.preco, produto);
            }}
            aria-label="Adicionar ao carrinho"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};
