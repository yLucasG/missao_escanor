import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Save, Check } from "lucide-react";

export default function NightAudit({ selectedDay, audit, onChange, onSave }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-8 text-neon-100"
    >
      <div className="bg-void-900/40 border border-void-800 rounded-2xl p-5 sm:p-6 backdrop-blur-lg shadow-inner">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-neon-500" />
          <h2 className="text-sm uppercase tracking-[0.2em] font-black text-neon-300 drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]">
            Anotações do Comandante — Dia {selectedDay}
          </h2>
        </div>

        <div className="relative">
          <textarea
            value={audit}
            onChange={(e) => {
              onChange(e.target.value);
              if(saved) setSaved(false);
            }}
            placeholder="Relatório do turno: Como as trevas cederam à sua luz?"
            rows={4}
            className="w-full bg-void-950/80 border border-void-800 rounded-xl px-4 py-3 text-base text-neon-50 placeholder-neon-800 focus:outline-none focus:border-neon-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all resize-none font-medium shadow-inner"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className={`
              mt-4 flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-xl text-sm font-black tracking-widest uppercase transition-all duration-300 w-full sm:w-auto
              ${
                saved
                  ? "bg-green-900/60 border border-green-500 text-green-300"
                  : "bg-gradient-to-r from-neon-600 to-neon-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] border border-neon-400"
              }
            `}
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" /> Relato Feito
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Salvar Auditoria
              </>
            )}
          </motion.button>
        </div>
      </div>

      <div className="mt-8 text-center pb-4">
        <div className="h-px bg-void-800 w-full mb-4" />
        <p className="text-xs text-neon-600/80 tracking-wide font-bold uppercase drop-shadow-sm">
          MISSÃO SCANOR NEON © 2026 — "Quem decidiu isso? Eu."
        </p>
      </div>
    </motion.section>
  );
}
