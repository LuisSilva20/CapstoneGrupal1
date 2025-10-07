import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonProgressBar,
  IonModal,
  IonButtons,
  IonImg,
  IonMenuButton
} from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Leccion } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tree-detail',
  standalone: true,
  templateUrl: './tree-detail.page.html',
  styleUrls: ['./tree-detail.page.scss'],
  imports: [
    CommonModule,
    IonImg,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonProgressBar,
    IonModal,
    IonButtons,
    IonMenuButton
  ]
})
export class TreeDetailPage implements OnInit {
  treeId!: number;
  tree: { id: number; title: string; description: string; lessons: Leccion[] } | null = null;
  activeLesson: Leccion | null = null;
  progreso: number = 0;

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.treeId = Number(sessionStorage.getItem('userCursoId') || '1');
    this.loadCurso();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  loadCurso() {
    const lecciones: Leccion[] = [
      {
        id: 1,
        cursoId: this.treeId,
        titulo: 'Normas de Tránsito',
        contenido: 'Aprende las normas básicas de tránsito.',
        completed: false,
        material: [
          { tipo: 'texto', valor: 'Existen reglas como ceder el paso, semáforos y señales de tránsito.' },
          { tipo: 'lista', valor: ['Ceda el paso', 'Respete los semáforos', 'No invada pasos peatonales'] },
          { tipo: 'imagen', valor: 'assets/normas-transito.jpg' }
        ]
      },
      {
        id: 2,
        cursoId: this.treeId,
        titulo: 'Señales de Advertencia',
        contenido: 'Conoce las señales de advertencia más importantes.',
        completed: false,
        material: [
          { tipo: 'texto', valor: 'Estas señales advierten sobre peligros o cambios en el camino.' },
          { tipo: 'lista', valor: ['Curva peligrosa', 'Zona escolar', 'Intersección peligrosa'] },
          { tipo: 'imagen', valor: 'assets/senales-advertencia.png' }
        ]
      },
      {
        id: 3,
        cursoId: this.treeId,
        titulo: 'Señales de Regulación',
        contenido: 'Aprende las señales que regulan el tránsito.',
        completed: false,
        material: [
          { tipo: 'texto', valor: 'Señales que indican límites de velocidad, direcciones y prohibiciones.' },
          { tipo: 'imagen', valor: 'assets/senales-regulacion.jpg' }
        ]
      },
      {
        id: 4,
        cursoId: this.treeId,
        titulo: 'Velocidades y Seguridad',
        contenido: 'Límites de velocidad y consejos de seguridad.',
        completed: false,
        material: [
          { tipo: 'texto', valor: 'Respeta los límites de velocidad y usa cinturón de seguridad.' },
          { tipo: 'lista', valor: ['Límite urbano 50 km/h', 'Límite rural 80 km/h', 'Uso obligatorio de cinturón'] }
        ]
      }
    ];

    this.tree = {
      id: this.treeId,
      title: 'Curso Licencia B',
      description: 'Módulos para aprobar la licencia B',
      lessons: lecciones
    };

    this.calcularProgreso();
  }

  setActiveLesson(lesson: Leccion) {
    this.activeLesson = lesson;
  }

  closeLesson() {
    this.activeLesson = null;
  }

  marcarAprendido() {
    if (!this.activeLesson) return;
    this.activeLesson.completed = true;
    this.calcularProgreso();
    this.closeLesson(); // vuelve al listado
  }

  calcularProgreso() {
    if (!this.tree) return;
    const total = this.tree.lessons.length;
    const completadas = this.tree.lessons.filter(l => l.completed).length;
    this.progreso = total > 0 ? completadas / total : 0;
  }

  getLista(item: { tipo: string; valor: string | string[] }): string[] {
    return item.tipo === 'lista' && Array.isArray(item.valor) ? item.valor : [];
  }
}
