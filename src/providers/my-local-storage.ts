import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class MyLocalStorage {

  constructor(public http: HttpClient,public storage: Storage) {
    console.log('Hello MyLocalStorage Provider');
  }

  saveScore(examTopic:number,hiScore:number) {
    console.log("Saving ..saving max");
    
    this.storage.ready().then(() => {
       this.storage.set(examTopic.toString(),JSON.stringify(hiScore));
        //  this.storage.set('name', 'Max');
       console.log('Score Saved Successfully.MAX Saved!');
       
     });
  }



  getScore(examTopic:number): any {
       return this.storage.ready().then(() => {
        return this.storage.get(examTopic.toString()).then((val) => {
        //  console.log('Exam Topic:' + examTopic, val);
         return val;
       })
     });
  }


    saveToStorage(key:any,value:any) {
    this.storage.ready().then(() => {
       this.storage.set(key.toString(),JSON.stringify(value));
       console.log(key + ' saved successfully..Value is: ' + value);
       
     });
  }
    getFromStorage(key:string): any {
       return this.storage.ready().then(() => {
        return this.storage.get(key.toString()).then((val) => {
         return JSON.parse(val);
       })
     });
  }

}
