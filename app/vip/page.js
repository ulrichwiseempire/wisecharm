"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function VipPage() {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("charmeur");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const responses = {
    charmeur: [
      "Tu as ce petit truc dans le regard qui rend chaque silence captivant.",
      "Si le charme était une science, tu en serais la plus belle formule.",
      "On s'est croisés par hasard, mais j'ai très envie d'y ajouter un peu d'intention."
    ],
    drole: [
      "Je voulais te dire un truc intelligent, mais ma mémoire a buggé dès que tu as souri.",
      "Si la beauté était un crime, tu serais en prison à perpétuité !",
      "On fait un pari ? Si je devine ton prénom, tu m'offres un café. Si je me trompe, je t'offre un restaurant."
    ],
    audacieux: [
      "Je n'aime pas tourner autour du pot : ta présence m'intrigue énormément.",
      "Dis-moi, tu es toujours aussi captivante ou c'est juste un effort pour aujourd'hui ?",
      "Je devais juste te dire que ton énergie sort vraiment du lot."
    ]
  };

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult("");

    setTimeout(() => {
      const selectedToneResponses = responses[tone];
      const randomIndex = Math.floor(Math.random() * selectedToneResponses.length);
      setResult(selectedToneResponses[randomIndex]);
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#0B0C10] text-[#F4F5F7] p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-xl space-y-6">
        
        {/* En-tête avec Badge VIP */}
        <header className="flex justify-between items-center pb-4 border-b border-[#1F2833]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#800020] flex items-center justify-center shadow-lg border border-amber-500/30 overflow-hidden">
              <img src="/logo2.png" alt="Logo WiseCharm" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wider text-white">
                WISE<span className="text-amber-400">CHARM</span>
              </h1>
              <p className="text-xs text-gray-400">Par WiseEmpire</p>
            </div>
          </div>
          <span className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-md animate-pulse">
            👑 Membre VIP
          </span>
        </header>

        {/* Bannière de Bienvenue VIP */}
        <div className="bg-gradient-to-r from-[#1F2833] via-[#800020]/40 to-[#1F2833] border border-amber-500/40 p-4 rounded-xl text-center space-y-1">
          <p className="text-amber-400 font-semibold text-sm">Accès Illimité Débloqué ✨</p>
          <h2 className="text-2xl font-extrabold text-white">L'art des mots, la finesse du charme.</h2>
          <p className="text-xs text-gray-300">Générez autant de messages que vous le souhaitez sans aucune restriction.</p>
        </div>

        {/* Zone de Génération */}
        <section className="bg-[#1F2833]/50 border border-amber-500/20 rounded-2xl p-6 space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <span>✨</span> Générateur de Charme VIP
          </h3>

          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-300">Quel est le contexte ou le profil ?</label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Premier message sur Insta, relance gentille..."
              className="w-full bg-[#0B0C10] border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-400 transition-all text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-300">Choisissez le ton :</label>
            <div className="grid grid-cols-3 gap-2">
              {["charmeur", "drole", "audacieux"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg capitalize transition-all ${
                    tone === t
                      ? "bg-amber-500 text-black font-bold shadow-md"
                      : "bg-[#0B0C10] text-gray-400 border border-gray-800 hover:border-gray-600"
                  }`}
                >
                  {t === "drole" ? "Drôle" : t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full bg-gradient-to-r from-[#800020] to-red-900 hover:opacity-90 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm mt-2 border border-amber-500/30"
          >
            {loading ? "Génération VIP en cours..." : "Générer la Réponse VIP 🚀"}
          </button>

          {/* Résultat */}
          {result && (
            <div className="mt-4 p-4 bg-[#0B0C10] border border-amber-500/40 rounded-xl space-y-2 animate-fade-in">
              <div className="flex justify-between items-center">
                <span className="text-xs text-amber-400 font-semibold">Message suggéré :</span>
                <button
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="text-xs bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 px-2.5 py-1 rounded-md transition-all"
                >
                  📋 Copier
                </button>
              </div>
              <p className="text-sm italic text-gray-200">"{result}"</p>
            </div>
          )}
        </section>

        {/* Pied de page */}
        <footer className="text-center pt-6 text-xs text-gray-500 space-y-1">
          <p>© 2026 WiseCharm VIP. Membre de l'écosystème WiseEmpire.</p>
          <a
            href="https://linktr.ee/Ulrichwiseempire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline inline-block mt-1"
          >
            Explorer tout l'univers WiseEmpire ✦
          </a>
        </footer>

      </div>
    </main>
  );
    }
          
