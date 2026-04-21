const rawData = [
  { day: 1, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável: 3 séries de flexões + 3 agachamentos." },
      { category: "CORRIDA (Rumo aos 80km)", label: "5 km fraco." },
      { category: "MINDSET", label: "A Quebra do Ritmo Hipnótico: Identifique seu maior 'ralo de tempo' (ex: rolar o feed). Ao entrar nesse transe, levante imediatamente e faça 10 flexões ou beba água. Quebre o padrão físico. (Origem: Napoleon Hill)", pointsOverride: 20 },
      { category: "PERSUASÃO", label: "O Espelho Inconsciente: Em sua próxima interação importante, adote sutilmente a mesma postura corporal, tom de voz e velocidade de fala do interlocutor por 90s. (Origem: Nicholas Boothman)", pointsOverride: 15 }
    ]
  },
  { day: 2, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino de Pescoço e Trapézio." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO: Alongamento e Mobilidade (0km)." },
      { category: "PERSUASÃO", label: "O Silêncio Tático: Ao fazer uma oferta, propor um preço ou pergunta difícil, feche a boca. Silêncio absoluto. Deixe a outra pessoa preencher o vazio. (Origem: As 48 Leis do Poder)", pointsOverride: 20 }
    ]
  },
  { day: 3, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável: 3 séries de flexões." },
      { category: "CORRIDA (Rumo aos 80km)", label: "10 tiros de 400m (4 km total)." },
      { category: "PERSUASÃO", label: "O Gatilho da Reciprocidade Invisível: Entregue um valor genuíno e não solicitado hoje a um prospecto/parceiro (artigo, dica, contato), sem pedir NADA em troca. (Origem: Robert Cialdini)", pointsOverride: 15 }
    ]
  },
  { day: 4, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino focado em Ombros (Deltoides)." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." },
      { category: "MINDSET", label: "A Regra dos 2 Minutos: Escolha a tarefa que mais procrastina hoje. Não a termine, execute-a por exatos 2 minutos para vencer a inércia. (Origem: James Clear)", pointsOverride: 10 }
    ]
  },
  { day: 5, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "7 km forte." },
      { category: "PERSUASÃO", label: "A Ilusão da Escassez: Ao agendar reunião, nunca diga 'estou livre'. Dê apenas 2 opções restritas de horário e mencione que a agenda quase fechou. (Origem: Robert Cialdini)", pointsOverride: 20 }
    ]
  },
  { day: 6, 
    tasks: [
      { category: "MINDSET", label: "O Empilhamento Tático: Ancore um novo micro-hábito a uma ação do piloto automático. (Ex: 'Após o café preto, leio 3 páginas de negócios imediatamente'). (Origem: James Clear)", pointsOverride: 15 },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 7, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "10 tiros de 400m (4 km total)." },
      { category: "PERSUASÃO", label: "O Foco no Alvo: Em conversa de 10 min, faça a outra pessoa falar 80% do tempo sobre suas paixões. Faça o outro se sentir o centro do mundo. (Origem: Robert Greene)", pointsOverride: 15 }
    ]
  },
  { day: 8, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino de Costas e Lombar (Postura)." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 9, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "5 km leve." },
      { category: "PERSUASÃO", label: "Gancho Situacional: 'Oficial dev nerd...'." }
    ]
  },
  { day: 10, 
    tasks: [
      { category: "MINDSET", label: "O Propósito Definido: Escreva no papel seu único objetivo principal para os próximos 6 meses. Leia em voz alta no espelho. Recuse-se a derivar. (Origem: Napoleon Hill)", pointsOverride: 20 },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 11, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "8 km (tentar correr mais forte)." },
      { category: "PERSUASÃO", label: "Teste de compliance (pedir favor pequeno)." }
    ]
  },
  { day: 12, 
    tasks: [
      { category: "MINDSET", label: "O Controle da Reatividade: Se algo der errado ou alguém provocar, PROIBIDO reagir logo. Aplique a Pausa de 5 Segs, respire, e responda com frieza. (Origem: As 48 Leis do Poder)", pointsOverride: 15 },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 13, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "6 km (alternando 1 km forte e 1 km fraco)." },
      { category: "PERSUASÃO", label: "Leitura fria e silêncio confortável." }
    ]
  },
  { day: 14, 
    tasks: [
      { category: "MINDSET", label: "Domínio Solitário (Café sem celular)." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 15, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "7 km fraco." },
      { category: "PERSUASÃO", label: "Gancho do Futuro (brinde formatura)." }
    ]
  },
  { day: 16, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "15 min HIIT em casa." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 17, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "5 km forte." },
      { category: "PERSUASÃO", label: "Treino de Objeções em prospecção." }
    ]
  },
  { day: 18, 
    tasks: [
      { category: "MINDSET", label: "Tirar fotos usando farda e ângulos de poder." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 19, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "10 km - leve." },
      { category: "PERSUASÃO", label: "Usar o Gancho do 'Nós'." }
    ]
  },
  { day: 20, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino Livre na Academia CFO." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 21, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "6 km (2 km fraco, 2 km forte, 2 km fraco)." },
      { category: "PERSUASÃO", label: "Criar oferta irresistível no papel." }
    ]
  },
  { day: 22, 
    tasks: [
      { category: "MINDSET", label: "Revisão de Metas Financeiras." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 23, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "5 km o mais forte que der sem quebrar." },
      { category: "PERSUASÃO", label: "Mapear 10 clínicas reais no LinkedIn/Insta." }
    ]
  },
  { day: 24, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Alongamento completo e Yoga militar." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 25, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "6 tiros de 500m (3 km)." },
      { category: "PERSUASÃO", label: "Aplicar Fechamento por Suposição." }
    ]
  },
  { day: 26, 
    tasks: [
      { category: "MINDSET", label: "Ancoragem tátil na sensação de vitória." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 27, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "5 km leve." },
      { category: "PERSUASÃO", label: "Enviar mensagem para contato base de teste beta." }
    ]
  },
  { day: 28, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino de Postura Máxima." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 29, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "10 km - normal." },
      { category: "PERSUASÃO", label: "Executar 1 Abordagem e 1 Pitch Completo." }
    ]
  },
  { day: 30, 
    tasks: [
      { category: "O ÁPICE SOLAR", label: "Verificar checklist geral. Preparação final para a formatura. Celebração da melhor versão.", pointsOverride: 100 }
    ]
  }
];

export const challengeDays = rawData.map((data) => {
  const categoriesMap = {
    "PHYSICAL TRAINING": { key: "physical", title: "TREINAMENTO FÍSICO", points: 10 },
    "CORRIDA (Rumo aos 80km)": { key: "running", title: "CORRIDA (RUMO AOS 80KM)", points: 20 },
    "MINDSET": { key: "mindset", title: "MENTALIDADE DE ELITE", points: 10 },
    "PERSUASÃO": { key: "sales", title: "VENDAS & PERSUASÃO", points: 10 },
    "O ÁPICE SOLAR": { key: "apice", title: "O ÁPICE SOLAR", points: 100 }
  };

  const formattedCategories = {};

  data.tasks.forEach((task, idx) => {
    const mapInfo = categoriesMap[task.category];
    if (!mapInfo) return; // Fallback missing category
    
    if (!formattedCategories[mapInfo.key]) {
      formattedCategories[mapInfo.key] = {
        title: mapInfo.title,
        pointsPerTask: task.pointsOverride || mapInfo.points,
        tasks: []
      };
    }

    formattedCategories[mapInfo.key].tasks.push({
      id: `${mapInfo.key}-${data.day}-${idx}`,
      label: task.label,
      link: task.link || null
    });
  });

  return {
    day: data.day,
    title: `Dia de Treino ${data.day}`,
    categories: formattedCategories
  };
});
