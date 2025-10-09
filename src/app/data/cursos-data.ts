import { Curso } from '../interfaces/interfaces';

export const cursosData: Curso[] = [
  // Seguridad Vial (mantengo igual)
  {
    id: 1,
    titulo: 'Normas de Tránsito',
    descripcion: 'Aprende las principales normas y su aplicación en la vía pública para conducir de manera segura y responsable.',
    duracion: '2h',
    lessons: [
      { id: 1, cursoId: 1, titulo: 'Señales de tránsito', contenido: `Las señales de tránsito son símbolos, figuras o letreros que indican normas, advertencias o prohibiciones en la vía pública. ...`, material: [{ tipo: 'texto', valor: 'Existen señales de advertencia, obligación y prohibición.' }, { tipo: 'imagen', valor: 'assets/senalizacion.png' }] },
      { id: 2, cursoId: 1, titulo: 'Prioridad de paso', contenido: `La prioridad de paso indica quién tiene el derecho de avanzar primero en intersecciones o cruces...`, material: [{ tipo: 'lista', valor: ['Ceda el paso a quienes ya estén en la intersección', 'Pare en señales de stop', 'Paso peatonal siempre respetado'] }] },
      { id: 3, cursoId: 1, titulo: 'Límites de velocidad', contenido: `Los límites de velocidad son fundamentales para la seguridad vial...`, material: [{ tipo: 'texto', valor: 'Conducir dentro de los límites de velocidad ayuda a controlar el vehículo y reaccionar ante imprevistos.' }] },
    ]
  },
  {
    id: 2,
    titulo: 'Manejo Defensivo',
    descripcion: 'Aprende técnicas para anticipar riesgos y conducir de manera preventiva.',
    duracion: '3h',
    lessons: [
      { id: 4, cursoId: 2, titulo: 'Distancia de seguridad', contenido: `Mantener una distancia adecuada entre tu vehículo y el de delante permite reaccionar ante frenadas bruscas...`, material: [{ tipo: 'texto', valor: 'La distancia adecuada previene colisiones y mejora el tiempo de reacción.' }] },
      { id: 5, cursoId: 2, titulo: 'Anticipación de riesgos', contenido: `Conducir defensivamente implica prever posibles peligros...`, material: [{ tipo: 'texto', valor: 'Observar y anticipar te da ventaja para reaccionar a imprevistos.' }] },
      { id: 6, cursoId: 2, titulo: 'Manejo en ciudad y carretera', contenido: `En ciudad: respeta semáforos, cruces y peatones. En carretera: usa carriles correctamente y realiza adelantamientos seguros...`, material: [{ tipo: 'texto', valor: 'Conducir según el entorno y condiciones mejora la seguridad.' }] }
    ]
  },
  {
    id: 3,
    titulo: 'Señalización Vial',
    descripcion: 'Aprende a reconocer todas las señales de tránsito y su correcta interpretación.',
    duracion: '1.5h',
    lessons: [
      { id: 7, cursoId: 3, titulo: 'Tipos de señales', contenido: `Señales de advertencia, obligación y prohibición. Aprende su forma, color y ubicación...`, material: [{ tipo: 'texto', valor: 'Cada señal tiene un significado específico.' }, { tipo: 'imagen', valor: 'assets/senal.png' }] },
      { id: 8, cursoId: 3, titulo: 'Señales horizontales', contenido: `Marcas en pavimento: carriles, pasos peatonales, líneas de detención...`, material: [{ tipo: 'texto', valor: 'Las señales horizontales guían la conducción visualmente.' }] },
      { id: 9, cursoId: 3, titulo: 'Semáforos y luces', contenido: `Rojo: detenerse; amarillo: precaución; verde: avanzar...`, material: [{ tipo: 'texto', valor: 'Semáforos y luces auxiliares son esenciales para la seguridad vial.' }] }
    ]
  },

  // Primeros Auxilios (contenido mejorado)
  {
    id: 4,
    titulo: 'RCP Básico',
    descripcion: 'Aprende reanimación cardiopulmonar correctamente.',
    duracion: '2h',
    lessons: [
      {
        id: 10,
        cursoId: 4,
        titulo: 'Fundamentos de RCP',
        contenido: `La reanimación cardiopulmonar (RCP) es un procedimiento vital para salvar vidas en caso de paro cardíaco. 
        Pasos esenciales:
        1. Verifica seguridad del entorno.
        2. Comprueba respuesta de la víctima.
        3. Llama a emergencias.
        4. Inicia compresiones torácicas fuertes y rápidas (100-120 por minuto).
        5. Alterna con ventilaciones de rescate si estás entrenado.
        Practicar regularmente mejora la efectividad y la rapidez de tu reacción.`,
        material: [
          { tipo: 'texto', valor: 'Sigue los pasos de compresiones y ventilaciones correctamente. Practica con muñecos de entrenamiento.' }
        ]
      }
    ]
  },
  {
    id: 5,
    titulo: 'Tratamiento de Heridas',
    descripcion: 'Aprende a tratar cortes, quemaduras y lesiones menores de forma segura.',
    duracion: '1.5h',
    lessons: [
      {
        id: 11,
        cursoId: 5,
        titulo: 'Cortes y quemaduras',
        contenido: `Cuando se presenta una herida:
        - Lava la zona con agua y jabón.
        - Detén cualquier sangrado aplicando presión.
        - Aplica antiséptico y cubre con vendaje limpio.
        - Observa signos de infección.
        Para quemaduras:
        - Enfría con agua corriente.
        - Nunca uses hielo directamente.
        - Cubre con gasa limpia y busca atención médica si es grave.
        La higiene y la rapidez son esenciales para prevenir complicaciones.`,
        material: [
          { tipo: 'texto', valor: 'Usa guantes y desinfecta correctamente. Mantén la calma y evalúa la gravedad.' }
        ]
      }
    ]
  },
  {
    id: 6,
    titulo: 'Emergencias Médicas',
    descripcion: 'Saber cómo actuar ante situaciones médicas de riesgo.',
    duracion: '2h',
    lessons: [
      {
        id: 12,
        cursoId: 6,
        titulo: 'Emergencias comunes',
        contenido: `En emergencias médicas frecuentes:
        - Desmayos: recuesta a la persona y afloja ropa apretada.
        - Ataques epilépticos: protege la cabeza y no restrinjas movimientos.
        - Intoxicaciones: identifica sustancia y llama a servicios de emergencia.
        Mantén siempre la seguridad propia y de la víctima, y busca ayuda profesional lo antes posible.`,
        material: [
          { tipo: 'texto', valor: 'Prioriza la seguridad y llama a emergencias. Mantén la calma y sigue los protocolos de primeros auxilios.' }
        ]
      }
    ]
  },

  // Situaciones de Emergencia (contenido mejorado)
  {
    id: 7,
    titulo: 'Conducción en condiciones adversas',
    descripcion: 'Aprende a manejar en lluvia, niebla y terrenos difíciles.',
    duracion: '2h',
    lessons: [
      {
        id: 13,
        cursoId: 7,
        titulo: 'Lluvia y pavimento mojado',
        contenido: `Conducir bajo lluvia o pavimento mojado aumenta el riesgo de derrapes. 
        Consejos prácticos:
        - Reduce la velocidad y aumenta la distancia de seguridad.
        - Evita maniobras bruscas como giros o frenadas fuertes.
        - Verifica neumáticos y frenos antes de conducir.
        - Usa luces bajas para mejorar visibilidad.
        Aplicar estas técnicas reduce accidentes y te da mayor control del vehículo.`,
        material: [
          { tipo: 'texto', valor: 'Técnicas para conducción segura en condiciones adversas.' }
        ]
      }
    ]
  },
  {
    id: 8,
    titulo: 'Actuación ante accidentes',
    descripcion: 'Cómo actuar ante un accidente de tránsito de forma segura y eficiente.',
    duracion: '2h',
    lessons: [
      {
        id: 14,
        cursoId: 8,
        titulo: 'Seguridad y primeros auxilios',
        contenido: `En caso de accidente:
        1. Asegura la zona con triángulos y luces de emergencia.
        2. Evalúa a los heridos y llama a servicios de emergencia.
        3. Realiza primeros auxilios básicos si es necesario.
        4. Recoge información del accidente y evita discusiones.
        Mantener la calma y seguir estos pasos puede salvar vidas y prevenir riesgos adicionales.`,
        material: [
          { tipo: 'texto', valor: 'Atender con calma y priorizar seguridad. Usa guantes y protección si es posible.' }
        ]
      }
    ]
  },
  {
    id: 9,
    titulo: 'Evacuación y desvíos',
    descripcion: 'Aprende cómo desviar tráfico y evacuar personas de forma segura.',
    duracion: '1.5h',
    lessons: [
      {
        id: 15,
        cursoId: 9,
        titulo: 'Desvíos y coordinación',
        contenido: `En situaciones de emergencia o accidente:
        - Señaliza correctamente rutas alternativas para vehículos y peatones.
        - Coordina con autoridades y otros conductores.
        - Mantén comunicación clara y constante.
        Estas medidas aseguran evacuaciones ordenadas y reducen riesgos de nuevos accidentes.`,
        material: [
          { tipo: 'texto', valor: 'Asegura el paso y comunica correctamente a otros conductores.' }
        ]
      }
    ]
  }
];
