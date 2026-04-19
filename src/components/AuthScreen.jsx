import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Sun, Lock, User, Axe } from "lucide-react";

export default function AuthScreen({ onLogin, onSignUp, error }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLogin) {
      await onLogin(email, password);
    } else {
      await onSignUp(email, password, name);
    }
    setIsLoading(false);
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-4">
      {/* Dark backdrop for Neon Auth */}
      <div className="absolute inset-0 bg-void-950/60 backdrop-blur-md pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-void-900/80 border border-neon-900/50 rounded-3xl p-8 backdrop-blur-xl shadow-[0_10px_50px_rgba(107,33,168,0.3)]"
      >
        <motion.div 
          className="flex justify-center mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
          animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0px 0px 10px #A855F7)", "drop-shadow(0px 0px 25px #A855F7)", "drop-shadow(0px 0px 10px #A855F7)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/escanor.jpeg" 
            alt="Escanor Tema" 
            className="w-24 h-24 object-cover rounded-full border-2 border-neon-500" 
          />
        </motion.div>

        <div className="text-center mb-8 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3">
             <h1 className="text-3xl font-black tracking-[0.1em] uppercase text-neon-100 drop-shadow-sm">
               MISSÃO ESCANOR
             </h1>
             <Axe className="w-8 h-8 text-neon-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-lg text-sm flex items-center gap-2 font-medium"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-neon-400 font-bold ml-1">
                Seu Nome de Domínio
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-void-950 border border-void-800 rounded-xl px-4 py-3 text-neon-100 placeholder-neon-800 focus:outline-none focus:border-neon-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all font-medium"
                  placeholder="Digite seu nome"
                  required={!isLogin}
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neon-600" />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-neon-400 font-bold ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-void-950 border border-void-800 rounded-xl px-4 py-3 text-neon-100 placeholder-neon-800 focus:outline-none focus:border-neon-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all font-medium"
              placeholder="seu@imperio.com"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-neon-400 font-bold ml-1">
              Senha
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-void-950 border border-void-800 rounded-xl px-4 py-3 text-neon-100 placeholder-neon-800 focus:outline-none focus:border-neon-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all font-medium"
                placeholder="********"
                required
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neon-600" />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-neon-600 to-neon-500 text-white font-black uppercase tracking-widest py-3.5 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all flex justify-center items-center gap-2 disabled:opacity-70 border border-neon-400"
          >
            {isLoading ? (
              <span className="animate-pulse">Aguarde...</span>
            ) : isLogin ? (
              <>
                Login <Lock className="w-5 h-5" />
              </>
            ) : (
              <>
                Cadastro <ShieldAlert className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-bold text-neon-400 hover:text-neon-200 transition-colors pointer"
          >
            {isLogin
              ? "Ainda não decidiu? Inicie aqui."
              : "Já possui o código? Faça Login."}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
