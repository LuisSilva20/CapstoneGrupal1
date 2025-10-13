import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonProgressBar, IonRadioGroup,
  IonRadio, IonButtons, IonMenuButton, IonSpinner
} from '@ionic/angular/standalone';

import { Pregunta, KnowledgeTree } from 'src/app/interfaces/interfaces';
import preguntasJson from '../../data/preguntas-examen.json';
import { knowledgeTrees } from '../../data/knowledge-trees';

@Component({
  selector: 'app-exam-tree',
  standalone: true,
  templateUrl: './exam-tree.page.html',
  styleUrls: ['./exam-tree.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonRadioGroup,
    IonRadio, IonButtons, IonMenuButton, IonSpinner
  ]
})
export class ExamTreePage implements OnInit {

  preguntas: Pregunta[] = [];
  respuestasUsuario: { [id: number]: number } = {};
  preguntaActual = 0;
  corregida = false;
  terminado = false;
  puntaje = 0;
  mostrarFelicitacion = false;
  mostrarReglas = true;
  cargando = false;

  tiempoRestante = 600; // 10 minutos
  progresoTiempo = 1;

  treeId!: string;
  treeName = 'Árbol';
  mensajeRetroalimentacion: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.treeId = this.route.snapshot.paramMap.get('id') || '';
    const tree: KnowledgeTree | undefined = knowledgeTrees.find(t => t.id.toString() === this.treeId);
    if (tree) this.treeName = tree.name;

    this.cargarPreguntas();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  cargarPreguntas() {
    this.cargando = true;

    const tree: KnowledgeTree | undefined = knowledgeTrees.find(t => t.id.toString() === this.treeId);
    const treeName = tree?.name || '';

    const preguntasFiltradas = preguntasJson.filter(p => p.treeId === treeName);
    preguntasFiltradas.sort(() => Math.random() - 0.5);
    const seleccion = preguntasFiltradas.slice(0, 15); 

    this.preguntas = seleccion.map((p, i) => ({
      id: i + 1,
      texto: p.question,
      opciones: p.options,
      correcta: p.correctAnswer,
      explicacion: p.explanation,
      treeId: p.treeId
    }));

    setTimeout(() => this.cargando = false, 300);
  }

  comenzarExamen() {
    this.mostrarReglas = false;
    this.iniciarTemporizador();
    this.corregida = false;
  }

  iniciarTemporizador() {
    const intervalo = setInterval(() => {
      if (this.terminado) { clearInterval(intervalo); return; }
      this.tiempoRestante--;
      this.progresoTiempo = this.tiempoRestante / 600;
      if (this.tiempoRestante <= 0) {
        clearInterval(intervalo);
        this.finalizarExamen();
      }
    }, 1000);
  }

  getTiempo(): string {
    const min = Math.floor(this.tiempoRestante / 60);
    const sec = this.tiempoRestante % 60;
    return `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
  }

  responder(opcion: number) {
    const id = this.preguntas[this.preguntaActual].id;
    this.respuestasUsuario[id] = opcion;
    this.corregida = true;
  }

  siguiente() {
    if (!this.corregida) return;
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
      this.corregida = this.respuestasUsuario[this.preguntaActual] !== undefined;
    } else {
      this.finalizarExamen();
    }
  }

  finalizarExamen() {
    let correctas = 0;
    this.preguntas.forEach(p => {
      if (this.respuestasUsuario[p.id] === p.correcta) correctas++;
    });

    this.puntaje = (correctas / this.preguntas.length) * 100;
    this.mostrarFelicitacion = this.puntaje >= 75;
    this.terminado = true;
    this.mensajeRetroalimentacion = this.getMensajePorcentaje(this.puntaje);

    const username = sessionStorage.getItem('username') || 'anon';
    const key = `intentos_arbol_${this.treeId}_${username}`;
    const intentosStr = localStorage.getItem(key);
    const intentos = intentosStr ? JSON.parse(intentosStr) : [];

    intentos.unshift({
      fecha: new Date().toISOString(),
      treeId: this.treeId,
      puntaje: this.puntaje,
      respuestas: this.preguntas.map(p => ({
        id: p.id,
        treeId: p.treeId,
        texto: p.texto,
        opciones: [...p.opciones],
        correcta: p.correcta,
        seleccion: this.respuestasUsuario[p.id] ?? -1,
        explicacion: p.explicacion
      }))
    });

    localStorage.setItem(key, JSON.stringify(intentos));
  }

  reiniciar() {
    this.preguntaActual = 0;
    this.respuestasUsuario = {};
    this.corregida = false;
    this.terminado = false;
    this.puntaje = 0;
    this.mostrarFelicitacion = false;
    this.mostrarReglas = true;
    this.mensajeRetroalimentacion = '';
    this.cargarPreguntas();
    this.tiempoRestante = 600;
    this.progresoTiempo = 1;
  }

  volverArboles() {
    this.router.navigateByUrl('/tree-detail');
  }

  getMensajePorcentaje(puntaje: number): string {
    if (puntaje <= 25) return 'Siguiendo intentándolo';
    if (puntaje <= 50) return 'Vas bien';
    if (puntaje <= 74) return 'Vas mejorando';
    return '¡Felicidades!';
  }
}
