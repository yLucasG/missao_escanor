import { motion } from "framer-motion";
import TaskCard from "./TaskCard";

export default function CategoryBoard({ categories, stateTasks, handleToggleTask, selectedDay }) {
  // Mapping neon colors to category keys
  const config = {
    physical: { border: "border-pink-500/50", bg: "bg-void-900/60", title: "text-pink-400" },
    mindset: { border: "border-blue-500/50", bg: "bg-void-900/60", title: "text-blue-400" },
    sales: { border: "border-emerald-500/50", bg: "bg-void-900/60", title: "text-emerald-400" },
    running: { border: "border-orange-500/50", bg: "bg-void-900/60", title: "text-orange-400" },
    apice: { border: "border-neon-500/80", bg: "bg-void-900/80", title: "text-neon-400" } // day 30
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-neon-100">
      {Object.entries(categories).map(([key, cat], i) => {
        const style = config[key] || { border: "border-neon-600/50", bg: "bg-void-900/60", title: "text-neon-400" };
        
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl border-t-2 shadow-[0_5px_20px_rgba(0,0,0,0.6)] backdrop-blur-md p-5 sm:p-6 ${style.border} ${style.bg}`}
          >
            <div className="flex flex-col mb-4">
              <h3 className={`text-sm sm:text-base font-black uppercase tracking-[0.15em] drop-shadow-sm ${style.title}`}>
                {cat.title}
              </h3>
              <div className="h-px w-full bg-void-800 mt-2" />
            </div>

            <div className="space-y-1">
              {cat.tasks.map((task, index) => {
                const combinedTaskId = `${selectedDay}-${task.id}`;
                return (
                  <TaskCard
                    key={task.id}
                    task={{ ...task, points: cat.pointsPerTask }}
                    checked={!!stateTasks[combinedTaskId]}
                    onToggle={(e) => handleToggleTask(selectedDay, task, cat.pointsPerTask)}
                    index={index}
                  />
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
