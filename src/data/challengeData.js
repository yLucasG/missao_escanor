const rawData = [
  { day: 1, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável: 3 séries de flexões + 3 agachamentos." },
      { category: "CORRIDA (Rumo aos 80km)", label: "5 km fraco." },
      { category: "MINDSET", label: "Âncora de Poder: Ouvir The Batman - Michael Giacchino.", link: "https://www.youtube.com/watch?v=07M6n8_NfT0" },
      { category: "PERSUASÃO", label: "Definir o Problema Único do seu sistema." }
    ]
  },
  { day: 2, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino de Pescoço e Trapézio." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO: Alongamento e Mobilidade (0km)." },
      { category: "PERSUASÃO", label: "Usar o Gancho: 'Você tem energia de quem tá no controle...'." }
    ]
  },
  { day: 3, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável: 3 séries de flexões." },
      { category: "CORRIDA (Rumo aos 80km)", label: "10 tiros de 400m (4 km total)." },
      { category: "PERSUASÃO", label: "Pitch de Elevador do seu sistema de organização." }
    ]
  },
  { day: 4, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Treino focado em Ombros (Deltoides)." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." },
      { category: "MINDSET", label: "Sustentar contato visual o dia todo." }
    ]
  },
  { day: 5, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "7 km forte." },
      { category: "PERSUASÃO", label: "Gancho de Curiosidade sobre ambição." }
    ]
  },
  { day: 6, 
    tasks: [
      { category: "MINDSET", label: "Escuta Ativa: repetir as 3 últimas palavras." },
      { category: "CORRIDA (Rumo aos 80km)", label: "DESCANSO ATIVO (0km)." }
    ]
  },
  { day: 7, 
    tasks: [
      { category: "PHYSICAL TRAINING", label: "Rotina Inegociável." },
      { category: "CORRIDA (Rumo aos 80km)", label: "10 tiros de 400m (4 km total)." },
      { category: "PERSUASÃO", label: "Técnica Push-Pull com elogio/provocação." }
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
      { category: "MINDSET", label: "Espelhamento Reverso de ritmo." },
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
      { category: "MINDSET", label: "Visualização do Império (Ouvir Till I Collapse)." },
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
    "MINDSET": { key: "mindset", title: "MENTALIDADE & PNL", points: 10 },
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
