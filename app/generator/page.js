'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Generator() {
  const [category, setCategory] = useState('premier_contact');
  const [tone, setTone] = useState('elegant');
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Exemples de messages haut de gamme classés par catégorie
  const messagesData = {
    premier_contact: [
      { text: "J'ai hésité à t'écrire, non pas par manque d'audace, mais parce que certaines présences méritent qu'on prenne le temps de trouver les mots justes.", vibe: "Mystérieux & Assuré" },
      { text: "Il y a des profils qu'on survole, et puis il y a le tien qui oblige à s'arrêter. Bonsoir.", vibe: "Chic & Direct" },
      { text: "Je parie que derrière ton sourire se cache un sens de la répartie redoutable. Je me trompe ?", vibe: "Taquin & Fin" }
    ],
    repartie: [
      { text: "Tu as l'art de rendre les conversations curieusement indispensables.", vibe: "Subtil" },
      { text: "J'aime bien ton style. C'est rare de croiser quelqu'un qui a à la fois du répondant et du goût.", vibe: "Complice" },
      { text: "On continue cette discussion ici ou tu préfères qu'on passe aux choses sérieuses autour d'un verre ?", vibe: "Audacieux" }
    ],
    raviver: [
      { text: "Il manquait une note subtile dans ma semaine. Je me suis dit qu'un petit coucou s'imposait.", vibe: "Chaleureux" },
      { text: "Certaines alchimies résistent bien au temps, tu ne trouves pas ?", vibe: "Romantique" },
      { text: "J'ai repensé à notre dernière discussion. Disons que tu m'as laissé de l'inspi pour un moment.", vibe: "Captivant" }
    ]
  };

  const currentMessages = messagesData[category] || [];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#F4F5F7] px-4 py-6 md:px-12 max-w-3xl mx-auto">
      
      {/* HEADER DE LA PAGE */}
      <div className="flex items-center justify-between pb-6 border-b border-[#2A2D37]">
        <Link href="/" className="text-xs text-[#9DA3B4] hover:text-white transition-colors flex items-center gap-1">
          ← Retour au Tableau de bord
        </Link>
        <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
          Générateur de Charme
        </span>
      </div>

      {/* TITRE */}
      <div className="py-6 text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-light text-white">Trouvez l'inspiration parfaite</h1>
        <p className="text-xs md:text-sm text-[#9DA3B4]">Sélectionnez une situation et copiez le message idéal en un clin d'œil.</p>
      </div>

      {/* SÉLECTEUR DE CATÉGORIE */}
      <div className="grid grid-cols-3 gap-2 my-4">
        <button 
          onClick={() => setCategory('premier_contact')}
          className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border ${category === 'premier_contact' ? 'bg-[#8B1E3F] border-[#8B1E3F] text-white' : 'bg-[#16181E] border-[#2A2D37] text-[#9DA3B4]'}`}
        >
          Premier Contact
        </button>
        <button 
          onClick={() => setCategory('repartie')}
          className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border ${category === 'repartie' ? 'bg-[#8B1E3F] border-[#8B1E3F] text-white' : 'bg-[#16181E] border-[#2A2D37] text-[#9DA3B4]'}`}
        >
          Répartie Fine
        </button>
        <button 
          onClick={() => setCategory('raviver')}
          className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border ${category === 'raviver' ? 'bg-[#8B1E3F] border-[#8B1E3F] text-white' : 'bg-[#16181E] border-[#2A2D37] text-[#9DA3B4]'}`}
        >
          Raviver la flamme
        </button>
      </div>

      {/* RÉSULTATS / MESSAGES GÉNÉRÉS */}
      <div className="space-y-4 my-6">
        {currentMessages.map((item, index) => (
          <div key={index} className="bg-[#16181E] border border-[#2A2D37] rounded-xl p-5 space-y-3 relative group hover:border-[#C5A059]/50 transition-all">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-[#C5A059]/10 text-[#C5A059] font-medium border border-[#C5A059]/20">
                {item.vibe}
              </span>
            </div>
            <p className="text-sm md:text-base text-[#F4F5F7] font-light leading-relaxed">
              "{item.text}"
            </p>
            <div className="flex justify-end pt-2">
              <button 
                onClick={() => handleCopy(item.text, index)}
                className="px-4 py-1.5 rounded-lg bg-[#2A2D37] hover:bg-[#8B1E3F] text-white text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                {copiedIndex === index ? '✓ Copié !' : 'Copier le message'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER DISCRET */}
      <div className="text-center pt-8 text-[11px] text-[#9DA3B4]">
        WiseCharm • Conçu pour faire toute la différence.
      </div>

    </div>
  );
    }
        
