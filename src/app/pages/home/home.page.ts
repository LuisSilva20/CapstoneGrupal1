// src/app/pages/home/home.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Bienvenido a Home!</h1>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule]
})
export class HomePage {}
