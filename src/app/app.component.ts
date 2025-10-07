import { Component, OnInit } from '@angular/core';
import { IonApp, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonMenuToggle, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [IonRouterOutlet, IonLabel, 
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
    CommonModule,
    RouterModule
  ],
})
export class AppComponent implements OnInit {
  nombre: string | null = '';
  userCourseId: number = 1;

  componentes: Componente[] = [
    { name: 'Perfil', redirecTo: '/inicio', icon: 'home-outline' },
    { name: 'Cursos', redirecTo: '', icon: 'school-outline' }, 
    { name: 'Examen', redirecTo: '/registrarse', icon: 'person-add-outline' },
  ];

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
    const cursoAsignado = sessionStorage.getItem('userCourseId');
    this.userCourseId = cursoAsignado ? Number(cursoAsignado) : 1;

    const cursoMenu = this.componentes.find(c => c.name === 'Cursos');
    if (cursoMenu) cursoMenu.redirecTo = `/tree-detail/${this.userCourseId}`;
  }
}
