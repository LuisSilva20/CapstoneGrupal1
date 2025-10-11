import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol,
  IonMenuButton, IonButtons, IonImg, IonProgressBar, IonButton, IonCardSubtitle, IonText
} from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { KnowledgeTree, KnowledgeCourse } from '../../interfaces/interfaces';
import { knowledgeTrees } from '../../data/knowledge-trees';

@Component({
  selector: 'app-tree-detail',
  standalone: true,
  templateUrl: './tree-detail.page.html',
  styleUrls: ['./tree-detail.page.scss'],
  imports: [
    CommonModule, IonText, IonCardSubtitle,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonGrid, IonRow, IonCol, IonButtons, IonMenuButton,
    IonImg, IonProgressBar, IonButton
  ]
})
export class TreeDetailPage {
  knowledgeTrees: KnowledgeTree[] = knowledgeTrees;
  allCourses: KnowledgeCourse[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private menuCtrl: MenuController) {}

  ngOnInit() {
    // Extraer todos los cursos
    this.knowledgeTrees.forEach(tree => {
      tree.courses.forEach(course => this.allCourses.push(course));
    });

    // Filtrar por ID si se pasa en la ruta
    const treeId = this.route.snapshot.paramMap.get('id');
    if (treeId) {
      const idNum = Number(treeId);
      const tree = this.knowledgeTrees.find(t => t.id === idNum);
      if (tree) this.allCourses = tree.courses;
    }

    this.updateCoursesProgress();
  }

  // Navegar al detalle de curso
  goToCourse(course: KnowledgeCourse) {
    if (course.curso) {
      this.router.navigate(['/course-detail', course.curso.id]);
    }
  }

  // Marcar curso como aprendido
  markCourseAsLearned(course: KnowledgeCourse) {
    const username = sessionStorage.getItem('username') || 'anon';
    const key = `curso_${username}_${course.curso?.id}`;
    const lessons = course.curso?.lessons || [];
    const savedLessons = lessons.map(l => ({ ...l, completed: true }));
    localStorage.setItem(key, JSON.stringify(savedLessons));
    this.updateCoursesProgress();
  }

  // Actualiza el progreso de todos los cursos
  updateCoursesProgress() {
    const username = sessionStorage.getItem('username') || 'anon';
    this.knowledgeTrees.forEach(tree => {
      tree.courses.forEach(course => {
        if (!course.curso?.lessons) {
          course.progress = 0;
          return;
        }
        const lessons = course.curso.lessons;
        const key = `curso_${username}_${course.curso.id}`;
        const savedLessons = JSON.parse(localStorage.getItem(key) || '[]');
        const completed = lessons.filter(l => savedLessons.find((s: any) => s.id === l.id && s.completed)).length;
        course.progress = lessons.length ? (completed / lessons.length) * 100 : 0;
      });
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  skillColor(level: number): string {
    if (level >= 75) return 'success';
    if (level >= 50) return 'warning';
    return 'danger';
  }
}
