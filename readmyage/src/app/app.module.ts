import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ReadMyAge } from './app.component';
import { ScanPage } from '../pages/scan/scan';
import { InfoPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    ReadMyAge,
    ScanPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ReadMyAge),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ReadMyAge,
    ScanPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
