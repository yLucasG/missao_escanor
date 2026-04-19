import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DaySelector({ currentDay, selectedDay, onSelect, dayCompletion }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector(`[data-day="${selectedDay}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [selectedDay]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 150, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto px-4 mb-6"
    >
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => scroll(-1)}
          className="flex-shrink-0 p-1.5 rounded-lg bg-void-900/60 border border-void-800 hover:border-neon-500 text-neon-300 hover:text-neon-200 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-1.5 overflow-x-auto scrollbar-hide py-3 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const isSelected = day === selectedDay;
            const isCurrent = day === currentDay;
            const completion = dayCompletion[day] || 0;
            const isCompleted = completion === 100;

            return (
              <motion.button
                key={day}
                data-day={day}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelect(day)}
                className={`
                  relative flex-shrink-0 w-8 h-8 rounded-lg text-xs font-black transition-all duration-300
                  ${
                    isSelected
                      ? "bg-gradient-to-br from-neon-500 to-neon-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-neon-400"
                      : isCompleted
                      ? "bg-neon-600/90 text-white shadow-sm border border-neon-500"
                      : isCurrent
                      ? "bg-void-800 text-neon-400 border border-neon-500"
                      : "bg-void-900/60 text-neon-200/50 border border-void-800 hover:border-neon-600 hover:text-neon-300"
                  }
                `}
              >
                {day}
                {isCurrent && !isSelected && (
                  <motion.span
                    className="absolute inset-0 rounded-lg border-2 border-neon-500"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <button
          onClick={() => scroll(1)}
          className="flex-shrink-0 p-1.5 rounded-lg bg-void-900/60 border border-void-800 hover:border-neon-500 text-neon-300 hover:text-neon-200 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
