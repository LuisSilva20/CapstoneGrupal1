export interface Users {
  id: number;
  username: string;
  password: string;
  role: string;
  isactive: boolean;
}

export interface User {
  nombre: string;
  apellidos: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
  isactive: boolean;
}

export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  lessons?: Leccion[];
}

export interface MaterialItem {
  tipo: 'texto' | 'imagen' | 'lista';
  valor: string | string[];
}

export interface Leccion {
  id: number;
  cursoId: number;
  titulo: string;
  contenido: string;
  completed?: boolean;
  material?: MaterialItem[];
}
