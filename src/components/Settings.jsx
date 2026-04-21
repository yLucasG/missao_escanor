import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Save, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Settings({ onBack }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: 'As senhas não coincidem.' });
      return;
    }
    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'A senha deve constar no mínimo 6 caracteres.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    setLoading(false);
    if (error) {
      setStatus({ type: 'error', message: `Erro ao atualizar: ${error.message}` });
    } else {
      setStatus({ type: 'success', message: 'Credenciais atualizadas!' });
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-void-950/80 border border-neon-900/50 rounded-3xl p-8 backdrop-blur-xl shadow-[0_10px_50px_rgba(107,33,168,0.3)]"
      >
        <button 
          onClick={onBack}
          className="text-neon-400 hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-widest font-bold mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para o Dashboard
        </button>

        <div className="flex items-center justify-start gap-3 mb-8">
          <SettingsIcon className="w-7 h-7 text-neon-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <h2 className="text-xl font-black tracking-widest uppercase text-neon-100 drop-shadow-sm">
            Configurações
          </h2>
        </div>

        {status.message && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-4 rounded-xl mb-6 flex items-center gap-3 text-sm font-bold border ${
              status.type === 'success' 
                ? 'bg-green-900/40 border-green-500/50 text-green-400' 
                : 'bg-red-900/40 border-red-500/50 text-red-400'
            }`}
          >
            {status.type === 'success' ? <ShieldCheck className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            {status.message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-neon-400 mb-2">
              Nova Senha
            </label>
            <input 
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full bg-void-900/50 border border-neon-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-500 focus:ring-1 focus:ring-neon-500 transition-all font-mono shadow-inner"
              placeholder="Digite a nova credencial de acesso..."
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-neon-400 mb-2">
              Confirmar Nova Senha
            </label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-void-900/50 border border-neon-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-500 focus:ring-1 focus:ring-neon-500 transition-all font-mono shadow-inner"
              placeholder="Confirme para validar as trevas..."
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-gradient-to-r from-neon-600 to-neon-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2 border border-neon-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Save className="w-5 h-5" /> ATUALIZAR CREDENCIAIS
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
