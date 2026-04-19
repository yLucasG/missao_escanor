import { motion } from "framer-motion";
import { Crown, Calendar } from "lucide-react";
import SunIcon from "./SunIcon";

export default function Header({ currentDay, graduationDays }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-800 via-night-900 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,179,0,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Sun Icon */}
          <SunIcon size={70} glow />

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.15em] uppercase bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              Protocolo Solar
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-500/70 mt-1 font-semibold">
              Domínio em 30 Dias
            </p>
          </div>

          {/* Counters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-night-700/50 border border-night-500/30 rounded-xl px-4 py-2.5 backdrop-blur-sm"
            >
              <Crown className="w-4 h-4 text-gold-500" />
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-gold-500/60 font-medium">
                  Formatura
                </p>
                <p className="text-lg font-bold text-gold-400">
                  {graduationDays}{" "}
                  <span className="text-xs text-gold-500/50 font-normal">
                    dias
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-night-700/50 border border-gold-500/20 rounded-xl px-4 py-2.5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,179,0,0.1)]"
            >
              <Calendar className="w-4 h-4 text-gold-500" />
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-gold-500/60 font-medium">
                  Dia Atual
                </p>
                <p className="text-lg font-bold text-gold-400">
                  {currentDay}
                  <span className="text-xs text-gold-500/50 font-normal">
                    /30
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </motion.header>
  );
}
