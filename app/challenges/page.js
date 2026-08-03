'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Challenges() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#F4F5F7] px-4 py-6 md:px-12 max-w-2xl mx-auto">
      
      {/* HEADER */}
      <div className="flex items-center justify-between pb-6 border-b border-[#2A2D37]">
        <Link href="/" className="text-xs text-[#9DA3B4] hover:text-white transition-colors">
          ← Retour au Tableau de bord
        </Link>
        <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
          Énigme du Jour
        </span>
      </div>

      {/* TITRE */}
      <div className="py-8 text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mx-auto text-[#C5A059] text-xl font-bold mb-2">
          ◈
        </div>
        <h1 className="text-2xl md:text-3xl font-light text-white">Le Défi Complicité</h1>
        <p className="text-xs md:text-sm text-[#9DA3B4]">Une devinette à poser pour relancer l'échange avec finesse.</p>
      </div>

      {/* CARTE ÉNIGME */}
      <div className="bg-[#16181E] border border-[#C5A059]/40 rounded-xl p-6 space-y-6 text-center relative overflow-hidden">
        <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] font-medium border border-[#C5A059]/20">
          Énigme #01
        </span>

        <p className="text-base md:text-lg text-white font-light italic leading-relaxed pt-2">
          "Plus on me partage, plus je prends de la valeur. Je ne me touche pas, mais je peux rapprocher deux personnes en un instant. Que suis-je ?"
        </p>

        {showAnswer ? (
          <div className="p-4 rounded-lg bg-[#8B1E3F]/20 border border-[#8B1E3F]/40 text-[#F4F5F7] text-xs md:text-sm transition-all">
            💡 <span className="font-semibold text-[#C5A059]">Réponse :</span> Un secret (ou un regard de complicité).
          </div>
        ) : (
          <button 
            onClick={() => setShowAnswer(true)}
            className="px-5 py-2.5 rounded-lg bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0B0C10] text-xs font-semibold transition-colors"
          >
            Découvrir la réponse
          </button>
        )}
      </div>

      {/* ASTUCE */}
      <div className="mt-6 p-4 rounded-xl bg-[#16181E] border border-[#2A2D37] text-center space-y-1">
        <p className="text-xs text-[#C5A059] font-medium">💡 Conseil WiseCharm</p>
        <p className="text-[11px] text-[#9DA3B4]">
          Posez cette devinette lors d'un blanc dans la conversation. C'est le prétexte idéal pour tester sa curiosité !
        </p>
      </div>

    </div>
  );
        }
  
