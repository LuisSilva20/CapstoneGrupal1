import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonProgressBar, IonModal, IonButtons } from '@ionic/angular/standalone';

interface Leccion {
  id: number;
  title: string;
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.treeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCurso();
  }

  loadCurso() {
    // Simulamos API
    const lecciones: Leccion[] = [
      { id: 1, title: 'Lección 1', contenido: 'Contenido de la lección 1', completed: false },
      { id: 2, title: 'Lección 2', contenido: 'Contenido de la lección 2', completed: false }
    ];

    this.tree = { id: this.treeId, title: `Curso #${this.treeId}`, description: 'Descripción del curso', lessons: lecciones };
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
