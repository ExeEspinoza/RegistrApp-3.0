import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { IAgenda } from "../interfaces/inombres";

@Injectable({
    providedIn: 'root'
})
export class BdLocalService {
    nombre: IAgenda[] = [];
    private _storage:Storage | null = null
    
    constructor(private stogare: Storage, public toastController:ToastController) {
        this.init();
        this.cargarNombres();
    }
    async cargarNombres() {
        const miNombres = await this.stogare.get('nombre')
        if (miNombres) {
            this.nombre = miNombres;
        }
    }
    async init() {
        const storage = await this.stogare.create();
        this._storage = storage;
    }
    guardarNombre(nombre:string,password:string) {
        const existe=this.nombre.find(c=>c.strPassword===password);
        if(!existe){
            this.nombre.unshift({strNombre:nombre,strPassword:password});
            this._storage?.set('agenda', this.nombre)
            this.presentToast("Nombre y Contraseña agregados con Exito!!!")
        }else{
            this.presentToast("Error:Contacto y Contraseña ya Existentes!!!!")
        }
    }

    async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
        message: mensaje,
        translucent: true,
        color: 'medium',
        position: 'top',
        duration: 2000
        });
        toast.present();
    }
}