import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gift({ gift }) {
  const [pullString, setPullString] = useState(false); // tirer la ficelle
  const [hideKnot, setHideKnot] = useState(false);     // nœud disparaît
  const [opened, setOpened] = useState(false);         // papier disparaît

  const handleClick = () => {
    setPullString(true);                  // étape 1 : tirer la ficelle
    setTimeout(() => setHideKnot(true), 400); // étape 2 : nœud disparaît
    setTimeout(() => setOpened(true), 700);   // étape 3 : papier cadeau disparaît
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="w-64 h-64 relative">

        {/* Contenu du cadeau */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-lg z-0">
          <img src={gift.img} alt={gift.title} className="w-full h-32 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2">{gift.title}</h3>
          <a href={gift.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 mt-1 underline">
            Voir le produit
          </a>
        </div>

        {/* Papier cadeau qui s’estompe */}
        <AnimatePresence>
          {!opened && (
            <motion.div
              key="paper"
              className="absolute inset-0 z-5 bg-gift-pattern rounded-xl"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Bouton interactif retiré après ouverture */}
        {!opened && (
          <motion.button
            className="absolute inset-0 z-10 border-0 p-0"
            onClick={handleClick}
          >
            <div className="w-full h-full flex flex-col items-center justify-center relative">

              {/* Ficelle */}
              <motion.div
                className="absolute top-3 transform -translate-x-1/2 w-1 h-24 rounded-full bg-green-600"
                initial={{ y: 0, rotate: 0, opacity: 1 }}
                animate={pullString ? { y: 20, rotate: 15 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.4 }}
              />

              {/* Nœud réaliste */}
              <motion.div
                className="absolute top-0 transform -translate-x-1/2 w-12 h-6 z-30 flex items-center justify-center"
                initial={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
                animate={hideKnot ? { y: -60, rotate: 20, opacity: 0, scale: 0.8 } : { y: 0, rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Boucle gauche */}
                <div
                  className="w-5 h-5"
                  style={{
                    borderRadius: '50% 50% 30% 50%',
                    background: 'linear-gradient(135deg, #38a169, #276749)',
                    boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.3), inset 1px 1px 2px rgba(255,255,255,0.2)',
                    marginRight: '2px'
                  }}
                />
                {/* Centre du nœud */}
                <div
                  className="w-2 h-4"
                  style={{
                    borderRadius: '2px',
                    background: 'linear-gradient(180deg, #276749, #1f3d33)',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)',
                    margin: '0 2px'
                  }}
                />
                {/* Boucle droite */}
                <div
                  className="w-5 h-5"
                  style={{
                    borderRadius: '50% 50% 50% 30%',
                    background: 'linear-gradient(135deg, #38a169, #276749)',
                    boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.3), inset 1px 1px 2px rgba(255,255,255,0.2)',
                    marginLeft: '2px'
                  }}
                />
              </motion.div>

              <div className="absolute bottom-3 text-xs text-white/90 z-20">Cliquer pour ouvrir</div>
            </div>
          </motion.button>
        )}

      </div>
    </div>
  );
}
