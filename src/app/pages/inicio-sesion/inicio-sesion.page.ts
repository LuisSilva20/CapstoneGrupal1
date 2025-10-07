import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Api } from 'src/app/servicios/api';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonRow,
    IonCol,
    IonButton
  ]
})
export class InicioSesionPage {
  inicioSesionForm: FormGroup;

  constructor(private builder: FormBuilder, private api: Api, private router: Router) {
    this.inicioSesionForm = this.builder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  inicioSesion() {
    if (!this.inicioSesionForm.valid) return;

    const username = this.inicioSesionForm.value.username;

    this.api.GetUserById(username).subscribe((resp: any) => {
      if (!resp.length) return alert('Usuario no existe');
      const usuario = resp[0];

      if (!usuario.isactive) return alert('Usuario inactivo');
      if (usuario.password !== this.inicioSesionForm.value.password) return alert('Contraseña incorrecta');

      // Guardar sesión
      sessionStorage.setItem('username', usuario.username);
      sessionStorage.setItem('userrole', usuario.role);
      sessionStorage.setItem('ingresado', 'true');
      sessionStorage.setItem('userCursoId', usuario.cursoId?.toString() || '1');

      this.router.navigateByUrl('/inicio');
    });
  }
}
