import { Component, OnInit } from '@angular/core';
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonMenuToggle,
  IonLabel,
  IonRouterOutlet,
  IonButton
} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Componente {
  name: string;
  icon: string;
  redirecTo?: string;
  action?: () => void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    IonRouterOutlet,
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonMenuToggle,
    IonLabel,
    CommonModule,
    RouterModule,
    IonButton
  ],
})
export class AppComponent implements OnInit {
  nombre: string | null = '';
  userCourseId: number = 1;

  componentes: Componente[] = [
    { name: 'Perfil', redirecTo: '/perfil', icon: 'home-outline' },
    { name: 'Inicio', redirecTo: '/inicio', icon: 'home-outline' },
    { name: 'Cursos', icon: 'school-outline' }, // ← se actualizará en ngOnInit
    { name: 'Examen', redirecTo: '/examen', icon: 'person-add-outline' },
    { name: 'Cerrar Sesión', icon: 'log-out-outline', action: () => this.cerrarSesion() },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
    const cursoAsignado = sessionStorage.getItem('userCursoId');
    this.userCourseId = cursoAsignado ? Number(cursoAsignado) : 1;

    // Asignar redirección de Cursos dinámicamente
    const cursoMenu = this.componentes.find((c) => c.name === 'Cursos');
    if (cursoMenu) {
      cursoMenu.action = () => this.router.navigateByUrl(`/tree-detail/${this.userCourseId}`);
    }
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigateByUrl('/inicio-sesion');
  }
}
