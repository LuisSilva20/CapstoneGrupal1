import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonCard,
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonMenuButton,
  IonButtons, IonAvatar, IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { cursosData } from 'src/app/data/cursos-data';
import { Usuario, CursoGuardado, IntentoExamen, ArbolPerfil } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonIcon, CommonModule, IonAvatar,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonList, IonItem, IonLabel, IonProgressBar, IonButton, IonMenuButton, IonButtons
  ]
})
export class PerfilPage {
  usuario: Usuario | null = null;
  cursos: CursoGuardado[] = [];
  intentos: IntentoExamen[] = [];
  arboles: ArbolPerfil[] = [];
  fortalezas: ArbolPerfil[] = [];
  debilidades: ArbolPerfil[] = [];

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

  ionViewWillEnter() {
    this.cargarUsuario();
    this.cargarCursosGuardados();
    this.cargarExamenesGuardados();
    this.calcularEstadisticasArboles();
  }

  cargarUsuario() {
    const username = sessionStorage.getItem('username');
    if (!username) return;
    this.usuario = {
      id: 1,
      username,
      role: 'Estudiante',
      email: 'usuario@ejemplo.com',
      isactive: true
    };
  }

  cargarCursosGuardados() {
    const username = sessionStorage.getItem('username') || 'anon';
    const cursosTemp: CursoGuardado[] = [];

    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(`curso_${username}_`)) {
        const lessons = JSON.parse(localStorage.getItem(key) || '[]') as any[];
        const cursoId = Number(key.split('_')[2]);
        const total = lessons.length;
        const completadas = lessons.filter(l => l.completed).length;

        const cursoInfo = cursosData.find(c => c.id === cursoId);

        cursosTemp.push({
          id: cursoId,
          title: cursoInfo?.titulo || `Curso ${cursoId}`,
          lessons: lessons.map(l => ({
            titulo: l.titulo,
            completed: l.completed,
            fecha: l.fecha
          })),
          progreso: total > 0 ? (completadas / total) * 100 : 0,
          mostrarDetalle: false,
          fecha: lessons.length > 0 ? lessons[0].fecha || new Date().toISOString() : new Date().toISOString()
        });
      }
    });

    this.cursos = cursosTemp.sort((a, b) => (b.fecha! > a.fecha! ? 1 : -1));
  }

  cargarExamenesGuardados() {
    const username = sessionStorage.getItem('username') || 'anon';
    const key = `intentos_${username}`;
    const data = localStorage.getItem(key);
    this.intentos = data ? JSON.parse(data) : [];

    this.intentos.forEach(intento => {
      intento.fechaFormateada = this.formatearFecha(intento.fecha);
    });

    this.intentos.sort((a, b) => (b.fecha > a.fecha ? 1 : -1));
  }

  formatearFecha(fechaISO: string): string {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  }

  calcularEstadisticasArboles() {
    const arbolMap: { [key: string]: ArbolPerfil } = {};

    this.todosLosArboles.forEach(nombre => {
      arbolMap[nombre] = {
        nombre,
        totalAciertos: 0,
        totalErrores: 0,
        porcentajeAciertos: 0
      };
    });

    const ultimosTres = this.intentos.slice(0, 3);

    ultimosTres.forEach(intento => {
      intento.respuestas.forEach(r => {
        const treeName = r.treeId?.trim() || 'Sin Categoría';
        const arbol = arbolMap[treeName];
        if (!arbol) return;

        if (r.seleccion === r.correcta) arbol.totalAciertos++;
        else arbol.totalErrores++;
      });
    });

    this.arboles = this.todosLosArboles.map(nombre => {
      const arbol = arbolMap[nombre];
      const total = arbol.totalAciertos + arbol.totalErrores;
      arbol.porcentajeAciertos = total > 0 ? (arbol.totalAciertos / total) * 100 : 100;
      return arbol;
    });

    this.fortalezas = this.arboles.filter(a => a.porcentajeAciertos >= 75);
    this.debilidades = this.arboles.filter(a => a.porcentajeAciertos < 75);
  }

  toggleDetalleCurso(curso: CursoGuardado) {
    curso.mostrarDetalle = !curso.mostrarDetalle;
  }

  toggleDetalleExamen(intento: IntentoExamen) {
    intento.mostrarDetalle = !intento.mostrarDetalle;
  }

  eliminarExamen(index: number) {
    const username = sessionStorage.getItem('username') || 'anon';
    this.intentos.splice(index, 1);
    localStorage.setItem(`intentos_${username}`, JSON.stringify(this.intentos));
    this.calcularEstadisticasArboles();
  }

  eliminarTodosExamenes() {
    const username = sessionStorage.getItem('username') || 'anon';
    this.intentos = [];
    localStorage.removeItem(`intentos_${username}`);
    this.calcularEstadisticasArboles();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  irArbol(nombreArbol: string) {
    sessionStorage.setItem('selectedTree', nombreArbol);
    this.router.navigateByUrl('/tree-detail');
  }
}
