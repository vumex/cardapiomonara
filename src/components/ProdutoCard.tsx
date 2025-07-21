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
      <div className="relative h-32 sm:h-48 md:h-54 overflow-hidden">
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {produto.destaque && (
          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-amber-500 text-white rounded-full p-1 sm:p-2 text-xs font-bold">
            <span className="hidden sm:inline">Destaque</span>
            <span className="sm:hidden">★</span>
          </div>
        )}
      </div>
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-amber-900 leading-tight mb-1">{produto.nome}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-1 line-clamp-2 hidden sm:block">{produto.descricao}</p>
        <p className="text-gray-500 text-xs mb-2">{produto.peso}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 sm:mt-4 gap-2">
          <span className="text-amber-800 font-bold text-sm sm:text-lg">R$ {produto.preco.toFixed(2)}</span>
          <button 
            className="bg-amber-600 hover:bg-amber-700 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm transition-colors duration-300 w-full sm:w-auto"
            onClick={(e) => {
              e.stopPropagation();
              onAdicionarAoCarrinho && onAdicionarAoCarrinho(produto.nome, produto.preco, produto);
            }}
            aria-label="Adicionar ao carrinho"
          >
            <span className="sm:hidden">+</span>
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
