import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem,
  IonLabel, IonRadioGroup, IonRadio, IonButton, IonButtons, IonMenuButton,
  IonProgressBar, IonSpinner } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { Api } from 'src/app/servicios/api';
import { Router } from '@angular/router';

interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  correcta: number;
}

@Component({
  selector: 'app-examen',
  standalone: true,
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  imports: [IonSpinner, 
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonRadioGroup, IonRadio,
    IonButton, IonButtons, IonMenuButton, IonProgressBar
  ]
})
export class ExamenPage implements OnInit {
  preguntas: Pregunta[] = [];
  respuestasUsuario: { [id: number]: number } = {};
  preguntaActual = 0;
  puntaje = 0;
  terminado = false;
  cargando = true;

  constructor(
    private api: Api,
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.cargando = true;
    this.api.GetPreguntas().subscribe({
      next: (data) => {
        this.preguntas = data.map(p => ({
          id: p.id,
          texto: p.texto,
          opciones: p.opciones || [],
          correcta: p.correcta
        }));
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener preguntas:', err);
        // Si falla el backend, usa un fallback local
        this.preguntas = [
          {
            id: 1,
            texto: '¿Qué significa una luz roja en el semáforo?',
            opciones: ['Avanzar con precaución', 'Detenerse completamente', 'Solo girar a la derecha'],
            correcta: 1
          },
          {
            id: 2,
            texto: '¿Cuál es la velocidad máxima en zona urbana?',
            opciones: ['30 km/h', '50 km/h', '70 km/h'],
            correcta: 1
          },
          {
            id: 3,
            texto: '¿Qué debes hacer al ver un cruce peatonal?',
            opciones: ['Acelerar', 'Ceder el paso al peatón', 'Tocar la bocina'],
            correcta: 1
          }
        ];
        this.cargando = false;
      }
    });
  }

  responder(opcion: number) {
    const actual = this.preguntas[this.preguntaActual];
    this.respuestasUsuario[actual.id] = opcion;
  }

  siguiente() {
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
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
    this.terminado = true;

    const username = sessionStorage.getItem('username');
    if (username) {
      this.api.GuardarResultado(username, this.puntaje).subscribe({
        next: () => console.log('Resultado guardado correctamente'),
        error: (err) => console.error('Error al guardar resultado:', err)
      });
    }
  }

  reiniciar() {
    this.respuestasUsuario = {};
    this.preguntaActual = 0;
    this.puntaje = 0;
    this.terminado = false;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
