import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonProgressBar, IonRadioGroup, IonRadio, IonButtons, IonMenuButton, IonSpinner, IonCardSubtitle
} from '@ionic/angular/standalone';

interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  treeId?: string;
}

// Importa tu JSON de preguntas
import preguntasJson from '../../data/preguntas-examen.json';

@Component({
  selector: 'app-examen',
  standalone: true,
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonRadioGroup, IonRadio, IonButtons, IonMenuButton, IonSpinner, IonCardSubtitle
  ]
})
export class ExamenPage implements OnInit {

  preguntas: Pregunta[] = [];
  respuestasUsuario: { [id: number]: number } = {};
  preguntaActual: number = 0;
  corregida: boolean = false;
  terminado: boolean = false;
  puntaje: number = 0;
  mostrarFelicitacion: boolean = false;
  mostrarReglas: boolean = true;
  cargando: boolean = false;

  tiempoRestante: number = 900; // 15 minutos
  progresoTiempo: number = 1;

  constructor(private router: Router, private menuCtrl: MenuController) {}

  ngOnInit() {
    this.cargarPreguntas();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  cargarPreguntas() {
    const arboles = Array.from(new Set(preguntasJson.map(p => p.treeId))).filter(a => a); // Todos los árboles
    const preguntasPorArbol: Pregunta[] = [];

    // 1️⃣ Al menos 3 preguntas por cada árbol
    arboles.forEach(arbol => {
      const preguntasDelArbol = preguntasJson.filter(p => p.treeId === arbol);
      preguntasDelArbol.sort(() => Math.random() - 0.5);
      const seleccion = preguntasDelArbol.slice(0, 3);
      seleccion.forEach(p => preguntasPorArbol.push({
        id: preguntasPorArbol.length + 1,
        texto: p.question,
        opciones: p.options,
        correcta: p.correctAnswer,
        explicacion: p.explanation,
        treeId: p.treeId
      }));
    });

    // 2️⃣ Resto de preguntas hasta 35 aleatoriamente
    const restantes = 35 - preguntasPorArbol.length;
    if (restantes > 0) {
      const usadas = preguntasPorArbol.map(p => p.texto);
      const disponibles = preguntasJson.filter(p => !usadas.includes(p.question));
      disponibles.sort(() => Math.random() - 0.5);
      const seleccionRestante = disponibles.slice(0, restantes);
      seleccionRestante.forEach(p => preguntasPorArbol.push({
        id: preguntasPorArbol.length + 1,
        texto: p.question,
        opciones: p.options,
        correcta: p.correctAnswer,
        explicacion: p.explanation,
        treeId: p.treeId
      }));
    }

    // Mezclar final
    preguntasPorArbol.sort(() => Math.random() - 0.5);
    this.preguntas = preguntasPorArbol;
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
      this.progresoTiempo = this.tiempoRestante / 900;
      if (this.tiempoRestante <= 0) { clearInterval(intervalo); this.finalizarExamen(); }
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
    this.corregida = true; // Habilita botón
  }

  siguiente() {
    if (!this.corregida) return; // No avanzar si no eligió opción
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

    // Guardar intento
    const username = sessionStorage.getItem('username') || 'anon';
    const intentosStr = localStorage.getItem(`intentos_${username}`);
    const intentos = intentosStr ? JSON.parse(intentosStr) : [];
    intentos.unshift({
      fecha: new Date().toISOString(),
      respuestas: this.preguntas.map(p => ({
        id: p.id,
        texto: p.texto,
        seleccion: this.respuestasUsuario[p.id],
        correcta: p.correcta,
        treeId: p.treeId
      }))
    });
    localStorage.setItem(`intentos_${username}`, JSON.stringify(intentos));
  }

  reiniciar() {
    this.preguntaActual = 0;
    this.respuestasUsuario = {};
    this.corregida = false;
    this.terminado = false;
    this.puntaje = 0;
    this.mostrarFelicitacion = false;
    this.mostrarReglas = true;
    this.cargarPreguntas();
    this.tiempoRestante = 900;
    this.progresoTiempo = 1;
  }

  irPerfil() {
    this.router.navigateByUrl('/estadisticas');
  }
}
