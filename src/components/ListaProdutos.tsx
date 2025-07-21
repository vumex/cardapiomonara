import React, { useState } from 'react';
import { Produto } from '../types';
import { ProdutoCard } from './ProdutoCard';

interface ListaProdutosProps {
  produtos: Produto[];
  categorias: string[];
  animado?: boolean;
  onAdicionarAoCarrinho?: (nome: string, preco: number, produto: Produto) => void;
}

export const ListaProdutos: React.FC<ListaProdutosProps> = ({ 
  produtos, 
  categorias,
  animado = false,
  onAdicionarAoCarrinho
}) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('Todos');
  const [ordenacao, setOrdenacao] = useState<'padrao' | 'precoAsc' | 'precoDesc'>('padrao');
  const [pesquisa, setPesquisa] = useState<string>('');
  
  const produtosFiltrados = produtos.filter(produto => {
    // Filtro por categoria
    const matchCategoria = categoriaAtiva === 'Todos' || produto.categoria === categoriaAtiva;
    
    // Filtro por pesquisa
    const matchPesquisa = pesquisa === '' || 
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      (produto.descricao && produto.descricao.toLowerCase().includes(pesquisa.toLowerCase()));
      
    return matchCategoria && matchPesquisa;
  });
    
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacao === 'precoAsc') return a.preco - b.preco;
    if (ordenacao === 'precoDesc') return b.preco - a.preco;
    return 0; // padrão mantém a ordem original
  });

  return (
    <div className="mb-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 categoria-btn
            ${categoriaAtiva === 'Todos' ? 'bg-amber-600 text-white ativo' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
          onClick={() => setCategoriaAtiva('Todos')}
        >
          Todos
        </button>
        {categorias.map(categoria => (
          <button 
            key={categoria}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 categoria-btn
              ${categoriaAtiva === categoria ? 'bg-amber-600 text-white ativo' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
      
      <div className="flex justify-end mb-4">
        <select 
          className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value as any)}
        >
          <option value="padrao">Ordenar por</option>
          <option value="precoAsc">Menor preço</option>
          <option value="precoDesc">Maior preço</option>
        </select>
      </div>
      
      {produtosOrdenados.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">Nenhum produto encontrado</h3>
          <p className="text-gray-500">Tente mudar os filtros ou a pesquisa</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {produtosOrdenados.map((produto, index) => (
            <ProdutoCard 
              key={`${produto.nome}-${index}`} 
              produto={produto}
              animado={animado}
              index={index}
              onAdicionarAoCarrinho={onAdicionarAoCarrinho}
            />
          ))}
        </div>
      )}
    </div>
  );
};
