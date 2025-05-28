import { useState, useEffect } from 'react';
import { CardapioCabecalho } from './components/CardapioCabecalho';
import { ListaProdutos } from './components/ListaProdutos';
import { produtos } from './data/produtos';
import { Produto } from './types';
import './App.css';

function App() {
  const [carrinho, setCarrinho] = useState<{id: number, produto: Produto, quantidade: number}[]>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [produtosAnimados, setProdutosAnimados] = useState<boolean>(false);
  const [temaMobile, setTemaMobile] = useState<boolean>(false);
  
  // Extrair categorias únicas dos produtos
  const categorias = Array.from(new Set(produtos.map(p => p.categoria))).filter(c => c !== '');

  // Verificar se é dispositivo móvel
  useEffect(() => {
    const verificarTamanho = () => {
      setTemaMobile(window.innerWidth < 768);
    };
    
    verificarTamanho();
    window.addEventListener('resize', verificarTamanho);
    
    // Animar produtos após carregamento
    setTimeout(() => {
      setProdutosAnimados(true);
    }, 300);
    
    return () => window.removeEventListener('resize', verificarTamanho);
  }, []);

  const adicionarAoCarrinho = (nome: string, _preco: number, produto: Produto) => {
    const itemExistente = carrinho.find(item => item.produto.id === produto.id);
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item => 
        item.produto.id === produto.id 
          ? { ...item, quantidade: item.quantidade + 1 } 
          : item
      ));
    } else {
      setCarrinho([...carrinho, { 
        id: Date.now(), 
        produto: produto, 
        quantidade: 1
      }]);
    }
    
    // Feedback visual
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = `${nome} adicionado ao carrinho!`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 2000);
    }, 100);
  };

  const removerDoCarrinho = (id: number) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  const alterarQuantidade = (id: number, quantidade: number) => {
    if (quantidade <= 0) {
      removerDoCarrinho(id);
      return;
    }
    
    setCarrinho(carrinho.map(item => 
      item.id === id ? { ...item, quantidade } : item
    ));
  };

  const totalCarrinho = carrinho.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);

  const enviarPedidoWhatsApp = () => {
    const numeroWhatsApp = "5514998062541"; // Número fornecido pelo usuário
    
    // Construir a mensagem com os itens do carrinho
    let mensagem = "Olá, segue meu pedido:\n\n";
    
    carrinho.forEach(item => {
      mensagem += `• ${item.quantidade}x ${item.produto.nome} (${item.produto.peso}) - R$ ${(item.produto.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    mensagem += `\nTotal: R$ ${totalCarrinho.toFixed(2)}`;
    
    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Criar o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abrir o link em uma nova aba
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <div className={`min-h-screen bg-amber-50 ${temaMobile ? 'tema-mobile' : 'tema-desktop'}`}>
      <div className="container mx-auto px-4 py-8">
        <CardapioCabecalho 
          titulo="Catálogo" 
          subtitulo="Produtos de Pardinho-SP" 
        />
        
        <div className="relative">
          <button 
            className="fixed bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-lg z-50 transition-transform transform hover:scale-110 carrinho-btn"
            onClick={() => setCarrinhoAberto(!carrinhoAberto)}
            aria-label="Abrir carrinho"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {carrinho.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center carrinho-contador">
                {carrinho.reduce((total, item) => total + item.quantidade, 0)}
              </span>
            )}
          </button>
          
          {/* Carrinho de compras */}
          <div className={`fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${carrinhoAberto ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold text-amber-900">Seu Carrinho</h2>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setCarrinhoAberto(false)}
                  aria-label="Fechar carrinho"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {carrinho.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p>Seu carrinho está vazio</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-200">
                    {carrinho.map(item => (
                      <li key={item.id} className="py-4 flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-3">
                          <img src={item.produto.imagem} alt={item.produto.nome} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{item.produto.nome}</h3>
                          <p className="text-amber-700">R$ {item.produto.preco.toFixed(2)}</p>
                          <p className="text-gray-500 text-xs">{item.produto.peso}</p>
                        </div>
                        <div className="flex items-center">
                          <button 
                            className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center"
                            onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}
                            aria-label="Diminuir quantidade"
                          >-</button>
                          <span className="mx-2 w-6 text-center">{item.quantidade}</span>
                          <button 
                            className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center"
                            onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}
                            aria-label="Aumentar quantidade"
                          >+</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="border-t p-4">
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span>R$ {totalCarrinho.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  disabled={carrinho.length === 0}
                  onClick={enviarPedidoWhatsApp}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Finalizar Pedido via WhatsApp
                </button>
              </div>
            </div>
          </div>
          
          {/* Overlay para fechar o carrinho quando clicado fora */}
          {carrinhoAberto && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 carrinho-overlay"
              onClick={() => setCarrinhoAberto(false)}
            ></div>
          )}
        </div>
        
        <ListaProdutos 
          produtos={produtos} 
          categorias={categorias} 
          animado={produtosAnimados}
          onAdicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </div>
  );
}

export default App;
