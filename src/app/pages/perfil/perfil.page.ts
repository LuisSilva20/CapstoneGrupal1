import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonButton,
  IonMenuButton,
  IonButtons,
  IonMenuToggle,
  IonIcon,
  IonMenu, IonAvatar } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular'; // <-- Cambiado aquí
import { Api } from 'src/app/servicios/api';
import { Router } from '@angular/router';
import { logOutOutline, personCircleOutline, schoolOutline } from 'ionicons/icons';

interface Usuario {
  id: number;
  username: string;
  role: string;
  email?: string;
  isactive: boolean;
}

interface CursoProgreso {
  id: number;
  titulo: string;
  progreso: number; // 0 a 100
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonAvatar, 
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonProgressBar,
    IonButton,
    IonMenuButton,
    IonButtons,
    IonMenuToggle,
    IonIcon,
  ]
})
export class PerfilPage implements OnInit {
  usuario: Usuario | null = null;
  cursos: CursoProgreso[] = [];

  constructor(
    private api: Api,
    private router: Router,
    private menuCtrl: MenuController // <-- Cambiado aquí
  ) {}

  ngOnInit() {
    this.cargarUsuario();
    this.cargarCursos();
  }

  cargarUsuario() {
    const username = sessionStorage.getItem('username');
    if (!username) return;

    this.api.GetUserById(username).subscribe((resp: any) => {
      if (resp && resp.length > 0) {
        const user = resp[0];
        this.usuario = {
          id: user.id,
          username: user.username,
          role: user.role,
          email: user.email,
          isactive: user.isactive
        };
      }
    });
  }

  cargarCursos() {
    const username = sessionStorage.getItem('username');
    if (!username) return;

    this.api.GetCursosByUsuario(username).subscribe((cursosResp: any) => {
      this.cursos = cursosResp.map((curso: any) => {
        const total = curso.lecciones.length;
        const completadas = curso.lecciones.filter((l: any) => l.completed).length;
        return {
          id: curso.id,
          titulo: curso.title,
          progreso: total > 0 ? (completadas / total) * 100 : 0
        };
      });
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/inicio-sesion');
  }

  abrirCurso(cursoId: number) {
    sessionStorage.setItem('userCursoId', cursoId.toString());
    this.router.navigateByUrl('/tree-detail');
  }

  toggleMenu() {
    this.menuCtrl.toggle(); // <-- funciona correctamente
  }
}
