import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIClientService } from '../services/apiclient.service';
import { async } from '@angular/core/testing';
import { BdLocalService } from '../services/bd-local.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre!: string;
  password!: string;
  bdLocal: any;

  apiHora = 'https://time.is/es/'

  hora: any;
  dato: any = {
    usuario: "",
    contrasena: "",
  }
  EmailComposer: any;
  email: any;
  constructor(public toastController: ToastController, bdLocal: BdLocalService, private router: Router, private api: APIClientService, emailComposer: EmailComposer) {
  }
  OpenEmailComposer() {
    let email = {
      to: 'correo@prueba.cl',
      cc: 'exeq.espinoza@duoc.cl'
    }
    this.email.addAlias('gmail','correo@prueba.cl');
  }
  guardar() {
    this.bdLocal.guardarNombre(this.nombre, this.password)
  }
  async ingresar() {
    if (this.dato.usuario != "" && this.dato.contrasena != "") {
      let navigationExtras: NavigationExtras = {
        state: { dato: this.dato }
      };
      //console.log(this.dato) //Esta mostrará en la consola el dato
      const alert = await this.toastController.create({
        header: '¡Bienvenido!',
        message: 'Se inicio sesion exitosamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      const alert = await this.toastController.create({
        header: 'Ups...',
        message: 'Porfavor ingrese sus datos de Usuario y la Contraseña para iniciar Sesion.',
        buttons: ['OK']
      });
      await alert.present();
    }

  }
  contrasena() {
    this.router.navigate(['/restcontra']);
  }
  getHorario() {
    return this.api.getHorario().subscribe((data) => {
      this.hora = data;

    });
  }
}

