import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { IonicStorageModule } from '@ionic/storage-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { isPlatform} from '@ionic/angular';

  const getConfig= () => {
    if(isPlatform('android')){
      return{
        backButtonText:'Previous',
        tabButtonLayout: 'label-hide'
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner,EmailComposer],
  bootstrap: [AppComponent],

})
export class AppModule {}
