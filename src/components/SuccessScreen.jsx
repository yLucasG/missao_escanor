import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function SuccessScreen({ onLoginClick }) {
  return (
    <div className="relative min-h-screen bg-void-950 flex flex-col items-center justify-center overflow-hidden font-sans text-neon-100 p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void-900/40 via-void-950 to-void-950 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-600/20 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl bg-void-900/80 backdrop-blur-xl border border-neon-800/60 rounded-3xl p-8 md:p-12 shadow-[0_10px_50px_rgba(107,33,168,0.3)] flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="bg-green-500/10 p-4 rounded-full mb-6"
        >
          <CheckCircle2 className="w-20 h-20 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-300 to-white uppercase tracking-widest mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
          Missão Aceita, Comandante!
        </h1>

        <p className="text-lg text-neon-200/80 font-medium mb-8">
          Seu pagamento foi aprovado com sucesso.
        </p>

        {/* Alerta de Atenção com Borda Amarela */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full bg-void-950 border border-yellow-500/50 rounded-2xl p-6 mb-8 text-left shadow-[0_0_20px_rgba(234,179,8,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600" />
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-500 shrink-0 mt-0.5 animate-pulse" />
            <div>
              <h3 className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">Atenção Necessária</h3>
              <p className="text-neon-200 text-sm md:text-base leading-relaxed font-medium">
                O seu Login e a sua Senha de acesso exclusivo acabaram de ser enviados para o seu <strong className="text-white">E-MAIL</strong>. 
                <br className="hidden md:block" />
                Verifique sua caixa de entrada <span className="opacity-70">(e a pasta Spam)</span> para pegar sua senha antes de prosseguir.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLoginClick}
          className="w-full sm:w-auto px-8 py-4 bg-neon-600 text-white font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition-all"
        >
          Ir Para O Login <ArrowRight className="w-5 h-5" />
        </motion.button>

      </motion.div>
    </div>
  );
}
