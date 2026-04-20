import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";
import DaySelector from "./components/DaySelector";
import CategoryBoard from "./components/CategoryBoard";
import CategoryStats from "./components/CategoryStats";
import NightAudit from "./components/NightAudit";
import AuthScreen from "./components/AuthScreen";
import LandingScreen from "./components/LandingScreen";
import SuccessScreen from "./components/SuccessScreen";
import { challengeDays } from "./data/challengeData";
import { useSupabase } from "./hooks/useSupabase";

export default function App() {
  const { session, loading, login, signUp, logout, fetchProgress, syncProgress } = useSupabase();

  const [state, setState] = useState({ tasks: {}, audits: {}, points: 0, currentDay: 1 });
  const [selectedDay, setSelectedDay] = useState(1);
  const [dataLoading, setDataLoading] = useState(false);
  const [escanorEffect, setEscanorEffect] = useState(false);
  const [dayAdvanceAnim, setDayAdvanceAnim] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);
  
  const checkoutURL = "https://pay.kiwify.com.br/ZHnddb8";

  // Load user data upon login
  useEffect(() => {
    async function loadData() {
      if (session?.user) {
        setDataLoading(true);
        const data = await fetchProgress(session.user.id);
        setState({
          tasks: data.tasks || {},
          audits: data.audits || {},
          points: data.points || 0,
          currentDay: data.currentDay || 1
        });
        setSelectedDay(data.currentDay || 1);
        setDataLoading(false);
      } else {
        setState({ tasks: {}, audits: {}, points: 0, currentDay: 1 });
      }
    }
    loadData();
  }, [session]);

  const getRank = (points) => {
    if (points >= 800) return "Supremacia Neon";
    if (points >= 500) return "Senhor do Crepúsculo";
    if (points >= 200) return "Sombra Indomável";
    if (points >= 50) return "Leão da Noite";
    return "Iniciado das Trevas";
  };

  const handleToggleTask = async (day, task, pointsValue) => {
    const key = `${day}-${task.id}`;
    const isCompleted = !state.tasks[key];
    const pointsDelta = isCompleted ? pointsValue : -pointsValue;
    const newPoints = Math.max(0, state.points + pointsDelta);

    if (isCompleted && (newPoints === 50 || newPoints === 200 || newPoints === 500 || newPoints === 800)) {
      setEscanorEffect(true);
      setTimeout(() => setEscanorEffect(false), 4500);
    }

    const newState = {
      ...state,
      points: newPoints,
      tasks: { ...state.tasks, [key]: isCompleted }
    };

    setState(newState);
    if (session?.user) {
      await syncProgress(session.user.id, newState);
    }
  };

  const handleSaveAudit = async (day, text) => {
    const newState = {
      ...state,
      audits: { ...state.audits, [day]: text },
    };
    setState(newState);
    if (session?.user) {
      await syncProgress(session.user.id, newState);
    }
  };

  const dayCompletion = useMemo(() => {
    const map = {};
    if (!state.tasks) return map;
    challengeDays.forEach((cd) => {
      let totalTasks = 0;
      let done = 0;
      Object.values(cd.categories).forEach(cat => {
         totalTasks += cat.tasks.length;
         cat.tasks.forEach(t => {
            if (state.tasks[`${cd.day}-${t.id}`]) done++;
         });
      });
      map[cd.day] = totalTasks > 0 ? (done / totalTasks) * 100 : 0;
    });
    return map;
  }, [state.tasks]);

  // AUTO-ADVANCE LOGIC
  useEffect(() => {
    const currentComp = dayCompletion[state.currentDay];
    if (currentComp === 100 && state.currentDay < 30) {
      // Trigger advance animation
      setDayAdvanceAnim(true);
      const timer = setTimeout(() => {
        const nextDay = state.currentDay + 1;
        const newState = { ...state, currentDay: nextDay };
        setState(newState);
        setSelectedDay(nextDay);
        setDayAdvanceAnim(false);
        if (session?.user) {
           syncProgress(session.user.id, newState);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [dayCompletion, state.currentDay, session]);


  const selectedDayData = challengeDays.find((d) => d.day === selectedDay);
  const displayName = session?.user?.user_metadata?.display_name || "Lorde Desconhecido";

  if (loading) {
    return (
      <div className="min-h-screen bg-void-950 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-neon-800 border-t-neon-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative font-sans text-neon-100 selection:bg-neon-500/30 overflow-x-hidden">
      
      {/* EPIC NEON PURPLE PARALLAX */}
      <div className="fixed inset-0 z-0 bg-void-950">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: 'url("/escanor.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-void-900/90 via-void-950/95 to-void-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-purple-900/10 pointer-events-none" />
      </div>

      {/* AUTO-ADVANCE ANIMATION OVERLAY */}
      <AnimatePresence>
         {dayAdvanceAnim && (
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
             className="fixed inset-0 z-[60] flex items-center justify-center bg-void-950/80 backdrop-blur-sm pointer-events-none"
           >
              <motion.div 
                 initial={{ scale: 0.5, y: 50 }} 
                 animate={{ scale: 1, y: 0 }} 
                 className="text-center font-black text-neon-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              >
                  <h2 className="text-4xl uppercase tracking-widest mb-2">Dia Concluído</h2>
                  <p className="text-neon-400 font-bold opacity-80">Avançando para o próximo alvo...</p>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>

      {/* ESCANOR QUEM DECIDIU ISSO EFFECT (NEON) */}
      <AnimatePresence>
        {escanorEffect && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-neon-800/80 to-transparent mix-blend-overlay" />
            <motion.h1 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="text-5xl sm:text-7xl md:text-9xl font-black text-white text-center drop-shadow-[0_10px_30px_rgba(168,85,247,0.8)] leading-none uppercase"
               style={{ WebkitTextStroke: "2px #A855F7" }}
            >
              Quem<br/>decidiu<br/>isso?
            </motion.h1>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2, 4], opacity: [0, 0.4, 0] }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute w-[50vh] h-[50vh] bg-neon-500 rounded-full blur-[100px] z-[-1]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!session ? (
        currentPath === '/sucesso' || currentPath === '/obrigado' ? (
          <SuccessScreen onLoginClick={() => {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
            setShowAuth(true);
          }} />
        ) : showAuth ? (
          <AuthScreen onLogin={login} onSignUp={signUp} onBack={() => setShowAuth(false)} />
        ) : (
          <LandingScreen onLoginClick={() => setShowAuth(true)} checkoutURL={checkoutURL} />
        )
      ) : (
        <div className="relative z-10">
          
          {/* CABEÇALHO (HUD NEON) */}
          <div className="w-full bg-void-950/80 border-b border-neon-900/50 backdrop-blur-xl sticky top-0 z-50 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-neon-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                <h1 className="text-sm sm:text-base font-black tracking-widest uppercase text-neon-100">
                  Comandante: <span className="text-neon-400 drop-shadow-sm">{displayName}</span>
                </h1>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 bg-void-900 border border-neon-800/80 rounded-lg px-4 py-1.5 shadow-inner text-xs sm:text-sm font-bold uppercase tracking-wider">
                 <div className="text-neon-300">Dia: <span className="text-neon-500 font-black">{state.currentDay}/30</span></div>
                 <div className="w-px h-4 bg-neon-800" />
                 <div className="text-neon-300">Nível: <span className="text-neon-500 font-black">{getRank(state.points)}</span></div>
                 <div className="w-px h-4 bg-neon-800" />
                 <div className="text-neon-300">Pontos: <span className="text-neon-500 font-black">{state.points}</span></div>
              </div>

              <button 
                onClick={logout} 
                className="text-xs text-neon-100 hover:text-white uppercase tracking-widest font-bold bg-void-800 hover:bg-neon-600 px-4 py-1.5 rounded-full border border-neon-700 transition-colors shadow-sm"
               >
                Sair
               </button>
            </div>
          </div>

          <div className="pt-6">
            <DaySelector
              currentDay={state.currentDay}
              selectedDay={selectedDay}
              onSelect={setSelectedDay}
              dayCompletion={dayCompletion}
            />
          </div>

          {dataLoading ? (
             <div className="flex justify-center py-20">
               <div className="w-12 h-12 border-4 border-neon-800 border-t-neon-500 rounded-full animate-spin" />
             </div>
          ) : (
            <main className="max-w-6xl mx-auto px-4 pb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryStats stateTasks={state.tasks} />

                  {selectedDayData && (
                    <CategoryBoard 
                       categories={selectedDayData.categories}
                       stateTasks={state.tasks}
                       handleToggleTask={handleToggleTask}
                       selectedDay={selectedDay}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </main>
          )}

          {!dataLoading && (
            <div className="bg-void-950/90 backdrop-blur-lg border-t border-neon-900/50 w-full relative z-20 pb-4 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
              <NightAudit
                selectedDay={selectedDay}
                audit={state.audits[selectedDay] || ""}
                onSave={handleSaveAudit}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
