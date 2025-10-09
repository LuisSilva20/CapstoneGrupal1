import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonList, IonItem, IonLabel, IonButton, IonBackButton 
} from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular';
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
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonBackButton
  ],
})
export class RegistrarsePage {
  registerForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private api: Api,
    private router: Router,
    private toastController: ToastController
  ) {
    this.registerForm = this.builder.group({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      apellidos: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    });
  }

  async Registrarse() {
    if (this.registerForm.invalid) {
      this.mostrarAlerta('Por favor completa todos los campos correctamente');
      return;
    }

    const formValue = this.registerForm.value;

    if (formValue.password !== formValue.confirmPassword) {
      this.mostrarAlerta('Las contraseñas no coinciden');
      return;
    }

    const usuario: User = {
      nombre: formValue.nombre,
      apellidos: formValue.apellidos,
      username: formValue.username,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword,
      isactive: true,
    };

    try {
      await this.api.CrearUsuario(usuario).toPromise();
      this.mostrarAlerta('Usuario creado con éxito');
      this.registerForm.reset();
      this.router.navigate(['inicio-sesion']);
    } catch (error) {
      this.mostrarAlerta('Error al crear el usuario');
      console.error(error);
    }
  }

  async mostrarAlerta(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 3000,
      color: 'warning',
    });
    toast.present();
  }
}
