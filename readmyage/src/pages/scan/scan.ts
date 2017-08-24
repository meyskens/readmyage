import { Component } from '@angular/core'
import { NavController, AlertController } from 'ionic-angular'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { APIService } from '../../providers/api-service'
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers: [APIService]
})

export class ScanPage {

  public books: any
  public isbn = ""

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private api:APIService, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.books = []
  }

  public scan() {
    this.barcodeScanner.scan({
      showTorchButton: true,
    }).then((barcodeData) => {
      if (barcodeData.cancelled) {
        return
      }

      let loader = this.loadingCtrl.create({
        content: "Looking up..."
      })
      loader.present()

      this.isbn = barcodeData.text
      this.api.lookup(barcodeData.text).then(data => {
        this.books = (data as any).results
        loader.dismiss()
        if (this.books.length === 0) {
          let alert = this.alertCtrl.create({
            title: 'No books found',
            subTitle: `Barcode: ${this.isbn}`,
            buttons: ['OK']
          });
          alert.present();
        }
      })
    }, (err) => {
      console.log(err)
    });
  }

}
