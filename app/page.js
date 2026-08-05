'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  // État utilisateur connecté
  const [user, setUser] = useState(null);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('wisecharm_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (provider, nameToUse) => {
    const finalName = nameToUse || inputName || "Utilisateur";
    const userData = {
      name: finalName,
      initial: finalName.charAt(0).toUpperCase(),
      provider: provider
    };
    setUser(userData);
    localStorage.setItem('wisecharm_user', JSON.stringify(userData));
    setLoginModalOpen(false);
    setInputName('');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('wisecharm_user');
  };

  return (
    <div className="min-h-screen bg-[#0b0813] text-stone-100 font-sans pb-32 relative selection:bg-amber-500 selection:text-stone-950">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 pt-6 pb-4 max-w-xl mx-auto">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="w-10 h-10 rounded-xl bg-[#581c37]/40 border border-amber-500/20 flex items-center justify-center hover:bg-[#581c37]/70 transition cursor-pointer"
        >
          <div className="space-y-1 w-4">
            <div className="h-0.5 bg-amber-400 rounded-full"></div>
            <div className="h-0.5 bg-amber-400 rounded-full"></div>
            <div className="h-0.5 bg-amber-400 rounded-full"></div>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#701a3d] to-[#4c0519] border border-amber-500/30 flex items-center justify-center shadow-lg">
            <span className="text-amber-400 font-bold text-lg">🔥</span>
          </div>
          <div>
            <h1 className="font-black tracking-wider text-sm text-amber-400">WISE<span className="text-white">CHARM</span></h1>
            <p className="text-[10px] text-stone-400">Par WiseEmpire</p>
          </div>
        </div>

        <button 
          onClick={() => setVipModalOpen(true)}
          className="text-[11px] font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 shadow-md shadow-amber-500/20 flex items-center gap-1 cursor-pointer hover:opacity-90 transition"
        >
          👑 VIP
        </button>
      </header>

      {/* CREDITS & TAGLINE SECTION */}
      <section className="px-6 py-4 max-w-xl mx-auto space-y-4">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#581c37]/30 border border-amber-500/20 text-xs text-amber-200/90 shadow-inner">
            <span>{user ? `Compte de ${user.name}` : 'Compte Gratuit — 3 / 5 crédits aujourd\'hui'}</span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            L'art des mots, la finesse du charme.
          </h2>
          <p className="text-xs text-stone-400 max-w-md mx-auto">
            Générez des messages percutants, relevez l'énigme du jour et entretenez une alchimie authentique.
          </p>
        </div>

        {!user && (
          <div className="flex justify-center pt-1">
            <button 
              onClick={() => setLoginModalOpen(true)}
              className="text-xs font-bold px-5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition cursor-pointer"
            >
              Se connecter pour enregistrer mon profil 👤
            </button>
          </div>
        )}
      </section>

      {/* MAIN CARDS CONTAINER */}
      <main className="px-6 space-y-4 mt-4 max-w-xl mx-auto">
        
        {/* Card 1: Générateur de Charme */}
        <div className="bg-[#141017] border border-amber-500/20 rounded-2xl p-5 shadow-xl space-y-4 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#581c37]/50 border border-amber-500/30 flex items-center justify-center text-amber-400">
            ✨
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Générateur de Charme</h3>
            <p className="text-xs text-stone-400 mt-1">
              Inspiration sur mesure pour un premier contact, une répartie fine ou raviver la flamme.
            </p>
          </div>
          <button 
            onClick={() => setActiveCard('generator')}
            className="w-full py-3 bg-[#701a3d] hover:bg-[#831843] text-white font-bold text-xs rounded-xl shadow-lg border border-amber-500/20 transition cursor-pointer"
          >
            Ouvrir le Générateur
          </button>
        </div>

        {/* Card 2: Défi & Énigme du Jour */}
        <div className="bg-[#141017] border border-amber-500/20 rounded-2xl p-5 shadow-xl space-y-4 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#581c37]/50 border border-amber-500/30 flex items-center justify-center text-amber-400">
            ◆
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Défi & Énigme du Jour</h3>
            <p className="text-xs text-stone-400 mt-1">
              Une devinette ou un petit jeu de mots quotidien pour créer de la complicité instantanée.
            </p>
          </div>
          <button 
            onClick={() => setActiveCard('riddle')}
            className="w-full py-3 bg-[#701a3d] hover:bg-[#831843] text-white font-bold text-xs rounded-xl shadow-lg border border-amber-500/20 transition cursor-pointer"
          >
            Découvrir l'énigme du jour 💡
          </button>
        </div>
                    {/* Card 3: Pack Couple & Complicité */}
        <div className="bg-[#141017] border border-amber-500/20 rounded-2xl p-5 shadow-xl space-y-4 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#581c37]/50 border border-amber-500/30 flex items-center justify-center text-amber-400">
            🔥
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Mode Couple & Intimité</h3>
            <p className="text-xs text-stone-400 mt-1">
              Des questions profondes, des jeux de rôle et des défis sensuels pour renforcer vos liens.
            </p>
          </div>
          <button 
            onClick={() => setActiveCard('couple')}
            className="w-full py-3 bg-[#701a3d] hover:bg-[#831843] text-white font-bold text-xs rounded-xl shadow-lg border border-amber-500/20 transition cursor-pointer"
          >
            Explorer les packs couple
          </button>
        </div>

      </main>

      {/* SIDEBAR (Avec le lien Linktree de l'entreprise) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setSidebarOpen(false)}></div>

          <div className="relative w-80 max-w-[85%] bg-[#120e16] border-r border-amber-500/20 p-6 flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-amber-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#701a3d] text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                    {user ? user.initial : '👤'}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{user ? user.name : 'Visiteur'}</h4>
                    <p className="text-[10px] text-amber-400/80">{user ? 'Compte connecté' : 'Non connecté'}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#581c37]/40 flex items-center justify-center text-xs font-bold text-stone-300 hover:bg-[#581c37] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-6 space-y-1">
                <a href="https://wa.me/22872119966?text=Bonjour%20WiseEmpire,%20je%20souhaite%20contacter%20le%20support." target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#581c37]/30 transition text-sm text-stone-200 font-medium">
                  <span>📩 Nous contacter</span>
                  <span className="text-amber-400">›</span>
                </a>
                {/* Lien Linktree officiel de l'entreprise */}
                <a href="https://linktr.ee/ulrichwiseempire" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#581c37]/30 transition text-sm text-stone-200 font-medium">
                  <span>🌐 Linktree (WiseEmpire)</span>
                  <span className="text-amber-400">›</span>
                </a>
                <a href="https://wa.me/?text=Découvre%20WiseCharm,%20l'application%20ultime%20de%20charme%20et%20de%20connexion%20!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#581c37]/30 transition text-sm text-stone-200 font-medium">
                  <span>🔗 Partager l'application</span>
                  <span className="text-amber-400">›</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {user ? (
                <button 
                  onClick={handleLogout}
                  className="w-full py-2.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs rounded-xl hover:bg-rose-500/20 transition cursor-pointer"
                >
                  Se déconnecter
                </button>
              ) : (
                <button 
                  onClick={() => { setSidebarOpen(false); setLoginModalOpen(true); }}
                  className="w-full py-2.5 bg-amber-500 text-stone-950 font-bold text-xs rounded-xl shadow hover:bg-amber-400 transition cursor-pointer"
                >
                  Se connecter / S'inscrire
                </button>
              )}

              <div className="pt-4 border-t border-amber-500/10 text-center space-y-1">
                <p className="text-[10px] text-stone-400">WiseCharm v2.0.0 — WiseEmpire</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setLoginModalOpen(false)}></div>
          <div className="relative bg-[#16111a] border border-amber-500/30 rounded-3xl p-6 w-full max-w-md shadow-2xl z-10 space-y-5 text-center">
            
            <button 
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-bold text-white hover:bg-stone-700 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-white">Connexion à WiseCharm</h3>
              <p className="text-xs text-stone-400">Connectez-vous pour que votre prénom apparaisse dans l'application.</p>
            </div>

            <div className="space-y-3 pt-2">
              <button 
                onClick={() => handleLogin('Google', 'Ulrich')}
                className="w-full py-3 px-4 bg-white text-stone-900 font-bold text-xs rounded-xl shadow flex items-center justify-center gap-3 hover:bg-stone-100 transition cursor-pointer"
              >
                <span>🌐</span> Continuer avec Google
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-stone-800"></div>
                <span className="flex-shrink mx-4 text-[10px] text-stone-500 uppercase tracking-widest">ou avec votre pseudo</span>
                <div className="flex-grow border-t border-stone-800"></div>
              </div>

              <input 
                type="text" 
                placeholder="Entrez votre prénom..." 
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0b0813] border border-amber-500/30 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />

              <button 
                onClick={() => handleLogin('Email', inputName)}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition cursor-pointer hover:opacity-90"
              >
                Valider ma connexion 🚀
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ACTIVE CARD MODAL (Générateur / Énigme / Couple) */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setActiveCard(null)}></div>
          <div className="relative bg-[#16111a] border border-amber-500/30 rounded-3xl p-6 w-full max-w-md shadow-2xl z-10 space-y-4 text-center">
            
            <h3 className="text-xl font-bold text-white">
              {activeCard === 'generator' && '✨ Générateur de Charme'}
              {activeCard === 'riddle' && '◆ Le Défi Complicité'}
              {activeCard === 'couple' && '🔥 Mode Couple'}
            </h3>

            <div className="bg-[#0b0813] border border-amber-500/20 rounded-2xl p-4 my-4 text-stone-200 text-sm italic font-medium">
              {activeCard === 'generator' && '« Si le charme était une science, tu en serais la plus belle formule. »'}
              {activeCard === 'riddle' && '« Plus on me partage, plus je prends de la valeur. Je ne me touche pas, mais je peux rapprocher deux personnes en un instant. Que suis-je ? » (Réponse : Un secret ou un regard complice).'}
              {activeCard === 'couple' && '« Quel est ton plus beau souvenir de nous deux jusqu\'à présent ? »'}
            </div>

            <button 
              onClick={() => setActiveCard(null)}
              className="w-full py-3 bg-amber-500 text-stone-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* VIP MODAL */}
      {vipModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setVipModalOpen(false)}></div>
          
          <div className="relative bg-[#16111a] border border-amber-500/40 rounded-3xl p-6 w-full max-w-md shadow-2xl z-10 space-y-6 text-center max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setVipModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-bold text-white hover:bg-stone-700 cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="bg-amber-500/20 text-amber-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/40">
                👑 Pass VIP Illimité
              </span>
              <h2 className="text-2xl font-black text-white mt-2">Votre relation mérite l'excellence</h2>
              <p className="text-xs text-stone-300">
                Débloquez tous les modes et profitez d'une expérience complète via <span className="text-white font-bold">Flooz ou Yas</span> au <span className="text-white font-bold whitespace-nowrap">72 11 99 66</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-left">
              <div className="bg-[#0b0813] border border-amber-500/20 rounded-2xl p-3.5 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-white">1 Semaine</p>
                  <p className="text-[10px] text-stone-400">Idéal pour tester</p>
                </div>
                <p className="text-base font-extrabold text-white">500 <span className="text-xs font-normal text-stone-400">FCFA</span></p>
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
            </div>

            <a 
              href="https://wa.me/22872119966?text=Bonjour%20WiseEmpire,%20je%20souhaite%20m'abonner%20au%20Pass%20VIP%20WiseCharm%20via%20Flooz%20ou%20Yas." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 block rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-bold text-sm shadow-xl hover:opacity-90 transition cursor-pointer text-center"
            >
              S'abonner via Flooz / Yas 🚀
            </a>

            <p className="text-[10px] text-stone-400">
              Paiement instantané au <span className="text-white font-semibold">72 11 99 66</span>.
            </p>

          </div>
        </div>
      )}

    </div>
  );
          }
              
