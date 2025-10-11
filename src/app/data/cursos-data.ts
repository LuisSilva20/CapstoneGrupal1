import { Curso } from '../interfaces/interfaces';

export const cursosData: Curso[] = [
  // Árbol 1: Siniestros de tránsito
  {
    id: 1,
    titulo: 'Causas de los accidentes',
    descripcion: 'Identifica las principales causas de siniestros de tránsito y cómo prevenirlos.',
    duracion: '2h',
    lessons: [
      { id: 1, cursoId: 1, titulo: 'Errores comunes al conducir', contenido: 'Distracciones, exceso de velocidad y alcohol son causas frecuentes...', material: [{ tipo: 'texto', valor: 'Evita distracciones y respeta las normas.' }, { tipo: 'imagen', valor: 'assets/ejemplo1.png' }] },
      { id: 2, cursoId: 1, titulo: 'Accidentes más frecuentes', contenido: 'Colisiones frontales, vuelcos y atropellos son los más reportados.', material: [{ tipo: 'texto', valor: 'Conocer los tipos de accidentes ayuda a prevenirlos.' }] },
    ]
  },
  {
    id: 2,
    titulo: 'Manejo preventivo',
    descripcion: 'Aprende técnicas para anticipar riesgos en la vía.',
    duracion: '2h',
    lessons: [
      { id: 3, cursoId: 2, titulo: 'Distancia y velocidad segura', contenido: 'Mantén siempre distancia y respeta límites de velocidad.', material: [{ tipo: 'texto', valor: 'Controla tu velocidad según condiciones.' }] },
      { id: 4, cursoId: 2, titulo: 'Observación y reacción', contenido: 'Detecta riesgos y actúa antes de que sea tarde.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo2.png' }] },
    ]
  },
  {
    id: 3,
    titulo: 'Registro y análisis de siniestros',
    descripcion: 'Aprende a documentar y analizar accidentes para mejorar la seguridad vial.',
    duracion: '1.5h',
    lessons: [
      { id: 5, cursoId: 3, titulo: 'Documentación correcta', contenido: 'Registrar detalles como lugar, hora y causas es fundamental.', material: [{ tipo: 'texto', valor: 'Fotos, notas y testimonios ayudan a prevenir futuros accidentes.' }] },
    ]
  },

  // Árbol 2: Los principios de la conducción
  {
    id: 4,
    titulo: 'Fundamentos de la conducción',
    descripcion: 'Comprende los conceptos básicos para conducir de manera segura.',
    duracion: '2h',
    lessons: [
      { id: 6, cursoId: 4, titulo: 'Control del vehículo', contenido: 'Domina dirección, frenos y aceleración.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo3.png' }] },
      { id: 7, cursoId: 4, titulo: 'Postura y ergonomía', contenido: 'Mantén posición correcta para reaccionar rápidamente.', material: [{ tipo: 'texto', valor: 'Ajusta asiento y espejos antes de conducir.' }] },
    ]
  },
  {
    id: 5,
    titulo: 'Principios defensivos',
    descripcion: 'Aprende a anticipar y evitar riesgos en la conducción diaria.',
    duracion: '2h',
    lessons: [
      { id: 8, cursoId: 5, titulo: 'Evitar colisiones', contenido: 'Anticipa movimientos de otros conductores y peatones.', material: [{ tipo: 'texto', valor: 'Mantén alerta constante en la vía.' }] },
    ]
  },
  {
    id: 6,
    titulo: 'Normas y ética vial',
    descripcion: 'Conoce reglas y comportamiento correcto en la conducción.',
    duracion: '1.5h',
    lessons: [
      { id: 9, cursoId: 6, titulo: 'Respeto y cortesía', contenido: 'Respetar semáforos, carriles y demás conductores es esencial.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo4.png' }] },
    ]
  },

  // Árbol 3: Convivencia Vial
  {
    id: 7,
    titulo: 'Respeto entre conductores',
    descripcion: 'Aprende cómo la convivencia mejora la seguridad vial.',
    duracion: '2h',
    lessons: [
      { id: 10, cursoId: 7, titulo: 'Normas de cortesía', contenido: 'Ceder el paso y evitar discusiones previene accidentes.', material: [{ tipo: 'texto', valor: 'Convivir correctamente reduce riesgos en la vía.' }] },
    ]
  },
  {
    id: 8,
    titulo: 'Señales y comunicación',
    descripcion: 'Uso correcto de luces, claxon y gestos para una comunicación segura.',
    duracion: '1.5h',
    lessons: [
      { id: 11, cursoId: 8, titulo: 'Indicadores y luces', contenido: 'Usa direccionales y luces de freno correctamente.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo5.png' }] },
    ]
  },
  {
    id: 9,
    titulo: 'Resolución de conflictos',
    descripcion: 'Aprende técnicas para manejar conflictos en la vía sin accidentes.',
    duracion: '2h',
    lessons: [
      { id: 12, cursoId: 9, titulo: 'Manejo de situaciones tensas', contenido: 'Mantén calma y evita confrontaciones con otros conductores.', material: [{ tipo: 'texto', valor: 'Respirar profundo y ceder el paso puede prevenir accidentes.' }] },
    ]
  },

  // Árbol 4: La persona en el tránsito
  {
    id: 10,
    titulo: 'Conductores responsables',
    descripcion: 'Reconoce la importancia de la conducta del conductor en la seguridad.',
    duracion: '2h',
    lessons: [
      { id: 13, cursoId: 10, titulo: 'Atención y concentración', contenido: 'Evita el uso del celular y distracciones.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo6.png' }] },
    ]
  },
  {
    id: 11,
    titulo: 'Gestión del estrés',
    descripcion: 'Aprende a manejar emociones para conducir seguro.',
    duracion: '1.5h',
    lessons: [
      { id: 14, cursoId: 11, titulo: 'Control de impulsos', contenido: 'No ceder a la ira o prisa al conducir.', material: [{ tipo: 'texto', valor: 'Practicar técnicas de respiración y paciencia.' }] },
    ]
  },
  {
    id: 12,
    titulo: 'Autocuidado',
    descripcion: 'Conduce solo si estás descansado y en condiciones físicas adecuadas.',
    duracion: '1.5h',
    lessons: [
      { id: 15, cursoId: 12, titulo: 'Salud y conducción', contenido: 'Evita conducir cansado o bajo efectos de medicamentos.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo7.png' }] },
    ]
  },

  // Árbol 5: Las y los usuarios vulnerables
  {
    id: 13,
    titulo: 'Peatones',
    descripcion: 'Seguridad y derechos de los peatones en la vía.',
    duracion: '2h',
    lessons: [
      { id: 16, cursoId: 13, titulo: 'Cruces peatonales', contenido: 'Respeta siempre el paso peatonal.', material: [{ tipo: 'texto', valor: 'Dar prioridad a peatones evita accidentes graves.' }] },
    ]
  },
  {
    id: 14,
    titulo: 'Ciclistas',
    descripcion: 'Normas y respeto hacia quienes usan bicicleta.',
    duracion: '1.5h',
    lessons: [
      { id: 17, cursoId: 14, titulo: 'Carriles y señalización', contenido: 'Usa carriles correctamente y mantén distancia de seguridad.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo8.png' }] },
    ]
  },
  {
    id: 15,
    titulo: 'Motociclistas',
    descripcion: 'Seguridad y normas para la convivencia con motos.',
    duracion: '2h',
    lessons: [
      { id: 18, cursoId: 15, titulo: 'Distancia y visibilidad', contenido: 'Respeta espacio y evita puntos ciegos.', material: [{ tipo: 'texto', valor: 'Mantén siempre buena visibilidad de motociclistas.' }] },
    ]
  },

  // Árbol 6: Normas de circulación
  {
    id: 16,
    titulo: 'Señalización vial',
    descripcion: 'Conoce todas las señales y su interpretación correcta.',
    duracion: '2h',
    lessons: [
      { id: 19, cursoId: 16, titulo: 'Señales verticales', contenido: 'Aprende el significado de señales de advertencia, obligación y prohibición.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo9.png' }] },
    ]
  },
  {
    id: 17,
    titulo: 'Semáforos y prioridad',
    descripcion: 'Comprende el funcionamiento de semáforos y reglas de prioridad.',
    duracion: '1.5h',
    lessons: [
      { id: 20, cursoId: 17, titulo: 'Luces y regulación', contenido: 'Respeta colores y normas de paso.', material: [{ tipo: 'texto', valor: 'Obedece semáforos y señales luminosas.' }] },
    ]
  },
  {
    id: 18,
    titulo: 'Límites de velocidad',
    descripcion: 'Aprende a conducir dentro de los límites legales.',
    duracion: '1.5h',
    lessons: [
      { id: 21, cursoId: 18, titulo: 'Velocidad segura', contenido: 'Adapta velocidad según entorno y condiciones del tránsito.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo10.png' }] },
    ]
  },

  // Árbol 7: Conducción en circunstancias especiales
  {
    id: 19,
    titulo: 'Condiciones climáticas',
    descripcion: 'Aprende a conducir en lluvia, nieve, niebla y viento fuerte.',
    duracion: '2h',
    lessons: [
      { id: 22, cursoId: 19, titulo: 'Lluvia y nieve', contenido: 'Reduce velocidad y aumenta distancia de seguridad.', material: [{ tipo: 'texto', valor: 'Usa luces adecuadas y evita maniobras bruscas.' }] },
    ]
  },
  {
    id: 20,
    titulo: 'Terrenos difíciles',
    descripcion: 'Conduce de manera segura en caminos de tierra o pendientes.',
    duracion: '2h',
    lessons: [
      { id: 23, cursoId: 20, titulo: 'Pendientes y curvas', contenido: 'Maneja con cuidado en curvas pronunciadas y subidas/bajadas.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo11.png' }] },
    ]
  },
  {
    id: 21,
    titulo: 'Emergencias en ruta',
    descripcion: 'Cómo actuar ante problemas mecánicos o accidentes.',
    duracion: '1.5h',
    lessons: [
      { id: 24, cursoId: 21, titulo: 'Averías y accidentes', contenido: 'Mantén seguridad propia y de otros al detener vehículo.', material: [{ tipo: 'texto', valor: 'Señaliza correctamente y llama ayuda si es necesario.' }] },
    ]
  },

  // Árbol 8: Conducción eficiente
  {
    id: 22,
    titulo: 'Uso racional de combustible',
    descripcion: 'Aprende a conducir de manera eficiente y económica.',
    duracion: '1.5h',
    lessons: [
      { id: 25, cursoId: 22, titulo: 'Aceleración y freno', contenido: 'Evita aceleraciones y frenadas bruscas para ahorrar combustible.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo12.png' }] },
    ]
  },
  {
    id: 23,
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Revisa tu vehículo regularmente para evitar problemas y gasto innecesario.',
    duracion: '1.5h',
    lessons: [
      { id: 26, cursoId: 23, titulo: 'Revisiones periódicas', contenido: 'Chequear aceite, frenos y neumáticos regularmente.', material: [{ tipo: 'texto', valor: 'Previene averías y prolonga la vida útil del vehículo.' }] },
    ]
  },
  {
    id: 24,
    titulo: 'Técnicas de conducción eficiente',
    descripcion: 'Aprende técnicas para reducir consumo de combustible y desgaste.',
    duracion: '2h',
    lessons: [
      { id: 27, cursoId: 24, titulo: 'Conducción suave', contenido: 'Mantén velocidad constante y evita aceleraciones innecesarias.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo13.png' }] },
    ]
  },

  // Árbol 9: Informaciones importantes
  {
    id: 25,
    titulo: 'Documentos y licencias',
    descripcion: 'Aprende qué documentos portar y cómo mantenerlos vigentes.',
    duracion: '1.5h',
    lessons: [
      { id: 28, cursoId: 25, titulo: 'Licencia y registro', contenido: 'Siempre portar licencia y documentos del vehículo.', material: [{ tipo: 'texto', valor: 'Documentos actualizados evitan sanciones y problemas legales.' }] },
    ]
  },
  {
    id: 26,
    titulo: 'Seguros y obligaciones',
    descripcion: 'Conoce los seguros obligatorios y tus responsabilidades legales.',
    duracion: '2h',
    lessons: [
      { id: 29, cursoId: 26, titulo: 'Tipos de seguros', contenido: 'Seguro obligatorio, contra terceros y otros.', material: [{ tipo: 'imagen', valor: 'assets/ejemplo14.png' }] },
    ]
  },
  {
    id: 27,
    titulo: 'Información vial y aplicaciones',
    descripcion: 'Aprende a usar información de tránsito y apps de navegación.',
    duracion: '1.5h',
    lessons: [
      { id: 30, cursoId: 27, titulo: 'Apps y mapas', contenido: 'Usa aplicaciones confiables para planificar rutas y evitar accidentes.', material: [{ tipo: 'texto', valor: 'Google Maps, Waze u otras apps oficiales pueden ser útiles.' }] },
    ]
  }
];
