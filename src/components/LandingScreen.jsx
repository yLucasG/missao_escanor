import { motion } from "framer-motion";
import { Zap, ChevronRight, Shield } from "lucide-react";

export default function LandingScreen({ onLoginClick, checkoutURL }) {
  return (
    <div className="relative min-h-screen bg-void-950 flex flex-col items-center justify-center overflow-hidden font-sans text-neon-100">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void-900/40 via-void-950 to-void-950 mix-blend-multiply" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-600/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Left Side: Copy & Conversion */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-void-900 border border-neon-800 rounded-full mb-6">
             <Zap className="w-4 h-4 text-neon-400" />
             <span className="text-xs uppercase tracking-widest font-bold text-neon-300">Missão Escanor</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-300 via-neon-500 to-white leading-tight uppercase tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Quem decidiu que você deve ser comum?
          </h1>
          
          <p className="text-lg md:text-xl text-neon-200/80 mb-10 max-w-xl font-medium leading-relaxed">
            O protocolo de 30 dias para dominar sua Persuasão, seu Físico e sua Mentalidade de Elite.
          </p>

          <div className="w-full max-w-sm bg-void-900/80 backdrop-blur-md border border-neon-700/50 rounded-2xl p-6 shadow-[0_0_40px_rgba(107,33,168,0.2)] flex flex-col items-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-neon-400 text-sm uppercase tracking-widest font-bold mb-2">Acesso Imediato</div>
            <div className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] mb-6 flex items-start gap-1">
              <span className="text-2xl mt-1 text-neon-300">R$</span> 29,90
            </div>

            <motion.a
              href={checkoutURL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full relative bg-neon-600 text-white font-black uppercase tracking-widest py-4 px-6 rounded-xl flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.9)] hover:shadow-[0_0_60px_rgba(168,85,247,1)] transition-all animate-pulse"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              ASSUMIR O COMANDO AGORA <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>

          <button 
            onClick={onLoginClick}
            className="mt-6 text-sm font-bold text-void-400 hover:text-neon-300 transition-colors uppercase tracking-widest border-b border-transparent hover:border-neon-500 pb-0.5"
          >
            Já tenho acesso / Login
          </button>
        </motion.div>

        {/* Right Side: Visual Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative flex justify-center items-center h-[500px] w-full"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15], filter: ["drop-shadow(0px 0px 20px #A855F7)", "drop-shadow(0px 0px 50px #A855F7)", "drop-shadow(0px 0px 20px #A855F7)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img src="/escanor.png" alt="Escanor" className="h-[400px] md:h-[500px] object-contain drop-shadow-2xl" />
          </motion.div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-0 border-[1px] border-dashed border-neon-700/30 rounded-full w-[450px] h-[450px] md:w-[550px] md:h-[550px] m-auto pointer-events-none"
          />
        </motion.div>
      </div>

    </div>
  );
}
