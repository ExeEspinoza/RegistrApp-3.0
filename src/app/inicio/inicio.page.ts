import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
    datocodificado:any;

  constructor(private activeRoute:ActivatedRoute, private router: Router, private loadingCtrl: LoadingController) {

  }
  
  segmentChanged(event: any){
    console.log(event)
    let ruta= event.detail.value
    console.log("ruta: "+ruta)
    this.router.navigate(['inicio/'+ruta])
  }

  dato: any={
  usuario:"",
  contrasena:"",
  };

  fechaNaci: Date = new Date();

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation()!.extras!.state){
        this.dato= this.router.getCurrentNavigation()!.extras.state!.dato;
        console.log("20: "+this.dato);
      }});
      this.router.navigate(['inicio/uno'])

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
