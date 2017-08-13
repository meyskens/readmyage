import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  constructor(public http: Http) {}

  public lookup(isbn) {
    return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('https://readmyage.eyskens.me/lookup/isbn?isbn='+isbn)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
    });
  }

}
