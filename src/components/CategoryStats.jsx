import { motion } from "framer-motion";
import { challengeDays } from "../data/challengeData";
import { Dumbbell, Brain, Handshake, Route, Zap } from "lucide-react";

export default function CategoryStats({ stateTasks }) {
  const stats = {
    physical: { max: 0, current: 0, label: "Físico", icon: <Dumbbell className="w-5 h-5"/>, color: "text-pink-400", bg: "bg-void-900", border: "border-pink-500/30" },
    mindset: { max: 0, current: 0, label: "Mentalidade", icon: <Brain className="w-5 h-5"/>, color: "text-blue-400", bg: "bg-void-900", border: "border-blue-500/30" },
    sales: { max: 0, current: 0, label: "Persuasão", icon: <Handshake className="w-5 h-5"/>, color: "text-emerald-400", bg: "bg-void-900", border: "border-emerald-500/30" },
    running: { max: 0, current: 0, label: "Corrida 80KM", icon: <Route className="w-5 h-5"/>, color: "text-orange-400", bg: "bg-void-900", border: "border-orange-500/30" },
    apice: { max: 0, current: 0, label: "Ápice Solar", icon: <Zap className="w-5 h-5"/>, color: "text-neon-400", bg: "bg-void-900", border: "border-neon-500/30" }
  };

  challengeDays.forEach(day => {
    Object.entries(day.categories).forEach(([key, cat]) => {
      if (stats[key]) {
        stats[key].max += cat.tasks.length * cat.pointsPerTask;
        cat.tasks.forEach(t => {
          if (stateTasks[`${day.day}-${t.id}`]) {
            stats[key].current += cat.pointsPerTask;
          }
        });
      }
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-void-950/80 border border-neon-900/50 rounded-2xl p-5 mb-8 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-sm font-black uppercase tracking-widest text-neon-300 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
        Estatísticas de Combate Geral
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.keys(stats).map((key) => {
          const s = stats[key];
          if (s.max === 0) return null; // Hide if unused
          const percent = s.max > 0 ? (s.current / s.max) * 100 : 0;
          return (
            <div key={key} className={`p-4 rounded-xl border ${s.border} ${s.bg} flex flex-col gap-2 shadow-inner`}>
               <div className="flex items-center gap-2">
                 <div className={s.color}>{s.icon}</div>
                 <span className={`text-xs font-bold uppercase tracking-wider ${s.color}`}>
                   {s.label}
                 </span>
               </div>
               <div className="flex items-end gap-1 mt-1">
                 <span className={`text-2xl font-black text-white drop-shadow-md`}>{s.current}</span>
                 <span className={`text-xs mb-1 opacity-70 ${s.color}`}>/ {s.max} PTS</span>
               </div>
               <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-void-800">
                 <motion.div 
                   className={`h-full ${s.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`}
                   initial={{ width: 0 }}
                   animate={{ width: `${percent}%` }}
                   transition={{ duration: 1 }}
                 />
               </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
