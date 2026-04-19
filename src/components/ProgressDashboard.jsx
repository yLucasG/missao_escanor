import { motion } from "framer-motion";
import { Flame, TrendingUp } from "lucide-react";

export default function ProgressDashboard({ completedToday, totalToday, overallPercent }) {
  const todayPercent = totalToday > 0 ? (completedToday / totalToday) * 100 : 0;

  // Power level thresholds
  const getPowerLevel = () => {
    if (todayPercent === 100) return { label: "PODER MÁXIMO", color: "text-gold-300", bg: "from-gold-600 via-gold-500 to-gold-300" };
    if (todayPercent >= 75) return { label: "ASCENSÃO", color: "text-gold-400", bg: "from-gold-700 to-gold-400" };
    if (todayPercent >= 50) return { label: "DESPERTAR", color: "text-gold-500", bg: "from-gold-800 to-gold-500" };
    if (todayPercent >= 25) return { label: "AURORA", color: "text-gold-600", bg: "from-night-600 to-gold-700" };
    return { label: "NOTURNO", color: "text-night-400", bg: "from-night-700 to-night-500" };
  };

  const power = getPowerLevel();

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-5xl mx-auto px-4 mb-6"
    >
      {/* Slim Bar Design replacing the huge dashboard */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/60 border border-night-600/30 rounded-xl px-5 py-3 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        
        {/* Left side: Overall progress */}
        <div className="flex items-center gap-4 w-full sm:w-1/2">
          <div className="flex items-center gap-2 min-w-[100px]">
            <TrendingUp className="w-4 h-4 text-gold-500" />
            <span className="text-xs uppercase font-bold text-gray-300">Total</span>
          </div>
          <div className="flex-1 h-1.5 bg-night-800/80 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-700 via-gold-500 to-gold-300 shadow-[0_0_8px_rgba(255,179,0,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${overallPercent}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-black text-gold-400 min-w-[35px] text-right">
            {Math.round(overallPercent)}%
          </span>
        </div>

        {/* Divider for desktop */}
        <div className="hidden sm:block w-px h-6 bg-night-600/50" />

        {/* Right side: Termômetro (Slim) */}
        <div className="flex items-center gap-4 w-full sm:w-1/2 justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <Flame className={`w-4 h-4 ${power.color}`} />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gray-300">
              Hoje: <span className={power.color}>{power.label}</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-night-400">
              {completedToday}/{totalToday}
            </span>
            <div className="w-24 h-1.5 bg-night-800/80 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${power.bg}`}
                initial={{ width: 0 }}
                animate={{ width: `${todayPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  boxShadow: todayPercent === 100 ? "0 0 10px rgba(255, 179, 0, 0.6)" : "none",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
