import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, PlayCircle } from "lucide-react";

export default function TaskCard({ task, checked, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.015, y: -4 }}
      className={`
        group relative flex flex-col p-5 mb-3 rounded-2xl border transition-all duration-300
        ${
          checked
            ? "bg-void-800/80 border-neon-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            : "bg-void-900/60 border-void-800 hover:border-neon-600 hover:shadow-[0_8px_20px_rgba(168,85,247,0.15)] backdrop-blur-sm"
        }
      `}
    >
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-1 bg-gradient-to-r from-neon-600/30 to-transparent rounded-3xl blur-xl pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="relative z-10 pt-1 flex-shrink-0">
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="solar-checkbox-lg peer absolute w-full h-full cursor-pointer z-10"
            id={`task-${task.id}`}
          />
          <div className={`
            relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 border-2 rounded-lg transition-all duration-300 overflow-hidden
            ${checked 
              ? "bg-gradient-to-br from-neon-500 to-neon-600 border-neon-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
              : "border-void-800 bg-void-950 peer-hover:border-neon-500 peer-hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]"}
          `}>
            {checked && (
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Sparkles className="w-5 h-5 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <label
            htmlFor={`task-${task.id}`}
            className={`block text-base sm:text-lg leading-snug cursor-pointer font-semibold transition-all duration-300 ${
              checked ? "text-neon-400 line-through decoration-neon-500/50" : "text-neon-100"
            }`}
          >
            {task.label}
          </label>
          
          <div className="mt-3 flex flex-wrap items-center gap-3">
             <span className="flex items-center gap-1 bg-void-800 text-neon-300 text-xs font-bold px-2 py-1 rounded border border-void-800">
               <ArrowUpRight className="w-3 h-3 text-neon-500"/> +{task.points || 10} PTS
             </span>

             {/* Prominent Link Button */}
             {task.link && (
               <a
                 href={task.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={(e) => e.stopPropagation()}
                 className="flex items-center gap-1.5 bg-neon-600 hover:bg-neon-500 text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-md shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all"
               >
                 <PlayCircle className="w-4 h-4" /> Acessar Conteúdo
               </a>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
