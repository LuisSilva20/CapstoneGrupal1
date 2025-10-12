import { Curso } from '../interfaces/interfaces';

export const cursosData: Curso[] = [
  // Árbol 1: Siniestros de tránsito
  {
    id: 1,
    titulo: 'Causas de los accidentes',
    descripcion: 'Identifica las principales causas de siniestros de tránsito y cómo prevenirlos.',
    duracion: '2h',
    lessons: [
      { id: 1, cursoId: 1, titulo: 'Errores comunes al conducir', contenido: 'Conducir es una responsabilidad que requiere atención constante y conciencia de los riesgos. Entre las principales causas de accidentes se encuentran las distracciones, como el uso del celular, comer o conversar mientras se conduce, lo que disminuye la capacidad de reacción ante imprevistos. La velocidad excesiva aumenta la gravedad de los siniestros y reduce el tiempo de respuesta ante situaciones de emergencia. Otro factor crítico es el consumo de alcohol o drogas, que afecta la percepción, coordinación y juicio del conductor. Además, la falta de conocimiento de las normas de tránsito, conducir cansado o sin descanso adecuado y la negligencia al manejar en condiciones climáticas adversas incrementan la probabilidad de accidentes. Conocer estos factores permite a los conductores tomar decisiones más seguras, planificar rutas de manera consciente, respetar los límites de velocidad y mantener la atención total al volante. La prevención comienza con la educación vial y la práctica de hábitos responsables que reduzcan riesgos y protejan la vida de todos los usuarios de la vía.', material: [{ tipo: 'texto', valor: 'Evita distracciones y respeta las normas.' }, { tipo: 'imagen', valor: 'assets/distraido.jpeg' }] },
      { id: 2, cursoId: 1, titulo: 'Accidentes más frecuentes', contenido: 'Los accidentes más reportados incluyen colisiones frontales, vuelcos y atropellos. Comprender los escenarios comunes permite adoptar estrategias preventivas, como mantener la distancia de seguridad, respetar señales de tránsito y anticipar movimientos de otros vehículos. El estudio de estadísticas locales y análisis de incidentes previos ayuda a identificar patrones de riesgo en distintas vías y horarios. La educación sobre estos accidentes fomenta la responsabilidad, reduce la frecuencia de incidentes y promueve la cultura de seguridad vial.', material: [{ tipo: 'texto', valor: 'Conocer los tipos de accidentes ayuda a prevenirlos.' }] },
    ]
  },
  {
    id: 2,
    titulo: 'Manejo preventivo',
    descripcion: 'Aprende técnicas para anticipar riesgos en la vía.',
    duracion: '2h',
    lessons: [
      { id: 3, cursoId: 2, titulo: 'Distancia y velocidad segura', contenido: 'Mantener una distancia adecuada con el vehículo que nos precede es esencial para prevenir colisiones. Ajustar la velocidad según las condiciones del tráfico, clima y visibilidad permite reaccionar ante imprevistos y evitar accidentes graves. La conducción preventiva no solo protege al conductor, sino también a pasajeros, peatones y otros usuarios de la vía. Aprender a calcular la distancia de frenado y mantener velocidad segura en curvas y pendientes es clave para reducir riesgos y promover un tránsito más seguro.', material: [{ tipo: 'texto', valor: 'Controla tu velocidad según condiciones.' }] },
      { id: 4, cursoId: 2, titulo: 'Observación y reacción', contenido: 'La observación constante del entorno es fundamental para anticipar situaciones de riesgo. Identificar señales de tránsito, movimientos de otros vehículos y peatones permite tomar decisiones oportunas. La capacidad de reacción se entrena practicando la atención, evitando distracciones y reconociendo patrones de comportamiento en el tráfico. Una conducción preventiva reduce la probabilidad de incidentes y genera hábitos de responsabilidad que protegen la vida de todos en la vía.', material: [{ tipo: 'imagen', valor: 'assets/espejo.jpeg' }] },
    ]
  },
  {
    id: 3,
    titulo: 'Registro y análisis de siniestros',
    descripcion: 'Aprende a documentar y analizar accidentes para mejorar la seguridad vial.',
    duracion: '1.5h',
    lessons: [
      { id: 5, cursoId: 3, titulo: 'Documentación correcta', contenido: 'Registrar los detalles de un accidente, como la ubicación, hora, condiciones climáticas, vehículos involucrados y causas aparentes, es fundamental para el análisis posterior y la prevención futura. La documentación incluye fotografías, notas detalladas, testimonios de testigos y reportes oficiales. Este registro permite identificar patrones, mejorar la seguridad vial y diseñar estrategias preventivas. Además, facilita la gestión legal y el seguro del incidente. Comprender la importancia de registrar cada detalle con precisión contribuye a generar un entorno de tránsito más seguro y responsable.', material: [{ tipo: 'texto', valor: 'Fotos, notas y testimonios ayudan a prevenir futuros accidentes.' }] },
    ]
  },

  // Árbol 2: Los principios de la conducción
  {
    id: 4,
    titulo: 'Fundamentos de la conducción',
    descripcion: 'Comprende los conceptos básicos para conducir de manera segura.',
    duracion: '2h',
    lessons: [
      { id: 6, cursoId: 4, titulo: 'Control del vehículo', contenido: 'Dominar el control del vehículo implica conocer a fondo el funcionamiento de la dirección, frenos, acelerador y embrague, si corresponde. Aprender técnicas de manejo suave y anticipación de movimientos evita accidentes y mejora la eficiencia del vehículo. Mantener la atención, coordinar los movimientos de manos y pies y entender las dinámicas de frenado y aceleración en diferentes condiciones garantiza una conducción más segura. La práctica constante refuerza la memoria muscular y permite reaccionar adecuadamente ante situaciones inesperadas en el tránsito.', material: [{ tipo: 'imagen', valor: 'assets/manos.jpeg' }] },
      { id: 7, cursoId: 4, titulo: 'Postura y ergonomía', contenido: 'Adoptar una postura correcta al volante es clave para la seguridad y comodidad durante la conducción. Ajustar asiento, espejos y volante de forma ergonómica permite mayor control, visibilidad y tiempo de reacción. Una postura adecuada reduce la fatiga, previene lesiones musculares y mejora la concentración. Aprender técnicas de ergonomía, como la posición de manos, pies y respaldo, junto con ejercicios de relajación, contribuye a una conducción más segura y confortable durante trayectos cortos y largos.', material: [{ tipo: 'texto', valor: 'Ajusta asiento y espejos antes de conducir.' }] },
    ]
  },
  {
    id: 5,
    titulo: 'Principios defensivos',
    descripcion: 'Aprende a anticipar y evitar riesgos en la conducción diaria.',
    duracion: '2h',
    lessons: [
      { id: 8, cursoId: 5, titulo: 'Evitar colisiones', contenido: 'La conducción defensiva se centra en anticipar el comportamiento de otros conductores, peatones y ciclistas, buscando reducir la probabilidad de accidentes. Implica mantener distancia de seguridad, respetar límites de velocidad, observar constantemente el entorno y prever posibles riesgos. Aprender a ceder el paso, identificar zonas de riesgo y reaccionar ante imprevistos forma parte de esta técnica. Adoptar principios defensivos protege al conductor y a terceros, y fomenta la responsabilidad y seguridad en todas las vías.', material: [{ tipo: 'texto', valor: 'Mantén alerta constante en la vía.' }] },
    ]
  },
  {
    id: 6,
    titulo: 'Normas y ética vial',
    descripcion: 'Conoce reglas y comportamiento correcto en la conducción.',
    duracion: '1.5h',
    lessons: [
      { id: 9, cursoId: 6, titulo: 'Respeto y cortesía', contenido: 'El respeto a las normas de tránsito y la cortesía hacia otros usuarios son esenciales para la seguridad vial. Cumplir reglas, respetar semáforos, señalización, carriles y peatones previene accidentes. La ética vial también implica responsabilidad social: no invadir el carril contrario, usar luces adecuadamente y mantener comunicación con otros conductores mediante señales. Fomentar hábitos de cortesía y respeto mejora la convivencia, reduce conflictos y contribuye a un tránsito más seguro y fluido.', material: [{ tipo: 'imagen', valor: 'assets/curso7.jpeg' }] },
    ]
  },

  // Árbol 3: Convivencia Vial
  {
    id: 7,
    titulo: 'Respeto entre conductores',
    descripcion: 'Aprende cómo la convivencia mejora la seguridad vial.',
    duracion: '2h',
    lessons: [
      { id: 10, cursoId: 7, titulo: 'Normas de cortesía', contenido: 'La convivencia en la vía depende del respeto mutuo entre conductores. Conocer y aplicar normas de cortesía, como ceder el paso, mantener distancia, evitar discusiones y respetar señales de tránsito, disminuye riesgos de accidentes y conflictos. La cooperación y paciencia son esenciales en situaciones de tráfico intenso o emergencias. Fomentar una cultura de respeto contribuye a un entorno más seguro, cómodo y predecible para todos los usuarios de la vía, incluyendo peatones y ciclistas.', material: [{ tipo: 'texto', valor: 'Convivir correctamente reduce riesgos en la vía.' }] },
    ]
  },
  {
    id: 8,
    titulo: 'Señales y comunicación',
    descripcion: 'Uso correcto de luces, claxon y gestos para una comunicación segura.',
    duracion: '1.5h',
    lessons: [
      { id: 11, cursoId: 8, titulo: 'Indicadores y luces', contenido: 'El uso correcto de luces direccionales, freno, cruce y otras señales permite anticipar movimientos y reducir accidentes. El claxon debe emplearse solo en situaciones de alerta, evitando generar estrés o confusión. La comunicación visual mediante gestos o luces facilita la interacción entre conductores, peatones y ciclistas. Conocer y aplicar estas técnicas mejora la coordinación, previene conflictos y contribuye a un tránsito seguro y armonioso.', material: [{ tipo: 'imagen', valor: 'assets/direccional.jpeg' }] },
    ]
  },
  {
    id: 9,
    titulo: 'Resolución de conflictos',
    descripcion: 'Aprende técnicas para manejar conflictos en la vía sin accidentes.',
    duracion: '2h',
    lessons: [
      { id: 12, cursoId: 9, titulo: 'Manejo de situaciones tensas', contenido: 'Durante la conducción pueden surgir conflictos con otros usuarios por cortesía, infracciones o desacuerdos. Aprender a mantener la calma, ceder el paso y evitar confrontaciones directas previene accidentes y promueve la seguridad. Técnicas de respiración, comunicación asertiva y anticipación de riesgos permiten resolver situaciones tensas sin poner en peligro a nadie. La práctica de resolución pacífica de conflictos es clave para la seguridad vial y la convivencia armoniosa en las calles.', material: [{ tipo: 'texto', valor: 'Respirar profundo y ceder el paso puede prevenir accidentes.' }] },
    ]
  },

  // Árbol 4: La persona en el tránsito
  {
    id: 10,
    titulo: 'Conductores responsables',
    descripcion: 'Reconoce la importancia de la conducta del conductor en la seguridad.',
    duracion: '2h',
    lessons: [
      { 
        id: 13, 
        cursoId: 10, 
        titulo: 'Atención y concentración', 
        contenido: 'Un conductor responsable mantiene la atención total en la vía. Evitar distracciones, descansar adecuadamente y planificar trayectos son hábitos fundamentales. La concentración permite anticipar movimientos, respetar normas y reaccionar ante emergencias. La educación y entrenamiento constante refuerzan la capacidad de mantener el enfoque y reducir riesgos, asegurando la seguridad propia y de terceros.' 
        , material: [{ tipo: 'imagen', valor: 'assets/borroso.jpeg' }] 
      },
    ]
  },
  {
    id: 11,
    titulo: 'Gestión del estrés',
    descripcion: 'Aprende a manejar emociones para conducir seguro.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 14, 
        cursoId: 11, 
        titulo: 'Control de impulsos', 
        contenido: 'Conducir bajo estrés, prisa o ira incrementa riesgos. Aprender técnicas de respiración, paciencia y control emocional permite reaccionar racionalmente ante imprevistos. La gestión del estrés fomenta la seguridad, mejora la toma de decisiones y reduce conflictos con otros usuarios de la vía. Mantener un estado mental equilibrado es parte esencial de la conducción responsable.' 
        , material: [{ tipo: 'texto', valor: 'Practicar técnicas de respiración y paciencia.' }] 
      },
    ]
  },
  {
    id: 12,
    titulo: 'Autocuidado',
    descripcion: 'Conduce solo si estás descansado y en condiciones físicas adecuadas.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 15, 
        cursoId: 12, 
        titulo: 'Salud y conducción', 
        contenido: 'Evitar conducir cansado, enfermo o bajo efectos de medicamentos es fundamental para la seguridad vial. Mantener hábitos de descanso, hidratación y alimentación adecuada mejora la concentración y los reflejos. Conocer las propias limitaciones y no subestimarlas previene accidentes y protege tanto al conductor como a terceros. La práctica del autocuidado refuerza la responsabilidad y la seguridad en la conducción diaria.' 
        , material: [{ tipo: 'imagen', valor: 'assets/estiramiento.jpeg' }] 
      },
    ]
  },

  // Árbol 5: Las y los usuarios vulnerables
  {
    id: 13,
    titulo: 'Peatones',
    descripcion: 'Seguridad y derechos de los peatones en la vía.',
    duracion: '2h',
    lessons: [
      { 
        id: 16, 
        cursoId: 13, 
        titulo: 'Cruces peatonales', 
        contenido: 'Los peatones son usuarios vulnerables y requieren atención especial. Respetar los pasos peatonales, semáforos y señalización es fundamental para prevenir accidentes. Los conductores deben anticipar movimientos, reducir velocidad y ceder el paso cuando corresponda. Además, los peatones deben ser conscientes de las normas y mantenerse visibles, especialmente de noche o con poca visibilidad. La educación y conciencia de ambas partes fomenta un tránsito seguro y reduce riesgos.' 
        , material: [{ tipo: 'texto', valor: 'Dar prioridad a peatones evita accidentes graves.' }] 
      },
    ]
  },
  {
    id: 14,
    titulo: 'Ciclistas',
    descripcion: 'Normas y respeto hacia quienes usan bicicleta.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 17, 
        cursoId: 14, 
        titulo: 'Carriles y señalización', 
        contenido: 'Los ciclistas comparten la vía y su seguridad depende del respeto mutuo. Utilizar carriles exclusivos, mantener distancia de seguridad y señalizar maniobras son medidas esenciales. Los conductores deben anticipar movimientos y prestar atención a ciclistas en intersecciones y curvas. Fomentar una convivencia responsable entre autos y bicicletas mejora la seguridad, reduce accidentes y promueve hábitos de tránsito respetuosos y sostenibles.' 
        , material: [{ tipo: 'imagen', valor: 'assets/ciclista.jpeg' }] 
      },
    ]
  },
  {
    id: 15,
    titulo: 'Motociclistas',
    descripcion: 'Seguridad y normas para la convivencia con motos.',
    duracion: '2h',
    lessons: [
      { 
        id: 18, 
        cursoId: 15, 
        titulo: 'Distancia y visibilidad', 
        contenido: 'Los motociclistas son vulnerables en el tráfico debido a su tamaño y maniobrabilidad. Mantener distancia adecuada, respetar los puntos ciegos y anticipar movimientos reduce accidentes. El uso correcto de casco y ropa reflectante aumenta la seguridad. Los conductores de vehículos motorizados deben prestar atención y aplicar técnicas de conducción defensiva. Comprender estas medidas y hábitos asegura un entorno vial más seguro para todos.' 
        , material: [{ tipo: 'texto', valor: 'Mantén siempre buena visibilidad de motociclistas.' }] 
      },
    ]
  },

  // Árbol 6: Normas de circulación
  {
    id: 16,
    titulo: 'Señalización vial',
    descripcion: 'Conoce todas las señales y su interpretación correcta.',
    duracion: '2h',
    lessons: [
      { 
        id: 19, 
        cursoId: 16, 
        titulo: 'Señales verticales', 
        contenido: 'Las señales verticales informan, prohíben u obligan acciones en la vía. Aprender su significado permite anticipar situaciones, evitar sanciones y accidentes. Señales de advertencia alertan sobre riesgos, de obligación indican maniobras necesarias y de prohibición limitan acciones. La educación sobre señalización fortalece la conducción segura, fomenta respeto mutuo y garantiza la fluidez del tráfico. Además, ayuda a conductores nuevos y experimentados a tomar decisiones oportunas y responsables.' 
        , material: [{ tipo: 'imagen', valor: 'assets/senalizacionn.png' }] 
      },
    ]
  },
  {
    id: 17,
    titulo: 'Semáforos y prioridad',
    descripcion: 'Comprende el funcionamiento de semáforos y reglas de prioridad.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 20, 
        cursoId: 17, 
        titulo: 'Luces y regulación', 
        contenido: 'Los semáforos regulan el flujo de tránsito y determinan prioridades. Respetar luces y señales evita colisiones y garantiza seguridad. Conocer la jerarquía de señales, cuándo ceder el paso y cómo actuar en semáforos apagados o intermitentes es fundamental. Integrar este conocimiento con la observación del entorno y la conducción defensiva permite una circulación más ordenada y segura para todos los usuarios de la vía.' 
        , material: [{ tipo: 'texto', valor: 'Obedece semáforos y señales luminosas.' }] 
      },
    ]
  },
  {
    id: 18,
    titulo: 'Límites de velocidad',
    descripcion: 'Aprende a conducir dentro de los límites legales.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 21, 
        cursoId: 18, 
        titulo: 'Velocidad segura', 
        contenido: 'Respetar límites de velocidad es vital para la seguridad vial. Conducir demasiado rápido aumenta la gravedad de accidentes y reduce tiempo de reacción. Adaptar la velocidad según condiciones de tráfico, clima y visibilidad previene incidentes. La velocidad segura implica conocimiento de la vía, observación constante y conducción defensiva. Mantener hábitos responsables protege al conductor, pasajeros y peatones, promoviendo un tránsito ordenado y seguro.' 
        , material: [{ tipo: 'imagen', valor: 'assets/velocimetro.jpeg' }] 
      },
    ]
  },

  // Árbol 7: Conducción en circunstancias especiales
  {
    id: 19,
    titulo: 'Condiciones climáticas',
    descripcion: 'Aprende a conducir en lluvia, nieve, niebla y viento fuerte.',
    duracion: '2h',
    lessons: [
      { 
        id: 22, 
        cursoId: 19, 
        titulo: 'Lluvia y nieve', 
        contenido: 'Conducir en condiciones climáticas adversas requiere preparación y precaución. Reducir velocidad, aumentar distancia de seguridad y usar luces adecuadas previene accidentes. La adherencia al pavimento disminuye en lluvia y nieve, aumentando la distancia de frenado. Anticipar maniobras, evitar cambios bruscos de dirección y mantener calma son estrategias esenciales. Preparación, conocimiento del entorno y conducción defensiva permiten superar condiciones adversas sin comprometer la seguridad.' 
        , material: [{ tipo: 'texto', valor: 'Usa luces adecuadas y evita maniobras bruscas.' }] 
      },
    ]
  },
  {
    id: 20,
    titulo: 'Terrenos difíciles',
    descripcion: 'Conduce de manera segura en caminos de tierra o pendientes.',
    duracion: '2h',
    lessons: [
      { 
        id: 23, 
        cursoId: 20, 
        titulo: 'Pendientes y curvas', 
        contenido: 'Los terrenos irregulares requieren técnica y atención. Adaptar velocidad, anticipar curvas y mantener control del vehículo previene accidentes. Subidas y bajadas necesitan manejo gradual del acelerador y freno, evitando deslizamientos. Conocer características del terreno, peso del vehículo y condiciones climáticas permite reaccionar correctamente. La experiencia y práctica en distintos escenarios aumenta la seguridad y confianza al conducir en condiciones desafiantes.' 
        , material: [{ tipo: 'imagen', valor: 'assets/desnivel.jpeg' }] 
      },
    ]
  },
  {
    id: 21,
    titulo: 'Emergencias en ruta',
    descripcion: 'Cómo actuar ante problemas mecánicos o accidentes.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 24, 
        cursoId: 21, 
        titulo: 'Averías y accidentes', 
        contenido: 'En caso de emergencias, mantener la calma es esencial. Detener el vehículo en lugar seguro, señalizar correctamente y solicitar ayuda previene incidentes mayores. Conocer procedimientos básicos de seguridad, primeros auxilios y contacto con autoridades aumenta la capacidad de respuesta. La preparación, conocimiento de herramientas y protocolos contribuye a minimizar riesgos y proteger a todos los involucrados en la situación.' 
        , material: [{ tipo: 'texto', valor: 'Señaliza correctamente y llama ayuda si es necesario.' }] 
      },
    ]
  },

  // Árbol 8: Conducción eficiente
  {
    id: 22,
    titulo: 'Uso racional de combustible',
    descripcion: 'Aprende a conducir de manera eficiente y económica.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 25, 
        cursoId: 22, 
        titulo: 'Aceleración y freno', 
        contenido: 'Una conducción eficiente reduce consumo de combustible y emisiones. Evitar aceleraciones y frenadas bruscas, mantener velocidad constante y planificar rutas optimiza el rendimiento. Conducir de manera anticipada, utilizar marchas adecuadas y aprovechar la inercia del vehículo contribuye a eficiencia energética. La conducción consciente beneficia economía y medio ambiente, además de reducir desgaste mecánico del vehículo.' 
        , material: [{ tipo: 'imagen', valor: 'assets/grafico.png' }] 
      },
    ]
  },
  {
    id: 23,
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Revisa tu vehículo regularmente para evitar problemas y gasto innecesario.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 26, 
        cursoId: 23, 
        titulo: 'Revisiones periódicas', 
        contenido: 'El mantenimiento preventivo prolonga la vida del vehículo y garantiza seguridad. Revisar aceite, frenos, neumáticos, luces y niveles de líquidos evita fallas inesperadas. Detectar problemas a tiempo reduce costos y accidentes. Crear un calendario de revisiones periódicas y seguir manual del fabricante es clave. Un vehículo en condiciones óptimas mejora eficiencia, seguridad y confianza al conducir, fomentando hábitos responsables en el cuidado del automóvil.' 
        , material: [{ tipo: 'texto', valor: 'Previene averías y prolonga la vida útil del vehículo.' }] 
      },
    ]
  },
  {
    id: 24,
    titulo: 'Técnicas de conducción eficiente',
    descripcion: 'Aprende técnicas para reducir consumo de combustible y desgaste.',
    duracion: '2h',
    lessons: [
      { 
        id: 27, 
        cursoId: 24, 
        titulo: 'Conducción suave', 
        contenido: 'Mantener velocidad constante, anticipar maniobras y evitar aceleraciones innecesarias mejora eficiencia y reduce desgaste mecánico. Conducir de manera inteligente, planificando adelantamientos y frenadas, contribuye al ahorro de combustible y a la preservación de componentes del vehículo. La educación en conducción eficiente fomenta hábitos sostenibles y responsables, beneficiando tanto economía personal como el medio ambiente.' 
        , material: [{ tipo: 'imagen', valor: 'assets/curva.jpeg' }] 
      },
    ]
  },

  // Árbol 9: Informaciones importantes
  {
    id: 25,
    titulo: 'Documentos y licencias',
    descripcion: 'Aprende qué documentos portar y cómo mantenerlos vigentes.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 28, 
        cursoId: 25, 
        titulo: 'Licencia y registro', 
        contenido: 'Portar documentos actualizados, como licencia de conducir y registro del vehículo, es obligatorio. Mantener copias de seguridad y conocer fechas de renovación evita sanciones. La correcta documentación garantiza cumplimiento legal y permite actuar adecuadamente en controles o accidentes. La educación sobre trámites y requisitos fomenta responsabilidad y seguridad jurídica para todos los conductores.' 
        , material: [{ tipo: 'texto', valor: 'Documentos actualizados evitan sanciones y problemas legales.' }] 
      },
    ]
  },
  {
    id: 26,
    titulo: 'Seguros y obligaciones',
    descripcion: 'Conoce los seguros obligatorios y tus responsabilidades legales.',
    duracion: '2h',
    lessons: [
      { 
        id: 29, 
        cursoId: 26, 
        titulo: 'Tipos de seguros', 
        contenido: 'Los seguros vehiculares protegen a conductores, pasajeros y terceros. Conocer seguro obligatorio, contra terceros y coberturas adicionales permite elegir opciones adecuadas. Mantener pólizas vigentes y comprender condiciones reduce riesgos legales y financieros. La educación en seguros fomenta responsabilidad, planificación y tranquilidad ante imprevistos en la vía.' 
        , material: [{ tipo: 'imagen', valor: 'assets/seguro.jpeg' }] 
      },
    ]
  },
  {
    id: 27,
    titulo: 'Información vial y aplicaciones',
    descripcion: 'Aprende a usar información de tránsito y apps de navegación.',
    duracion: '1.5h',
    lessons: [
      { 
        id: 30, 
        cursoId: 27, 
        titulo: 'Apps y mapas', 
        contenido: 'Las aplicaciones de navegación ayudan a planificar rutas, evitar congestión y prevenir accidentes. Google Maps, Waze y apps oficiales proporcionan información de tráfico en tiempo real, alertas de accidentes y rutas alternativas. Conocer funcionalidad, actualización y confiabilidad de apps permite decisiones seguras y eficientes al conducir. Integrar tecnología con conocimientos viales fortalece la seguridad, eficiencia y comodidad en el tránsito diario.' 
        , material: [{ tipo: 'texto', valor: 'Google Maps, Waze u otras apps oficiales pueden ser útiles.' }] 
      },
    ]
  },
];
