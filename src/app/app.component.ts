import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle } from '@ionic/angular/standalone'; 

// Esta interfaz define la estructura de cada opción en tu menú.
interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  // Aquí se importan todos los componentes de Ionic que tu HTML utiliza.
  imports: [
    IonicModule, 
    RouterModule, 
    CommonModule, 
    IonList, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonMenu, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonMenuToggle
  ]
})
export class AppComponent implements OnInit { // Agregamos OnInit
  // El menú solo tendrá enlaces a las páginas que existen.
  componentes: Componente[] = [
    { name: 'Home', redirecTo: '/home', icon: 'home-outline' },
    { name: 'Inicio Sesion', redirecTo: '/inicio-sesion', icon: 'exit-outline' },
    { name: 'Registrarse', redirecTo: '/registrarse', icon: 'person-add-outline' }
  ];

  nombre: string | null = '';

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
  }
}