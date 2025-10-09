import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonCard,
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonMenuButton,
  IonButtons, IonAvatar, IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { cursosData } from 'src/app/data/cursos-data';

interface Usuario {
  id: number;
  username: string;
  role: string;
  email?: string;
  isactive: boolean;
}

interface CursoGuardado {
  id: number;
  title: string;
  lessons: { titulo: string; completed: boolean; fecha?: string }[];
  progreso: number;
  mostrarDetalle?: boolean;
  fecha?: string;
}

interface IntentoExamen {
  fecha: string;
  puntaje: number;
  respuestas: {
    preguntaId: number;
    texto: string;
    opciones: string[];
    correcta: number;
    seleccion: number;
  }[];
  mostrarDetalle?: boolean;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonIcon, CommonModule, IonAvatar,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonMenuButton, IonButtons
  ]
})
export class PerfilPage {
  usuario: Usuario | null = null;
  cursos: CursoGuardado[] = [];
  intentos: IntentoExamen[] = [];

  constructor(private router: Router, private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.cargarUsuario();
    this.cargarCursosGuardados();
    this.cargarExamenesGuardados();
  }

  cargarUsuario() {
    const username = sessionStorage.getItem('username');
    if (!username) return;

    this.usuario = {
      id: 1,
      username,
      role: 'Estudiante',
      email: 'usuario@ejemplo.com',
      isactive: true
    };
  }

  // Cursos guardados
  cargarCursosGuardados() {
    const username = sessionStorage.getItem('username') || 'anon';
    const cursosTemp: CursoGuardado[] = [];

    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(`curso_${username}_`)) {
        const lessons = JSON.parse(localStorage.getItem(key) || '[]') as any[];
        const cursoId = Number(key.split('_')[2]);
        const total = lessons.length;
        const completadas = lessons.filter(l => l.completed).length;

        // Obtener título real desde cursosData
        const cursoInfo = cursosData.find(c => c.id === cursoId);

        cursosTemp.push({
          id: cursoId,
          title: cursoInfo?.titulo || `Curso ${cursoId}`,
          lessons: lessons.map(l => ({
            titulo: l.titulo,
            completed: l.completed,
            fecha: l.fecha
          })),
          progreso: total > 0 ? (completadas / total) * 100 : 0,
          mostrarDetalle: false,
          fecha: lessons.length > 0 ? lessons[0].fecha || new Date().toISOString() : new Date().toISOString()
        });
      }
    });

    // Ordenar por fecha más reciente
    this.cursos = cursosTemp.sort((a, b) => (b.fecha! > a.fecha! ? 1 : -1));
  }

  // Exámenes realizados
  cargarExamenesGuardados() {
    const username = sessionStorage.getItem('username') || 'anon';
    const key = `intentos_${username}`;
    const data = localStorage.getItem(key);
    this.intentos = data ? JSON.parse(data) : [];
    this.intentos.sort((a, b) => (b.fecha > a.fecha ? 1 : -1));
  }

  toggleDetalleCurso(curso: CursoGuardado) {
    curso.mostrarDetalle = !curso.mostrarDetalle;
  }

  toggleDetalleExamen(intento: IntentoExamen) {
    intento.mostrarDetalle = !intento.mostrarDetalle;
  }

  // -----------------------
  // Eliminar examen individual
  // -----------------------
  eliminarExamen(index: number) {
    const username = sessionStorage.getItem('username') || 'anon';
    const key = `intentos_${username}`;
    this.intentos.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(this.intentos));
  }

  // -----------------------
  // Eliminar todos los exámenes
  // -----------------------
  eliminarTodosExamenes() {
    const username = sessionStorage.getItem('username') || 'anon';
    const key = `intentos_${username}`;
    this.intentos = [];
    localStorage.removeItem(key);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
