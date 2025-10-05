import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText, IonCard, IonAvatar } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonText, RouterLink, RouterLinkActive]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
