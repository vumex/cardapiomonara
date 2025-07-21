import React from 'react';

interface CardapioCabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export const CardapioCabecalho: React.FC<CardapioCabecalhoProps> = ({ titulo, subtitulo }) => {
  return (
    <div className="text-center mb-8 bg-gradient-to-r from-amber-600 to-amber-800 text-white p-6 sm:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{titulo}</h1>
      <p className="text-base sm:text-lg md:text-xl mb-4 opacity-90">{subtitulo}</p>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 inline-block">
        <p className="text-sm sm:text-base font-semibold">
          🚀 <span className="text-yellow-300">FRETE GRÁTIS</span> para Cambuci e Vila Mariada (SP) em pedidos acima de R$ 100,00
        </p>
      </div>
    </div>
  );
};

