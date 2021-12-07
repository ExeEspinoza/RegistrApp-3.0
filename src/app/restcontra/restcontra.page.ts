import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-restcontra',
  templateUrl: './restcontra.page.html',
  styleUrls: ['./restcontra.page.scss'],
})
export class RestcontraPage implements OnInit {

  dato:any={
    usuario:"",
  }

  constructor(public alertController: AlertController, private router: Router, private loadingCtrl: LoadingController) { }

  async enviar() {
    if (this.dato.usuario != "") {
      const alert = await this.alertController.create({
        header: 'Restablecer contraseña',
        message: 'Se ha enviado a su correo electrónico los pasos a seguir para restablecer su contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/home']);
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    } else {
      const alert = await this.alertController.create({
        header: 'Ups...',
        message: 'Porfavor ingrese datos de Usuario para restablecer su contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    }

  }
  ngOnInit() {

    this.presentLoading('Cargando...');
  }
  async presentLoading(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
      duration: 550
    });
    return await loading.present();
  }  
  
}





