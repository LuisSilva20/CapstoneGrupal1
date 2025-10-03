import { Component } from '@angular/core';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Api } from 'src/app/servicios/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, RouterModule, CommonModule]
})
export class InicioSesionPage {
  userdata: any;
  usuario = { id: 0, username: '', password: '', role: '', isactive: true };
  inicioSesionForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private api: Api,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    this.inicioSesionForm = this.builder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    });
  }

  inicioSesion() {
    if (!this.inicioSesionForm.valid) return;

    const username = this.inicioSesionForm.value.username;
    this.api.GetUserById(username).subscribe(resp => {
      this.userdata = resp;
      if (!this.userdata.length) return this.NoExiste();

      this.usuario = this.userdata[0];

      if (this.usuario.password !== this.inicioSesionForm.value.password) {
        this.DatoError();
        return this.inicioSesionForm.reset();
      }

      if (!this.usuario.isactive) {
        this.UserInactivo();
        return this.inicioSesionForm.reset();
      }

      sessionStorage.setItem('username', this.usuario.username);
      sessionStorage.setItem('userrole', this.usuario.role);
      sessionStorage.setItem('ingresado', 'true');
      this.showToast('Sesión Iniciada');
      this.router.navigateByUrl('/home');
    });
  }

  async showToast(msg: string) {
    const toast = await this.toastController.create({ message: msg, duration: 3000 });
    toast.present();
  }

  async UserInactivo() {
    const alerta = await this.alertController.create({ header: 'Error', message: 'Usuario inactivo, contactar a admin@admin.cl', buttons: ['Ok'] });
    alerta.present();
  }

  async DatoError() {
    const alerta = await this.alertController.create({ header: 'Error', message: 'Revise sus credenciales', buttons: ['Ok'] });
    alerta.present();
  }

  async NoExiste() {
    const alerta = await this.alertController.create({ header: 'Debe registrarse', message: 'Usuario no existe', buttons: ['Ok'] });
    alerta.present();
  }
}
