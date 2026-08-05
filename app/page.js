'use client';
import { useState } from 'react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState('explore');

  const discoveryModes = [
    { id: 'crush', title: 'Crush', desc: 'Flirtez entre rires et discussions profondes.', badge: 'GRATUIT', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', bg: 'bg-[#14101f]', emoji: '😊', content: "« Qu'est-ce qui t'a fait craquer en premier chez quelqu'un ? » — Discutez-en avec légèreté !" },
    { id: 'deep', title: 'Deep Night', desc: 'Pour des confessions nocturnes...', badge: 'OFFERT', badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', bg: 'bg-[#14101f]', emoji: '🌙', content: "« Quel est ton plus grand secret inavoué ? » — Osez la vulnérabilité." },
    { id: 'rage', title: 'Rage Bait', desc: 'Pour frapper là où ça fait mal... Prêt ?', badge: 'NOUVEAU !', badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20', bg: 'bg-[#14101f]', emoji: '🧨', content: "« Penses-tu qu'on peut tout pardonner en amour ? » — Débat pimenté garanti !" },
  ];

  const coupleModes = [
    { id: 'connected', title: 'Connected', desc: 'Renforcez vos liens avec des échanges profonds.', badge: 'COUPLE', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', bg: 'bg-[#14101f]', emoji: '🔥', content: "« Quel souvenir de nous deux gardes-tu précieusement ? »" },
    { id: 'whotwo', title: 'Qui de nous deux ?', desc: 'Découvrez qui est le plus susceptible de...', badge: 'POPULAIRE', badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20', bg: 'bg-[#14101f]', emoji: '👑', content: "Qui de nous deux est le plus jaloux ? Comptez jusqu'à 3 et désignez du doigt !" },
    { id: 'memory', title: 'Memory Lane', desc: 'Revivez ensemble vos souvenirs les plus précieux.', badge: 'CLASSIC', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20', bg: 'bg-[#14101f]', emoji: '📖', content: "Raconte notre premier rendez-vous tel que tu l'as vécu de ton côté." },
  ];

  const spicyModes = [
    { id: 'hot', title: 'Tu préfères hot', desc: 'Révélez vos désirs cachés et faites monter la pression.', badge: 'VIP 18+', badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20', bg: 'bg-[#14101f]', emoji: '🌶️', content: "« Tu préfères une soirée romantique les yeux bandés ou un massage sensuel ? »" },
    { id: 'hard', title: 'Hard Dare', desc: 'Plongez dans des défis sensuels et intenses.', badge: 'VIP', badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20', bg: 'bg-[#14101f]', emoji: '😳', content: "Défi : Chuchote à l'oreille de ton partenaire ce que tu rêves de faire ce soir." },
  ];

  return (
    <div className="min-h-screen bg-[#0b0813] text-purple-100 font-sans pb-32 relative selection:bg-purple-500 selection:text-white">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 pt-6 pb-4 max-w-xl mx-auto">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="w-10 h-10 rounded-full bg-purple-950/60 border border-purple-500/20 flex items-center justify-center hover:bg-purple-900/40 transition cursor-pointer"
        >
          <div className="space-y-1.5 w-4">
            <div className="h-0.5 bg-purple-300 rounded-full"></div>
            <div className="h-0.5 bg-purple-300 rounded-full"></div>
            <div className="h-0.5 bg-purple-300 rounded-full"></div>
          </div>
        </button>

        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-purple-900/50">
          <span className="font-bold text-lg">W</span>
        </div>

        <button 
          onClick={() => setVipModalOpen(true)}
          className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 shadow-md shadow-amber-500/20 flex items-center gap-1 cursor-pointer hover:opacity-90 transition"
        >
          👑 VIP
        </button>
      </header>

      {/* GREETING */}
      <section className="px-6 py-4 max-w-xl mx-auto flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-900/30">
          <div className="w-full h-full bg-[#0b0813] rounded-full flex items-center justify-center">
            <span className="text-2xl">✨</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Hey Ulrich, quel mood ?
          </h1>
          <p className="text-xs text-purple-400 mt-0.5">Explorez des inspirations et des instants précieux.</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="px-6 space-y-8 mt-2 max-w-xl mx-auto">
        
        {/* Discovery */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400/80">Découverte</h2>
            <span className="text-xs text-purple-500">Pour commencer</span>
          </div>
          <div className="space-y-3">
            {discoveryModes.map((mode) => (
              <div 
                key={mode.id}
                onClick={() => setActiveModal(mode)}
                className={`${mode.bg} border border-purple-500/15 rounded-2xl p-4 shadow-lg shadow-purple-950/40 hover:border-purple-500/40 transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/20 flex items-center justify-center text-2xl">
                      {mode.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">{mode.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mode.badgeColor}`}>
                          {mode.badge}
                        </span>
                      </div>
                      <p className="text-xs text-purple-400 mt-0.5">{mode.desc}</p>
                    </div>
                  </div>
                  <span className="text-purple-500 text-lg group-hover:translate-x-1 transition-transform">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIP Banner */}
        <div 
          onClick={() => setVipModalOpen(true)}
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 border border-purple-500/30 text-white rounded-2xl p-5 flex items-center justify-between cursor-pointer shadow-xl relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
          <div>
            <span className="text-[10px] bg-amber-400 text-stone-950 font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Pass Illimité</span>
            <h3 className="text-base font-bold text-amber-300 mt-1.5">✨ Offre Premium WiseCharm</h3>
            <p className="text-xs text-purple-200 mt-0.5">Accédez à l'intégralité des modes sans aucune limite.</p>
          </div>
          <span className="text-amber-300 text-xl font-bold group-hover:translate-x-1 transition-transform">›</span>
        </div>
                    {/* Couple */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400/80">En couple</h2>
            <span className="text-xs text-purple-500">Entretenir la flamme</span>
          </div>
          <div className="space-y-3">
            {coupleModes.map((mode) => (
              <div 
                key={mode.id}
                onClick={() => setActiveModal(mode)}
                className={`${mode.bg} border border-purple-500/15 rounded-2xl p-4 shadow-lg shadow-purple-950/40 hover:border-purple-500/40 transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/20 flex items-center justify-center text-2xl">
                      {mode.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">{mode.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mode.badgeColor}`}>
                          {mode.badge}
                        </span>
                      </div>
                      <p className="text-xs text-purple-400 mt-0.5">{mode.desc}</p>
                    </div>
                  </div>
                  <span className="text-purple-500 text-lg group-hover:translate-x-1 transition-transform">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spicy */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400/80">Intime & Audacieux</h2>
          </div>
          <div className="space-y-3">
            {spicyModes.map((mode) => (
              <div 
                key={mode.id}
                onClick={() => setActiveModal(mode)}
                className={`${mode.bg} border border-purple-500/15 rounded-2xl p-4 shadow-lg shadow-purple-950/40 hover:border-purple-500/40 transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/20 flex items-center justify-center text-2xl">
                      {mode.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">{mode.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mode.badgeColor}`}>
                          {mode.badge}
                        </span>
                      </div>
                      <p className="text-xs text-purple-400 mt-0.5">{mode.desc}</p>
                    </div>
                  </div>
                  <span className="text-purple-500 text-lg group-hover:translate-x-1 transition-transform">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#14101f]/90 backdrop-blur-md border border-purple-500/20 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl z-40">
        <button 
          onClick={() => setActiveTab('explore')}
          className={`p-2.5 rounded-full transition ${activeTab === 'explore' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'text-purple-400 hover:text-white'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        </button>

        <button 
          onClick={() => setActiveTab('favorite')}
          className={`p-2.5 rounded-full transition ${activeTab === 'favorite' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'text-purple-400 hover:text-white'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
      </nav>

      {/* SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setSidebarOpen(false)}
          ></div>

          <div className="relative w-80 max-w-[85%] bg-[#120e1b] border-r border-purple-500/20 p-6 flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-purple-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold">
                    U
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Ulrich</h4>
                    <p className="text-[10px] text-purple-400">Membre WiseEmpire</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="w-8 h-8 rounded-full bg-purple-950 flex items-center justify-center text-xs font-bold text-purple-300 hover:bg-purple-900"
                >
                  ✕
                </button>
              </div>

              <div className="py-6 space-y-1">
                <a href="https://wa.me/22872119966?text=Bonjour%20WiseEmpire,%20je%20souhaite%20contacter%20le%20support." target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/50 transition text-sm text-purple-200 font-medium">
                  <span>📩 Nous contacter</span>
                  <span className="text-purple-500">›</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/50 transition text-sm text-purple-200 font-medium">
                  <span>📸 Instagram</span>
                  <span className="text-purple-500">›</span>
                </a>
                <a href="https://wa.me/?text=Découvre%20WiseCharm,%20l'application%20ultime%20de%20charme%20et%20de%20connexion%20!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/50 transition text-sm text-purple-200 font-medium">
                  <span>🔗 Partage l'app !</span>
                  <span className="text-purple-500">›</span>
                </a>
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-purple-950/50 transition text-sm text-purple-200 font-medium cursor-pointer">
                  <span>🌐 Langues (Français)</span>
                  <span className="text-purple-500">›</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div 
                onClick={() => { setSidebarOpen(false); setVipModalOpen(true); }}
                className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 border border-amber-500/30 rounded-2xl p-4 cursor-pointer shadow-lg space-y-2 hover:bg-amber-500/30 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-amber-400 uppercase">👑 GO PREMIUM</span>
                  <span>✨</span>
                </div>
                <p className="text-[11px] text-purple-200">Débloquez l'accès illimité à tous les packs.</p>
                <button className="w-full py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-bold text-xs rounded-xl shadow">
                  Activer mon pass
                </button>
              </div>

              <div className="pt-4 border-t border-purple-500/10 text-center space-y-1">
                <p className="text-[10px] text-purple-400">Conditions · Politique de confidentialité</p>
                <p className="text-[10px] text-rose-400 cursor-pointer hover:underline">Supprimer mon compte</p>
                <p className="text-[9px] text-purple-500 mt-2">WiseCharm v2.0.0 — WiseEmpire</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ACTIVE MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-[#161122] border border-purple-500/30 rounded-3xl p-6 w-full max-w-md shadow-2xl z-10 space-y-4 text-center">
            <div className="text-4xl">{activeModal.emoji}</div>
            <h3 className="text-xl font-bold text-white">{activeModal.title}</h3>
            <p className="text-xs text-purple-300">{activeModal.desc}</p>
            
            <div className="bg-purple-950/60 border border-purple-500/30 rounded-2xl p-4 my-4 text-purple-100 text-sm italic font-medium">
              {activeModal.content}
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setActiveModal(null)}
                className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-xs font-bold rounded-xl text-white transition cursor-pointer"
              >
                Fermer
              </button>
              <button 
                onClick={() => { setActiveModal(null); setVipModalOpen(true); }}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-xl shadow-lg transition cursor-pointer"
              >
                Passer VIP 👑
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIP MODAL */}
      {vipModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setVipModalOpen(false)}></div>
          
          <div className="relative bg-[#161122] border border-amber-500/40 rounded-3xl p-6 w-full max-w-md shadow-2xl z-10 space-y-6 text-center max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setVipModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white hover:bg-white/20 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="bg-amber-500/20 text-amber-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/40">
                👑 Pass VIP Illimité
              </span>
              <h2 className="text-2xl font-black text-white mt-2">Votre relation mérite l'excellence</h2>
              <p className="text-xs text-purple-300">
                Débloquez tous les modes et profitez d'une expérience complète. Paiement simple via <span className="text-white font-bold">Flooz ou Yas</span> au <span className="text-white font-bold whitespace-nowrap">72 11 99 66</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-left">
              
              <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-3.5 flex justify-between items-center hover:border-purple-500/40 transition">
                <div>
                  <p className="text-xs font-bold text-white">1 Semaine</p>
                  <p className="text-[10px] text-purple-400">Idéal pour tester</p>
                </div>
                <p className="text-base font-extrabold text-white">500 <span className="text-xs font-normal text-purple-400">FCFA</span></p>
              </div>

              <div className="bg-amber-500/10 border-2 border-amber-500/80 rounded-2xl p-3.5 flex justify-between items-center relative shadow-lg">
                <span className="absolute -top-2.5 left-4 bg-amber-400 text-stone-950 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Le plus populaire 🔥
                </span>
                <div>
                  <p className="text-xs font-bold text-amber-300">1 Mois</p>
                  <p className="text-[10px] text-amber-200/70">Accès illimité complet</p>
                </div>
                <p className="text-lg font-black text-amber-300">900 <span className="text-xs font-normal text-amber-200">FCFA</span></p>
              </div>

              <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-3.5 flex justify-between items-center hover:border-purple-500/40 transition">
                <div>
                  <p className="text-xs font-bold text-white">1 An</p>
                  <p className="text-[10px] text-purple-400">Tranquille toute l'année</p>
                </div>
                <p className="text-base font-extrabold text-white">8 000 <span className="text-xs font-normal text-purple-400">FCFA</span></p>
              </div>

            </div>

            <a 
              href="https://wa.me/22872119966?text=Bonjour%20WiseEmpire,%20je%20souhaite%20m'abonner%20au%20Pass%20VIP%20WiseCharm%20via%20Flooz%20ou%20Yas." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 block rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-xl hover:opacity-90 transition cursor-pointer text-center"
            >
              S'abonner via Flooz / Yas 🚀
            </a>

            <p className="text-[10px] text-purple-400">
              Paiement sécurisé et instantané au <span className="text-white font-semibold">72 11 99 66</span>.
            </p>

          </div>
        </div>
      )}

    </div>
  );
                          }
            
