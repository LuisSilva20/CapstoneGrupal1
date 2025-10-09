// src/app/interfaces/interfaces.ts

export interface Users {
  id: number;
  username: string;
  password: string;
  isactive: boolean;
}

export interface User {
  nombre: string;
  apellidos: string;
  username: string;
  password: string;
  confirmPassword: string;
  isactive: boolean;
}

export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  lessons?: Leccion[];
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

export type MaterialItem = MaterialItemTexto | MaterialItemImagen | MaterialItemLista;

export interface Leccion {
  id: number;
  cursoId: number;
  titulo: string;
  contenido: string;
  completed?: boolean;
  material?: MaterialItem[];
}

// Interfaces de preguntas de examen
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
  explanation?: string;
}

// Árboles de conocimiento
export interface Skill {
  name: string;
  level: number; // 0-100
  color?: string; 
}

export interface KnowledgeCourse {
  id: number;               // ← nuevo campo
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
