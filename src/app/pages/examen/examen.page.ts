import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem,
  IonLabel, IonRadioGroup, IonRadio, IonButton, IonButtons, IonMenuButton,
  IonProgressBar, IonSpinner, IonCardSubtitle } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Pregunta, PreguntaJSON } from 'src/app/interfaces/interfaces';
import preguntasJSON from 'src/app/data/preguntas-examen.json';

@Component({
  selector: 'app-examen',
  standalone: true,
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  imports: [IonCardSubtitle, 
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonRadioGroup, IonRadio,
    IonButton, IonButtons, IonMenuButton, IonProgressBar, IonSpinner
  ]
})
export class ExamenPage implements OnInit, OnDestroy {
  preguntas: Pregunta[] = [];
  respuestasUsuario: { [id: number]: number } = {};
  preguntaActual = 0;
  puntaje = 0;
  terminado = false;
  cargando = true;
  tiempoRestante = 900; // 15 minutos
  progresoTiempo = 1;
  intervaloSub!: Subscription;
  corregida = false;
  correctaSeleccion = false;

  mostrarReglas: boolean = true; // <-- mostrar pantalla de reglas

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.cargando = false;
  }

  ngOnDestroy() {
    if (this.intervaloSub) this.intervaloSub.unsubscribe();
  }

  comenzarExamen() {
    this.mostrarReglas = false;
    this.iniciarExamen();
  }

  iniciarExamen() {
    this.cargando = true;

    const todasPreguntas: Pregunta[] = (preguntasJSON as PreguntaJSON[]).map(p => ({
      id: p.id,
      texto: p.question,
      opciones: p.options,
      correcta: p.correctAnswer,
      explanation: p.explanation
    }));

    this.preguntas = this.seleccionarAleatorias(todasPreguntas, 35);

    this.respuestasUsuario = {};
    this.preguntaActual = 0;
    this.puntaje = 0;
    this.terminado = false;
    this.corregida = false;
    this.correctaSeleccion = false;
    this.tiempoRestante = 900;
    this.progresoTiempo = 1;

    this.cargando = false;
    this.iniciarTemporizador();
  }

  private seleccionarAleatorias<T>(array: T[], n: number): T[] {
    const arrayCopia = [...array];
    const seleccion: T[] = [];
    n = Math.min(n, arrayCopia.length);

    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * arrayCopia.length);
      seleccion.push(arrayCopia[idx]);
      arrayCopia.splice(idx, 1);
    }

    return seleccion;
  }

  iniciarTemporizador() {
    if (this.intervaloSub) this.intervaloSub.unsubscribe();
    this.intervaloSub = interval(1000).subscribe(() => {
      this.tiempoRestante--;
      this.progresoTiempo = this.tiempoRestante / 900;
      if (this.tiempoRestante <= 0) this.finalizarExamen();
    });
  }

  responder(opcion: number) {
    if (this.corregida) return;
    const actual = this.preguntas[this.preguntaActual];
    this.respuestasUsuario[actual.id] = opcion;
    this.corregida = true;
    this.correctaSeleccion = opcion === actual.correcta;
  }

  siguiente() {
    this.corregida = false;
    this.correctaSeleccion = false;
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
    } else {
      this.finalizarExamen();
    }
  }

  finalizarExamen() {
    if (this.intervaloSub) this.intervaloSub.unsubscribe();

    let correctas = 0;
    this.preguntas.forEach(p => {
      if (this.respuestasUsuario[p.id] === p.correcta) correctas++;
    });
    this.puntaje = (correctas / this.preguntas.length) * 100;
    this.terminado = true;

    // Guardar intento en localStorage
    const username = sessionStorage.getItem('username');
    if (!username) {
      console.warn('No se encontró el username en sessionStorage.');
      return;
    }

    const key = `intentos_${username}`;
    let lista: any[] = [];

    const almacenados = localStorage.getItem(key);
    if (almacenados) {
      try {
        lista = JSON.parse(almacenados);
      } catch (e) {
        console.error('Error parseando intentos previos:', e);
        lista = [];
      }
    }

    const intento = {
      fecha: new Date().toLocaleString(),
      puntaje: this.puntaje,
      respuestas: this.preguntas.map(p => ({
        preguntaId: p.id,
        texto: p.texto,
        opciones: p.opciones,
        correcta: p.correcta,
        seleccion: this.respuestasUsuario[p.id] ?? -1
      }))
    };

    lista.unshift(intento);
    localStorage.setItem(key, JSON.stringify(lista));
  }

  reiniciar() {
    this.mostrarReglas = true;
    this.respuestasUsuario = {};
    this.preguntas = [];
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getTiempo(): string {
    const min = Math.floor(this.tiempoRestante / 60);
    const sec = this.tiempoRestante % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }

  irPerfil() {
    this.router.navigateByUrl('/perfil');
  }
}
