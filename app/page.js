export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#F4F5F7] px-4 py-6 md:px-12 max-w-5xl mx-auto">
      
      {/* HEADER / NAVIGATION */}
      <header className="flex items-center justify-between pb-6 border-b border-[#2A2D37]">
        <div className="flex items-center gap-3">
          {/* Logo Officiel */}
          <img 
            src="/logo2.png" 
            alt="WiseCharm Logo" 
            className="w-9 h-9 object-contain rounded-lg border border-[#8B1E3F]/30"
          />
          <span className="font-semibold tracking-wider text-lg uppercase">
            Wise<span className="text-[#C5A059]">Charm</span>
          </span>
        </div>
        
        <span className="text-xs px-3 py-1 rounded-full bg-[#16181E] border border-[#2A2D37] text-[#9DA3B4]">
          Par <span className="text-[#F4F5F7] font-medium">WiseEmpire</span>
        </span>
      </header>

      {/* HERO SECTION */}
      <section className="py-10 text-center space-y-4">
        <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#8B1E3F]/20 text-[#C5A059] border border-[#8B1E3F]/40">
          Compte Gratuit — 3 / 5 crédits aujourd'hui
        </div>
        
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white max-w-2xl mx-auto leading-tight">
          L'art des mots, la finesse du charme.
        </h1>
        
        <p className="text-[#9DA3B4] text-sm md:text-base max-w-xl mx-auto">
          Générez des messages percutants, relevez l'énigme du jour et entretenez une alchimie authentique.
        </p>
      </section>

      {/* GRILLE DES FONCTIONNALITÉS */}
      <main className="grid gap-6 md:grid-cols-3 my-6">
        
        {/* CARTE 1 : GÉNÉRATEUR */}
        <div className="bg-[#16181E] border border-[#2A2D37] rounded-xl p-6 flex flex-col justify-between hover:border-[#8B1E3F] transition-all cursor-pointer group">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#8B1E3F]/10 border border-[#8B1E3F]/30 flex items-center justify-center mb-4 text-[#C5A059] font-bold">
              ✦
            </div>
            <h2 className="text-lg font-medium text-white group-hover:text-[#C5A059] transition-colors">
              Générateur de Charme
            </h2>
            <p className="text-[#9DA3B4] text-xs mt-2 leading-relaxed">
              Inspiration sur mesure pour un premier contact, une répartie fine ou raviver la flamme.
            </p>
          </div>
          <a href="/generator" className="mt-6 w-full py-2.5 text-center rounded-lg bg-[#8B1E3F] hover:bg-[#8B1E3F]/80 text-white text-xs font-medium tracking-wide transition-colors block">
            Ouvrir le Générateur
          </a>
        </div>

        {/* CARTE 2 : ÉNIGMES & DÉFIS */}
        <div className="bg-[#16181E] border border-[#2A2D37] rounded-xl p-6 flex flex-col justify-between hover:border-[#C5A059] transition-all cursor-pointer group">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mb-4 text-[#C5A059] font-bold">
              ◈
            </div>
            <h2 className="text-lg font-medium text-white group-hover:text-[#C5A059] transition-colors">
              Défi & Énigme du Jour
            </h2>
            <p className="text-[#9DA3B4] text-xs mt-2 leading-relaxed">
              Une devinette ou un petit jeu de mots quotidien pour créer de la complicité instantanée.
            </p>
          </div>
          <a href="/challenges" className="mt-6 w-full py-2.5 text-center rounded-lg bg-[#16181E] border border-[#2A2D37] hover:border-[#C5A059] text-white text-xs font-medium tracking-wide transition-colors block">
            Voir le Défi
          </a>
        </div>

        {/* CARTE 3 : ABONNEMENT VIP / TARIFS */}
        <div className="bg-gradient-to-b from-[#1F2833] to-[#121318] border border-amber-500/40 rounded-2xl p-6 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="text-center space-y-1">
            <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              👑 Pass VIP Illimité
            </span>
            <h2 className="text-xl font-extrabold text-white mt-2">Choisissez votre formule</h2>
            <p className="text-xs text-gray-400">Paiement simple et rapide via Flooz ou Yas au <span className="text-amber-400 font-bold">72 11 99 66</span></p>
          </div>

          {/* Grille des Prix */}
          <div className="grid grid-cols-1 gap-3">
            
            {/* Semaine */}
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-3 text-center flex justify-between items-center hover:border-amber-500/50 transition-all">
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-300">1 Semaine</p>
                <p className="text-[10px] text-gray-500">Idéal pour tester</p>
              </div>
              <p className="text-lg font-extrabold text-amber-400">500 <span className="text-xs font-normal text-gray-400">FCFA</span></p>
            </div>

            {/* Mois (Populaire) */}
            <div className="bg-[#800020]/20 border-2 border-amber-500 rounded-xl p-3 text-center flex justify-between items-center relative shadow-lg">
              <span className="absolute -top-2.5 left-4 bg-amber-500 text-black text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Populaire
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-amber-300">1 Mois</p>
                <p className="text-[10px] text-gray-300">Le meilleur choix</p>
              </div>
              <p className="text-lg font-extrabold text-white">900 <span className="text-xs font-normal text-gray-400">FCFA</span></p>
            </div>

            {/* Année */}
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-3 text-center flex justify-between items-center hover:border-amber-500/50 transition-all">
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-300">1 An</p>
                <p className="text-[10px] text-gray-500">Tranquille toute l'année</p>
              </div>
              <p className="text-lg font-extrabold text-amber-400">8 000 <span className="text-xs font-normal text-gray-400">FCFA</span></p>
            </div>

          </div>

          {/* Bouton WhatsApp */}
          <a 
            href="https://wa.me/22872119966?text=Bonjour%20WiseEmpire,%20je%20souhaite%20m'abonner%20au%20Pass%20VIP%20WiseCharm." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-3 text-center block rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-extrabold text-sm shadow-lg hover:opacity-90 transition-all cursor-pointer"
          >
            S'abonner via Flooz / Yas 🚀
          </a>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="pt-12 pb-6 text-center text-xs text-[#9DA3B4] border-t border-[#2A2D37]/50 mt-12 space-y-3">
        <p>© 2026 WiseCharm. Membre de l'écosystème <span className="text-white">WiseEmpire</span>.</p>
        <div>
          <a 
            href="https://linktr.ee/ulrichwiseempire" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline font-medium transition-colors"
          >
            Explorer tout l'univers WiseEmpire ✦
          </a>
        </div>
      </footer>

    </div>
  );
              }
              
