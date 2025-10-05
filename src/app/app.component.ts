import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp,
    IonRouterOutlet,
    CommonModule,
    RouterModule,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuToggle,
    IonList,
    IonItem,
    IonIcon
  ],
})

export class AppComponent implements OnInit {
  // Agregamos OnInit
  // El menú solo tendrá enlaces a las páginas que existen.
  componentes: Componente[] = [
    { name: 'Home', redirecTo: '/home', icon: 'home-outline' },
    {
      name: 'Inicio Sesion',
      redirecTo: '/inicio-sesion',
      icon: 'exit-outline',
    },
    {
      name: 'Registrarse',
      redirecTo: '/registrarse',
      icon: 'person-add-outline',
    },
  ];

  nombre: string | null = '';

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
  }
}
