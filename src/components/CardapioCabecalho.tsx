import React from 'react';

interface CardapioCabecalhoProps {
  titulo: string;
  subtitulo?: string;
}

export const CardapioCabecalho: React.FC<CardapioCabecalhoProps> = ({ 
  titulo, 
  subtitulo 
}) => {
  return (
    <div className="text-center py-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg shadow-xl mb-6">
      <h1 className="text-6xl md:text-5xl font-bold mb-2">{titulo}</h1>
      {subtitulo && <p className="text-2xl opacity-90">{subtitulo}</p>}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-24 bg-amber-300 rounded"></div>
      </div>
    </div>
  );
};
