import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookMarked, X, Crosshair, ArrowLeft, BookOpen } from 'lucide-react';

import capaArte from '../assets/artedaseducao.png';
import capaHabitos from '../assets/habitosatomicos.jpg';
import capaConvencer from '../assets/comoconvenceralguemem90seg.png';
import capaDiabo from '../assets/maisespertoqueodiabo.png';
import capa48Leis from '../assets/48leisdopoder.jpg';
import capaArmas from '../assets/armaspersuasao.png';

const livrosTaticos = [
  {
    id: 1,
    titulo: 'A Arte da Sedução',
    autor: 'Robert Greene',
    capaUrl: capaArte,
    resenhaTatica: 'Um manual implacável sobre como desarmar defesas psicológicas e atrair aliados (ou vítimas). Aprenda a identificar as fraquezas emocionais do seu alvo. Use para: estratégias de networking e persuasão invisível.'
  },
  {
    id: 2,
    titulo: 'Hábitos Atômicos',
    autor: 'James Clear',
    capaUrl: capaHabitos,
    resenhaTatica: 'Como construir sistemas que garantem progresso contínuo através de pequenas melhorias marginais. A fórmula para tornar o sucesso automatizado e a falha quase impossível. Use para: engenharia de rotina.'
  },
  {
    id: 3,
    titulo: 'Como Convencer Alguém em 90 Segundos',
    autor: 'Nicholas Boothman',
    capaUrl: capaConvencer,
    resenhaTatica: 'Técnicas de PNL e leitura corporal para gerar rapport imediato. A primeira impressão decide o jogo antes mesmo dele começar. Use para: negociações rápidas e fechamentos.'
  },
  {
    id: 4,
    titulo: 'Mais Esperto que o Diabo',
    autor: 'Napoleon Hill',
    capaUrl: capaDiabo,
    resenhaTatica: 'A quebra do ritmo hipnótico da conformidade. Como o sistema cria o medo e a alienação em massa, e como escpar dessa prisão mental para pensar livremente. Use para: blindagem mental e autonomia extrema.'
  },
  {
    id: 5,
    titulo: 'As 48 Leis do Poder',
    autor: 'Robert Greene',
    capaUrl: capa48Leis,
    resenhaTatica: 'Compilado prático e denso de leis sobre dominação social. Leitura obrigatória para entender a dinâmica de poder sem ingenuidade (Ex: "Não ofusque o mestre"). Use para: leitura de cenário sociopolítico organizacional.'
  },
  {
    id: 6,
    titulo: 'As Armas da Persuasão',
    autor: 'Robert Cialdini',
    capaUrl: capaArmas,
    resenhaTatica: 'Os 6 gatilhos psicológicos automáticos da espécie humana (Reciprocidade, Escassez, etc). Como acioná-los inteligentemente e como se defender de quem os usa contra você. Use para: vendas e copy de alto impacto.'
  }
];

export default function Arsenal({ onBack }) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="flex flex-col items-center justify-start py-8 px-4 w-full h-full min-h-screen">
      <div className="w-full max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="text-neon-400 hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-widest font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para Operações
        </button>

        <div className="flex items-center justify-start gap-4 mb-10">
          <BookMarked className="w-10 h-10 text-orange-500 drop-shadow-[0_0_12px_#f97316]" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase text-neon-100 tracking-[0.15em] drop-shadow-[0_0_10px_purple]">
              Arsenal Tático
            </h1>
            <p className="text-sm font-bold tracking-widest text-orange-400 opacity-80 uppercase mt-1">
              A Biblioteca Proibida do Comandante
            </p>
          </div>
        </div>

        {/* GRID DE CARDS VERTICAIS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {livrosTaticos.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedBook(book)}
              className="bg-void-900 border border-neon-900/60 rounded-xl overflow-hidden cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex flex-col h-[320px] relative group"
            >
              {/* PLACEHOLDER DA CAPA OU CAPA REAL */}
              {book.capaUrl ? (
                <div
                  className="flex-1 bg-cover bg-center"
                  style={{ backgroundImage: `url(${book.capaUrl})` }}
                />
              ) : (
                <div className="flex-1 bg-gradient-to-br from-void-950 via-neon-900/20 to-orange-900/30 flex items-center justify-center relative overflow-hidden group-hover:from-void-900 group-hover:to-orange-800/40 transition-all">
                  <BookOpen className="w-12 h-12 text-void-700/50 group-hover:text-neon-500/50 transition-colors" />
                  <div className="absolute inset-0 bg-void-900/10 mix-blend-overlay"></div>
                </div>
              )}

              {/* RODAPÉ DO CARD */}
              <div className="p-4 bg-void-950 h-28 border-t border-neon-800/40 flex flex-col justify-center">
                <h3 className="text-sm uppercase font-black tracking-widest text-neon-200 line-clamp-2 leading-tight mb-1" style={{ textShadow: "0 0 5px rgba(168,85,247,0.5)" }}>
                  {book.titulo}
                </h3>
                <span className="text-xs font-bold text-gray-500 uppercase">
                  {book.autor}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE RESENHA */}
      <AnimatePresence>
        {selectedBook && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="fixed inset-0 z-[100] bg-void-950/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg bg-void-900 border border-orange-500/50 rounded-2xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col outline-none"
            >
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 text-neon-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <Crosshair className="w-6 h-6 text-orange-500" />
                <h3 className="text-xs uppercase font-black tracking-[0.2em] text-orange-500">
                  Resumo Estratégico Executável
                </h3>
              </div>

              <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-1 line-clamp-2 leading-none" style={{ textShadow: "0 0 10px rgba(168,85,247,0.8)" }}>
                {selectedBook.titulo}
              </h2>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">
                Alvo Autor: {selectedBook.autor}
              </span>

              <div className="bg-void-950/80 p-5 rounded-xl border border-neon-900/50 shadow-inner">
                <p className="text-sm text-neon-100/90 leading-relaxed text-justify font-medium">
                  {selectedBook.resenhaTatica}
                </p>
              </div>

              <button
                onClick={() => setSelectedBook(null)}
                className="mt-8 w-full py-4 text-xs font-black uppercase tracking-widest text-white bg-void-800 hover:bg-orange-600 rounded-xl border border-orange-500/50 hover:border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all"
              >
                Retornar à Base
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
