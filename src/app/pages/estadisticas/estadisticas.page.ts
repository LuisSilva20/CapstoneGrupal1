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
import { ArbolEstadistica } from 'src/app/interfaces/interfaces';

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

  todosLosArboles: string[] = [
    'Siniestros de tránsito',
    'Los principios de la conducción',
    'Convivencia Vial',
    'La persona en el tránsito',
    'Las y los usuarios vulnerables',
    'Normas de circulación',
    'Conducción en circunstancias especiales',
    'Conducción eficiente',
    'Informaciones importantes'
  ];

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

    this.todosLosArboles.forEach(nombre => {
      arbolMap[nombre] = {
        nombre,
        preguntasIncorrectas: [],
        totalPreguntas: 0,
        totalAciertos: 0,
        totalErrores: 0,
        porcentajeAciertos: 0
      };
    });

    ultimo.respuestas.forEach((r: any) => {
      const treeName = r.treeId?.trim() || 'Sin Categoría';
      const arbol = arbolMap[treeName];
      if (!arbol) return;

      arbol.totalPreguntas++;

      if (r.seleccion === r.correcta) {
        arbol.totalAciertos++;
      } else {
        arbol.totalErrores++;
        arbol.preguntasIncorrectas.push({
          id: r.id,
          treeId: r.treeId,
          question: r.texto,
          options: r.opciones,
          correctAnswer: r.correcta,
          explicacion: r.explicacion,
          userSeleccion: r.seleccion
        });
      }
    });

    Object.values(arbolMap).forEach(arbol => {
      arbol.porcentajeAciertos = arbol.totalPreguntas > 0
        ? (arbol.totalAciertos / arbol.totalPreguntas) * 100
        : 100;
    });

    this.arboles = this.todosLosArboles.map(nombre => arbolMap[nombre]);
  }

  get filasArboles() {
    const filas = [];
    for (let i = 0; i < this.arboles.length; i += 3) {
      filas.push(this.arboles.slice(i, i + 3));
    }
    return filas;
  }

  irArbol(nombreArbol: string) {
    sessionStorage.setItem('selectedTree', nombreArbol);
    this.router.navigateByUrl('/tree-detail');
  }
}
