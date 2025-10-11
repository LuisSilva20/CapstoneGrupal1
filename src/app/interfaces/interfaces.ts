// src/app/interfaces/interfaces.ts

// ==== USUARIO ====
export interface User {
  id?: number;                // opcional al crear; se asigna automáticamente
  username: string;
  password: string;
  confirmPassword?: string;   // opcional (solo para registro)
  nombre: string;
  apellidos: string;
  isactive: boolean;
  progreso?: number;          // porcentaje total del usuario (0–100)
  cursosCompletados?: number[]; // IDs de cursos completados
}

// ==== CURSOS Y LECCIONES ====
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

// ==== MATERIALES DE LECCIÓN ====
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

// ==== PREGUNTAS DE EXAMEN ====
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

// ==== ÁRBOLES DE CONOCIMIENTO ====
export interface Skill {
  name: string;
  level: number; // 0–100
  color?: string;
}

export interface KnowledgeCourse {
  id: number;
  title: string;
  description: string;
  progress: number; // 0–100
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
