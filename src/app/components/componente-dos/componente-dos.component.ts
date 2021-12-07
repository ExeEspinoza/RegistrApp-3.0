import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent implements OnInit {
  datosescaneados: any;
  

  constructor(private barcodeScanner: BarcodeScanner) { 

  }
  
  LeerCode(){
    this.barcodeScanner.scan().then(barcodeData =>  {
        this.datosescaneados = barcodeData.text;
      })
    .catch(err => {
      console.log("Error, err");
    });
  }

  ngOnInit() {}

  
}
