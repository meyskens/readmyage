import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { APIService } from '../../providers/api-service'

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [APIService]
})

export class ScanPage {

  public books: any
  public isbn = ""

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private api:APIService) {
    this.books = []
  }

  public scan() {
    this.barcodeScanner.scan({
      showTorchButton: true,
    }).then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        return
      }
      
      this.isbn = barcodeData.text
      this.api.lookup(barcodeData.text).then(data => {
        this.books = (data as any).results
      })
    }, (err) => {
      console.log(err);
    });
  }

}
