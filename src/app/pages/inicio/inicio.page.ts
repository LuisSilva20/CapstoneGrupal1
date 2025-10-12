import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface Componente {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [ 
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class InicioPage implements OnInit {
  nombre: string | null = '';
  userCourseId: number = 1;

  componentes: Componente[] = [
    { name: 'Perfil', icon: 'home-outline' },
    { name: 'Cursos', icon: 'school-outline' },
    { name: 'Examen', icon: 'person-add-outline' },
    { name: 'Cerrar sesión', icon: 'log-out-outline' }
  ];

  constructor(private router: Router, private menu: MenuController) {}

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
    const cursoAsignado = sessionStorage.getItem('userCourseId');
    this.userCourseId = cursoAsignado ? Number(cursoAsignado) : 1;
  }

  async manejarClick(item: Componente) {
    await this.menu.close();

    if (item.name === 'Cursos') {
      this.router.navigateByUrl(`/tree-detail/${this.userCourseId}`);
    } else if (item.name === 'Cerrar sesión') {
      sessionStorage.clear();
      this.router.navigateByUrl('/inicio-sesion');
    } else if (item.name === 'Perfil') {
      this.router.navigateByUrl('/inicio');
    } else if (item.name === 'Examen') {
      this.router.navigateByUrl('/registrarse');
    }
  }
}
