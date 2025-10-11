import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem,
  IonLabel, IonProgressBar, IonButton, IonMenuButton, IonButtons,
  IonCardSubtitle
} from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

interface PreguntaExamen {
  id: number;
  treeId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  seleccion?: number;   // respuesta del usuario
  correcta?: number;    // índice de la correcta (por compatibilidad)
}

interface ArbolEstadistica {
  nombre: string;
  preguntasIncorrectas: PreguntaExamen[];
  porcentajeAciertos: number;
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonProgressBar, IonButton,
    IonMenuButton, IonButtons, IonCardSubtitle
  ]
})
export class EstadisticasPage implements OnInit {

  arboles: ArbolEstadistica[] = [];
  filtroAReforzar: boolean = false;
  preguntasInspeccionadas: { [key: number]: boolean } = {};

  constructor(private router: Router, private menuCtrl: MenuController) {}

  ngOnInit() {
    this.cargarEstadisticas();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  toggleFiltro() {
    this.filtroAReforzar = !this.filtroAReforzar;
  }

  toggleInspeccionPregunta(pregId: number) {
    this.preguntasInspeccionadas[pregId] = !this.preguntasInspeccionadas[pregId];
  }

  cargarEstadisticas() {
    const username = sessionStorage.getItem('username') || 'anon';
    const intentosStr = localStorage.getItem(`intentos_${username}`);
    const intentos = intentosStr ? JSON.parse(intentosStr) : [];

    if (!intentos || intentos.length === 0) return;

    const ultimo = intentos[0];
    const arbolMap: { [key: string]: ArbolEstadistica } = {};

    ultimo.respuestas.forEach((r: any) => {
      const p: PreguntaExamen = {
        id: r.id,
        treeId: r.treeId,
        question: r.question,
        options: r.options,
        correctAnswer: r.correctAnswer ?? r.correcta, // compatibilidad
        explanation: r.explanation,
        seleccion: r.seleccion,
        correcta: r.correcta
      };

      const treeName = p.treeId?.trim() || 'Sin Categoría';

      if (!arbolMap[treeName]) {
        arbolMap[treeName] = { nombre: treeName, preguntasIncorrectas: [], porcentajeAciertos: 0 };
      }

      if (r.seleccion !== (r.correctAnswer ?? r.correcta)) {
        arbolMap[treeName].preguntasIncorrectas.push(p);
      }
    });

    Object.keys(arbolMap).forEach(treeName => {
      const total = ultimo.respuestas.filter((r: any) => r.treeId?.trim() === treeName).length;
      const incorrectas = arbolMap[treeName].preguntasIncorrectas.length;
      arbolMap[treeName].porcentajeAciertos = ((total - incorrectas) / total) * 100;
    });

    this.arboles = Object.values(arbolMap).sort((a, b) => a.porcentajeAciertos - b.porcentajeAciertos);
  }

  irArbol(nombreArbol: string) {
    sessionStorage.setItem('selectedTree', nombreArbol);
    this.router.navigateByUrl('/tree-detail');
  }
}
