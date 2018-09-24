import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MyLocalStorage} from './my-local-storage';
import _ from "lodash";


@Injectable()
export class MyDataService {

  topicMap: Map<number, string>;

  data: any = null;
  fileName: string;
  topics = [];
  loggedInUserEmail: string;

  constructor(public http: Http,public storage: MyLocalStorage) {
    // console.log('Hello DataService Provider');
    this.topicMap = new Map<number, string>();
    this.topicMap.set(1, 'assets/data/cloudConcepts.js');
    this.topicMap.set(2, 'assets/data/security.js');
    this.topicMap.set(3, 'assets/data/technology.js');
    this.topicMap.set(4, 'assets/data/billing.js');

    this.topicMap.set(5, 'assets/data/exam1.js');
    this.topicMap.set(6, 'assets/data/exam2.js');

    
  }


  load(topic: number) {

    this.fileName = this.topicMap.get(topic);
    // console.log("FILENAME =>", this.fileName);
    
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    // if (!this.data) {
      return new Promise(resolve => {
        this.http.get(this.fileName)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
  // }
  }


  getData(topic: number) {
  return this.load(topic).then(res => {
    this.data = res;
    return this.data;
  });
}

  getTopicsArray() {
    console.log(" ==== Getting Topics Array ====");
    
    
    class Topic {
      no: number;
      title: string;
      note: string;
      icon: string;
      hiScore: any;
      time: string;
    }
    this.topicMap.forEach((value: string, key: number) => {
        // console.log(key, value);
        this.getData(key).then((resp) => {
            let t = new Topic();
            t.no = key;
            t.title = resp.quiz.name;
            t.note = resp.questions.length + ' questions';
            t.icon = resp.quiz.logo;
            t.time = resp.quiz.time;


            if (this.topics.length != this.topicMap.size) {
               // some kinda bug, adding twice hence frocing to break after the size is reached.
              this.topics.push(t);
            }
            
        });
    });
  console.log('Formed Topics Array:', this.topics);
  let sortedObjects = _.sortBy(this.topics, 'no');
  console.log('sorted array:',sortedObjects);
  
  return sortedObjects;
    

}

setLoggedInUserEmail(email) {
  console.log('Email set to :' , email);
  this.loggedInUserEmail = email;
  this.storage.saveToStorage('email',email);
}

getLoggedInUserEmail() {
  console.log('Returning email:' , this.storage.getFromStorage('email'));
  // return this.loggedInUserEmail;
  return this.storage.getFromStorage('email');
}
}
