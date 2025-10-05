import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonRow, IonCol, IonButton, IonBackButton, IonSelectOption } from '@ionic/angular/standalone';
import { AlertController, ToastController } from '@ionic/angular';
import { Api } from 'src/app/servicios/api';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    ReactiveFormsModule,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelectOption,
    IonButton,
    IonBackButton
],
})
export class RegistrarsePage {
  usuario: User = {
    nombre: '',
    apellidos: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
    isactive: true,
  };

  registerForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private api: Api,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.registerForm = this.builder.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      role: new FormControl('', [Validators.required]),
    });
  }

  async Registrarse() {
    if (this.usuario.password !== this.usuario.confirmPassword) {
      this.mostrarAlerta('Las contraseñas no coinciden');
      return;
    }

    this.mostrarAlerta('Usuario creado con éxito');
    await this.api.CrearUsuario(this.usuario).toPromise();

    this.registerForm.reset();
    this.router.navigate(['inicio-sesion']);
  }

  async mostrarAlerta(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 5000,
    });
    toast.present();
  }
}
