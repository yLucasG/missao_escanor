import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export function useSupabase() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mockState, setMockState] = useState({
    tasks: {},
    audits: {},
    points: 0,
    currentDay: 1
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    return { error };
  };

  const signUp = async (email, password, displayName) => {
    setError(null);
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        data: {
          display_name: displayName
        }
      }
    });
    if (error) setError(error.message);
    return { error };
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const fetchProgress = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("user_progress")
        .select("completed_task_ids, audits, current_day, total_points")
        .eq("user_id", userId)
        .single();

      if (error) {
        // PGRST116 significa que a linha não existe (o usuário ainda não tem progresso salvo).
        // Isso é normal para novos usuários, retornamos o estado zerado ao invés de erro.
        if (error.code === 'PGRST116') {
          return { tasks: {}, audits: {}, currentDay: 1, points: 0 };
        }
        throw error;
      }

      return {
        tasks: data.completed_task_ids || {},
        audits: data.audits || {},
        currentDay: data.current_day || 1,
        points: data.total_points || 0
      };
    } catch (err) {
      console.error("Erro ao buscar progresso (Tabela pode não existir):", err.message || err);
      // Fallback de segurança para não quebrar a UI
      return { tasks: {}, audits: {}, currentDay: 1, points: 0 };
    }
  };

  const syncProgress = async (userId, newState) => {
    setMockState(newState);
    try {
      await supabase
        .from("user_progress")
        .upsert(
          {
            user_id: userId,
            completed_task_ids: newState.tasks,
            total_points: newState.points,
            audits: newState.audits,
            current_day: newState.currentDay,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        );
    } catch (err) {
      console.error("Failed to save to Supabase", err);
    }
  };

  return {
    session,
    loading,
    error,
    login,
    signUp,
    logout,
    fetchProgress,
    syncProgress
  };
}
