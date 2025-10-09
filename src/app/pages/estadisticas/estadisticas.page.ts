import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem,
  IonLabel, IonProgressBar, IonButton, IonMenuButton, IonButtons, IonCardSubtitle } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

interface CursoEstadistica {
  id: number;
  nombre: string;
  porcentajeAciertos: number; // 0-100
  preguntasIncorrectas: { id: number; texto: string; seleccion: number; correcta: number }[];
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  imports: [IonCardSubtitle, 
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonMenuButton, IonButtons
  ]
})
export class EstadisticasPage implements OnInit {

  cursos: CursoEstadistica[] = [];
  filtroAReforzar: boolean = false;

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.cargarEstadisticas();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  cargarEstadisticas() {
    const username = sessionStorage.getItem('username') || 'anon';
    const intentosStr = localStorage.getItem(`intentos_${username}`);
    const intentos = intentosStr ? JSON.parse(intentosStr) : [];

    // Agrupar por curso simulado (para ejemplo simple usamos solo 1 curso)
    const curso: CursoEstadistica = {
      id: 1,
      nombre: 'Licencia B',
      porcentajeAciertos: 0,
      preguntasIncorrectas: []
    };

    if (intentos.length > 0) {
      const ultimo = intentos[0]; // tomar último intento
      const total = ultimo.respuestas.length;
      const correctas = ultimo.respuestas.filter((r: any) => r.seleccion === r.correcta).length;
      curso.porcentajeAciertos = (correctas / total) * 100;
      curso.preguntasIncorrectas = ultimo.respuestas.filter((r: any) => r.seleccion !== r.correcta);
    }

    this.cursos = [curso];
  }

  toggleFiltro() {
    this.filtroAReforzar = !this.filtroAReforzar;
  }

  irCurso(cursoId: number) {
    sessionStorage.setItem('userCursoId', cursoId.toString());
    this.router.navigateByUrl('/tree-detail');
  }
}
