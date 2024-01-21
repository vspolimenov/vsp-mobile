import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { DecimalPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [BrowserModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule],
  providers: [ Geolocation, Storage, DecimalPipe  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {}