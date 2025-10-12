import { KnowledgeTree } from '../interfaces/interfaces';
import { cursosData } from './cursos-data';

export const knowledgeTrees: KnowledgeTree[] = [
  {
    id: 1,
    name: 'Siniestros de tránsito',
    description: 'Aprende a identificar, prevenir y analizar accidentes de tránsito.',
    skills: [
      { name: 'Prevención', level: 70 },
      { name: 'Análisis de accidentes', level: 60 },
      { name: 'Seguridad vial', level: 80 }
    ],
    icon: 'assets/arbol1.jpeg',
    courses: [
      { id: 1, title: 'Causas de los accidentes', description: 'Identifica las principales causas de siniestros de tránsito.', progress: 0, icon: 'assets/curso1.jpg', curso: cursosData[0] },
      { id: 2, title: 'Manejo preventivo', description: 'Aprende técnicas para anticipar riesgos en la vía.', progress: 0, icon: 'assets/curso2.png', curso: cursosData[1] },
      { id: 3, title: 'Registro y análisis de siniestros', description: 'Aprende a documentar y analizar accidentes.', progress: 0, icon: 'assets/curso3.png', curso: cursosData[2] }
    ]
  },
  {
    id: 2,
    name: 'Los principios de la conducción',
    description: 'Comprende los fundamentos, normas y ética para conducir de manera segura.',
    skills: [
      { name: 'Control del vehículo', level: 80 },
      { name: 'Conducción defensiva', level: 70 },
      { name: 'Respeto vial', level: 65 }
    ],
    icon: 'assets/arbol2.jpeg',
    courses: [
      { id: 4, title: 'Fundamentos de la conducción', description: 'Domina conceptos básicos de conducción.', progress: 0, icon: 'assets/curso4.jpeg', curso: cursosData[3] },
      { id: 5, title: 'Principios defensivos', description: 'Aprende a anticipar y evitar riesgos.', progress: 0, icon: 'assets/curso5.jpeg', curso: cursosData[4] },
      { id: 6, title: 'Normas y ética vial', description: 'Conoce reglas y comportamiento correcto.', progress: 0, icon: 'assets/curso6.jpeg', curso: cursosData[5] }
    ]
  },
  {
    id: 3,
    name: 'Convivencia Vial',
    description: 'Aprende a convivir de manera segura con otros usuarios de la vía.',
    skills: [
      { name: 'Respeto entre conductores', level: 75 },
      { name: 'Señales y comunicación', level: 70 },
      { name: 'Resolución de conflictos', level: 65 }
    ],
    icon: 'assets/arbol3.jpeg',
    courses: [
      { id: 7, title: 'Respeto entre conductores', description: 'Mejora la seguridad mediante la cortesía vial.', progress: 0, icon: 'assets/curso7.jpeg', curso: cursosData[6] },
      { id: 8, title: 'Señales y comunicación', description: 'Uso correcto de luces, claxon y gestos.', progress: 0, icon: 'assets/curso8.jpg', curso: cursosData[7] },
      { id: 9, title: 'Resolución de conflictos', description: 'Maneja conflictos sin accidentes.', progress: 0, icon: 'assets/curso9.jpg', curso: cursosData[8] }
    ]
  },
  {
    id: 4,
    name: 'La persona en el tránsito',
    description: 'Entiende cómo la conducta y bienestar personal influyen en la seguridad vial.',
    skills: [
      { name: 'Concentración', level: 80 },
      { name: 'Gestión del estrés', level: 70 },
      { name: 'Autocuidado', level: 75 }
    ],
    icon: 'assets/arbol4.jpeg',
    courses: [
      { id: 10, title: 'Conductores responsables', description: 'Mejora la conducta del conductor.', progress: 0, icon: 'assets/curso10.jpeg', curso: cursosData[9] },
      { id: 11, title: 'Gestión del estrés', description: 'Controla emociones al conducir.', progress: 0, icon: 'assets/curso11.png', curso: cursosData[10] },
      { id: 12, title: 'Autocuidado', description: 'Conduce solo si estás en condiciones adecuadas.', progress: 0, icon: 'assets/curso12.jpeg', curso: cursosData[11] }
    ]
  },
  {
    id: 5,
    name: 'Las y los usuarios vulnerables',
    description: 'Aprende a proteger y respetar a peatones, ciclistas y motociclistas.',
    skills: [
      { name: 'Protección de peatones', level: 85 },
      { name: 'Respeto a ciclistas', level: 80 },
      { name: 'Seguridad motociclistas', level: 75 }
    ],
    icon: 'assets/arbol5.jpeg',
    courses: [
      { id: 13, title: 'Peatones', description: 'Derechos y seguridad de peatones.', progress: 0, icon: 'assets/curso13.jpeg', curso: cursosData[12] },
      { id: 14, title: 'Ciclistas', description: 'Normas y respeto hacia ciclistas.', progress: 0, icon: 'assets/curso14.jpeg', curso: cursosData[13] },
      { id: 15, title: 'Motociclistas', description: 'Convivencia segura con motociclistas.', progress: 0, icon: 'assets/curso15.jpeg', curso: cursosData[14] }
    ]
  },
  {
    id: 6,
    name: 'Normas de circulación',
    description: 'Domina todas las reglas de tránsito, señales y límites de velocidad.',
    skills: [
      { name: 'Señales', level: 80 },
      { name: 'Prioridad y semáforos', level: 75 },
      { name: 'Velocidad segura', level: 70 }
    ],
    icon: 'assets/arbol6.png',
    courses: [
      { id: 16, title: 'Señalización vial', description: 'Conoce señales y su interpretación.', progress: 0, icon: 'assets/curso16.jpeg', curso: cursosData[15] },
      { id: 17, title: 'Semáforos y prioridad', description: 'Comprende funcionamiento y reglas de prioridad.', progress: 0, icon: 'assets/curso17.jpeg', curso: cursosData[16] },
      { id: 18, title: 'Límites de velocidad', description: 'Conduce dentro de los límites legales.', progress: 0, icon: 'assets/curso18.jpeg', curso: cursosData[17] }
    ]
  },
  {
    id: 7,
    name: 'Conducción en circunstancias especiales',
    description: 'Aprende a manejar con seguridad en condiciones adversas y emergencias.',
    skills: [
      { name: 'Clima adverso', level: 75 },
      { name: 'Terrenos difíciles', level: 70 },
      { name: 'Emergencias', level: 65 }
    ],
    icon: 'assets/arbol7.jpeg',
    courses: [
      { id: 19, title: 'Condiciones climáticas', description: 'Conducción segura bajo lluvia, nieve o viento.', progress: 0, icon: 'assets/curso19.jpeg', curso: cursosData[18] },
      { id: 20, title: 'Terrenos difíciles', description: 'Aprende a manejar en caminos complicados.', progress: 0, icon: 'assets/curso20.jpeg', curso: cursosData[19] },
      { id: 21, title: 'Emergencias en ruta', description: 'Actúa correctamente ante averías o accidentes.', progress: 0, icon: 'assets/curso21.jpeg', curso: cursosData[20] }
    ]
  },
  {
    id: 8,
    name: 'Conducción eficiente',
    description: 'Aprende técnicas para conducir de forma económica y ecológica.',
    skills: [
      { name: 'Ahorro de combustible', level: 80 },
      { name: 'Mantenimiento preventivo', level: 75 },
      { name: 'Conducción suave', level: 70 }
    ],
    icon: 'assets/arbol8.jpeg',
    courses: [
      { id: 22, title: 'Uso racional de combustible', description: 'Reduce consumo de combustible.', progress: 0, icon: 'assets/curso22.jpeg', curso: cursosData[21] },
      { id: 23, title: 'Mantenimiento preventivo', description: 'Evita problemas y gastos innecesarios.', progress: 0, icon: 'assets/curso23.jpeg', curso: cursosData[22] },
      { id: 24, title: 'Técnicas de conducción eficiente', description: 'Aprende a conducir suave y constante.', progress: 0, icon: 'assets/curso24.jpg', curso: cursosData[23] }
    ]
  },
  {
    id: 9,
    name: 'Informaciones importantes',
    description: 'Conoce documentos, seguros y herramientas para un tránsito seguro.',
    skills: [
      { name: 'Documentación', level: 85 },
      { name: 'Seguros', level: 80 },
      { name: 'Aplicaciones útiles', level: 70 }
    ],
    icon: 'assets/arbol9.png',
    courses: [
      { id: 25, title: 'Documentos y licencias', description: 'Qué portar y cómo mantenerlos vigentes.', progress: 0, icon: 'assets/curso25.jpeg', curso: cursosData[24] },
      { id: 26, title: 'Seguros y obligaciones', description: 'Conoce seguros obligatorios y responsabilidades legales.', progress: 0, icon: 'assets/curso26.png', curso: cursosData[25] },
      { id: 27, title: 'Información vial y aplicaciones', description: 'Usa apps y mapas para una conducción segura.', progress: 0, icon: 'assets/curso27.jpg', curso: cursosData[26] }
    ]
  }
];
