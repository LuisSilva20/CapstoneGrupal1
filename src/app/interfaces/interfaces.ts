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
