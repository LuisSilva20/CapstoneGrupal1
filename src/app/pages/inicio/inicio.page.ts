import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class InicioPage implements OnInit {

  nombre: any;
  constructor(private menuController: MenuController) { this.nombre = sessionStorage.getItem('username');}

  ngOnInit() {
  }

}
