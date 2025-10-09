import { KnowledgeTree } from '../interfaces/interfaces';
import { cursosData } from './cursos-data';

export const knowledgeTrees: KnowledgeTree[] = [
  {
    id: 1,
    name: 'Seguridad Vial',
    description: 'Aprende a prevenir accidentes y mejorar tu conducción.',
    skills: [
      { name: 'Señalización', level: 70 },
      { name: 'Manejo defensivo', level: 50 },
      { name: 'Reglamento', level: 80 }
    ],
    icon: 'assets/seguridad-vial.png',
    courses: [
      { id: 1, title: 'Normas de Tránsito', description: 'Aprende las principales normas.', progress: 0, icon: 'assets/normas.jpeg', curso: cursosData[0] },
      { id: 2, title: 'Manejo Defensivo', description: 'Técnicas para reducir accidentes.', progress: 0, icon: 'assets/defensivo.png', curso: cursosData[1] },
      { id: 3, title: 'Señalización Vial', description: 'Reconoce señales y aprende su significado.', progress: 0, icon: 'assets/senalizacionn.png', curso: cursosData[2] }
    ]
  },
  {
    id: 2,
    name: 'Primeros Auxilios',
    description: 'Conoce cómo actuar en emergencias y salvar vidas.',
    skills: [
      { name: 'RCP', level: 40 },
      { name: 'Heridas', level: 60 },
      { name: 'Emergencias médicas', level: 50 }
    ],
    icon: 'assets/primeros-auxilios.png',
    courses: [
      { id: 4, title: 'RCP Básico', description: 'Aprende a realizar RCP.', progress: 0, icon: 'assets/rcp.png', curso: cursosData[3] },
      { id: 5, title: 'Tratamiento de Heridas', description: 'Cómo tratar cortes y quemaduras.', progress: 0, icon: 'assets/heridas.png', curso: cursosData[4] },
      { id: 6, title: 'Emergencias Médicas', description: 'Identifica situaciones de riesgo.', progress: 0, icon: 'assets/emergencias.png', curso: cursosData[5] }
    ]
  },
  {
    id: 3,
    name: 'Situaciones de Emergencia',
    description: 'Aprende a reaccionar correctamente en emergencias.',
    skills: [
      { name: 'Conducción segura', level: 65 },
      { name: 'Primeros auxilios', level: 60 }
    ],
    icon: 'assets/emergencia.png',
    courses: [
      { id: 7, title: 'Conducción en condiciones adversas', description: 'Lluvia, niebla y más.', progress: 0, icon: 'assets/lluvia.png', curso: cursosData[6] },
      { id: 8, title: 'Actuación ante accidentes', description: 'Primeros auxilios y seguridad.', progress: 0, icon: 'assets/accidente.png', curso: cursosData[7] },
      { id: 9, title: 'Evacuación y desvíos', description: 'Rutas seguras y señalización.', progress: 0, icon: 'assets/desvio.png', curso: cursosData[8] }
    ]
  }
];
