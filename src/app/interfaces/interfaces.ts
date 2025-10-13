export interface User {
  id?: number;
  username: string;
  password: string;
  confirmPassword?: string;
  nombre: string;
  apellidos: string;
  isactive: boolean;
  progreso?: number;
  cursosCompletados?: number[];
}

export interface Usuario {
  id: number;
  username: string;
  role: string;
  isactive: boolean;
  progreso?: number; 
}


export interface CursoGuardado {
  id: number;
  title: string;
  lessons: { titulo: string; completed: boolean; fecha?: string }[];
  progreso: number;
  mostrarDetalle?: boolean;
  fecha?: string;
}

export interface RespuestaPerfil {
  preguntaId: number;
  treeId: string;
  texto: string;
  opciones: string[];
  correcta: number;
  seleccion: number;
}

export interface IntentoExamen {
  fecha: string; 
  fechaFormateada?: string; 
  puntaje: number;
  respuestas: RespuestaPerfil[];
  mostrarDetalle?: boolean;
}

export interface ArbolPerfil {
  nombre: string;
  totalAciertos: number;
  totalErrores: number;
  porcentajeAciertos: number;
}

export interface PreguntaExamen {
  id: number;
  treeId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explicacion?: string;
  userSeleccion?: number;
}

export interface ArbolEstadistica {
  nombre: string;
  preguntasIncorrectas: PreguntaExamen[];
  totalPreguntas: number;
  totalAciertos: number;
  totalErrores: number;
  porcentajeAciertos: number;
}

export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  lessons?: Leccion[];
}

export interface Leccion {
  id: number;
  cursoId: number;
  titulo: string;
  contenido: string;
  completed?: boolean;
  material?: MaterialItem[];
}

export interface MaterialItemTexto {
  tipo: 'texto';
  valor: string;
}

export interface MaterialItemImagen {
  tipo: 'imagen';
  valor: string;
}

export interface MaterialItemLista {
  tipo: 'lista';
  valor: string[];
}

export type MaterialItem =
  | MaterialItemTexto
  | MaterialItemImagen
  | MaterialItemLista;

export interface PreguntaJSON {
  id: number;
  treeId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  treeId?: string;
}

export interface Skill {
  name: string;
  level: number;
  color?: string;
}

export interface KnowledgeCourse {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon?: string;
  curso?: Curso;
}

export interface KnowledgeTree {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
  courses: KnowledgeCourse[];
  icon?: string;
}

export interface Componente {
  name: string;
  icon: string;
}

export interface Fuente {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  link: string;
  botonTexto: string;
}

export interface PreguntaExamenLocal { 
  texto: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  treeId?: string;
}

export interface RespuestaPerfil {
  preguntaId: number;      
  treeId: string;           
  texto: string;
  opciones: string[];
  correcta: number;
  seleccion: number;
  explicacion?: string;       
}

