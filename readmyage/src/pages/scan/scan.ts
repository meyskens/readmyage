import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
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

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private api:APIService, public loadingCtrl: LoadingController) {
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
        if (this.books.length === 0) {
          alert("No books found")
        }
        loader.dismiss()
      })
    }, (err) => {
      console.log(err)
    });
  }

}
