import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonProgressBar, IonModal, IonButtons } from '@ionic/angular/standalone';

interface Leccion {
  id: number;
  titulo: string;
  contenido: string;
  completed: boolean;
}

@Component({
  selector: 'app-tree-detail',
  standalone: true,
  templateUrl: './tree-detail.page.html',
  styleUrls: ['./tree-detail.page.scss'],
  imports: [
    CommonModule, IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonList, IonItem, IonLabel, IonButton, IonProgressBar, IonModal, IonButtons
  ]
})
export class TreeDetailPage implements OnInit {
  treeId!: number;
  tree: any = null;
  activeLesson: Leccion | null = null;
  progreso: number = 0;

  ngOnInit() {
    this.treeId = Number(sessionStorage.getItem('userCursoId') || '1');
    this.loadCurso();
  }

  loadCurso() {
    // Cursos simulados tipo licencia B
    const lecciones: Leccion[] = [
      { id: 1, titulo: 'Normas de Tránsito', contenido: 'Aprende las normas básicas de tránsito.', completed: false },
      { id: 2, titulo: 'Señales de Advertencia', contenido: 'Conoce las señales de advertencia.', completed: false },
      { id: 3, titulo: 'Señales de Regulación', contenido: 'Aprende las señales que regulan el tránsito.', completed: false },
      { id: 4, titulo: 'Velocidades y Seguridad', contenido: 'Límites de velocidad y consejos de seguridad.', completed: false }
    ];

    this.tree = { id: this.treeId, title: `Curso Licencia B`, description: 'Módulos para aprobar la licencia B', lessons: lecciones };
    this.calcularProgreso();
  }

  setActiveLesson(lesson: Leccion) { this.activeLesson = lesson; }
  closeLesson() { this.activeLesson = null; }

  completeLesson(lessonId: number) {
    const lesson = this.tree.lessons.find((l: Leccion) => l.id === lessonId);
    if (lesson) lesson.completed = true;
    this.calcularProgreso();
    this.closeLesson();
  }

  calcularProgreso() {
    const total = this.tree.lessons.length;
    const completadas = this.tree.lessons.filter((l: Leccion) => l.completed).length;
    this.progreso = total > 0 ? (completadas / total) * 100 : 0;
  }
}
