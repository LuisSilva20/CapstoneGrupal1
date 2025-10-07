import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Api } from 'src/app/servicios/api';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class IniciadoGuard {
  
  constructor(private router: Router,
    private api: Api,
    private toastcontroller: ToastController) {}

    canActivate():
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.api.IsLogged()){
          this.showToast('Debe iniciar sesión');
          this.router.navigateByUrl("/inicio-sesion");
          return false;
        }
    return true;
}

async showToast(msg: any){
    const toast= await this.toastcontroller.create({
        message:msg,
        duration: 3000
      })
      toast.present();
    }
}
