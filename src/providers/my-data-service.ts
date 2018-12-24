import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 


// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {MyLocalStorage} from './my-local-storage';
import _ from "lodash";

class Topic {
  no: number;
  title: string;
  note: string;
  icon: string;
  hiScore: any;
  time: string;
}


@Injectable()
export class MyDataService {

  topicMap: Map<number, string>;
  examsMap: Map<number, string>;

  data: any = null;
  fileName: string;
  topics = [];
  exams = [];
  loggedInUserEmail: string;

  
  constructor(public http: HttpClient,public storage: MyLocalStorage) {
    // console.log('Hello DataService Provider');
    this.topicMap = new Map<number, string>();
    this.topicMap.set(1, 'assets/data/cloudConcepts.js');
    this.topicMap.set(2, 'assets/data/security.js');
    this.topicMap.set(3, 'assets/data/technology.js');
    this.topicMap.set(4, 'assets/data/billing.js');

    this.examsMap = new Map<number, string>();
    // this.topicMap.set(5, 'assets/data/exam3.js');
    this.examsMap.set(5, 'assets/data/exam1.js');
    this.examsMap.set(6, 'assets/data/exam2.js');

    
  }


  load(topic: number,isExam:boolean) {

    if(isExam)
      this.fileName = this.examsMap.get(topic);
    else
      this.fileName = this.topicMap.get(topic);
    // console.log("FILENAME =>", this.fileName);
    
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    // if (!this.data) {
      return new Promise(resolve => {
        this.http.get(this.fileName)
          // .map(res => res.)
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
  // }
  }


  getData(topic: number,isExam:boolean) {
    console.log('Getting data...');
  return this.load(topic,isExam).then(res => {
    this.data = res;
    // console.log('Loading this..',res);
    
    return this.data;
  });
}

  getTopicsArray() {
    console.log(" ==== Getting Topics Array ====");
  
    this.topicMap.forEach((value: string, key: number) => {
        // console.log(key, value);
        this.getData(key,false).then((resp) => {
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



getExamsArray() {
  console.log(" ==== Getting Exams Array ====");
  
  
 let that = this;
  this.examsMap.forEach((value: string, key: number) => {

      console.log(key, value);
      that.getData(key,true).then((resp) => {
        console.log('Received..',resp);
        
          let t = new Topic();
          t.no = key;
          t.title = resp.quiz.name;
          t.note = resp.questions.length + ' questions';
          t.icon = resp.quiz.logo;
          t.time = resp.quiz.time;


         
          if (this.exams.length != this.examsMap.size) {
             // some kinda bug, adding twice hence frocing to break after the size is reached.
             console.log('Pushing',t);
             
            this.exams.push(t);
          }
          
      });
  });
// console.log('Formed Exams Array:', this.exams);
// let sortedObjects = _.sortBy(this.exams, 'no');
// console.log('sorted array:',sortedObjects);
// return sortedObjects;
console.log('Returning..',this.exams);

return this.exams;
  

}



setLoggedInUserEmail(email) {
  console.log('Email set to :' , email);
  this.loggedInUserEmail = email;
  localStorage.setItem('email',email);
  // this.storage.saveToStorage('email',email);
}


deleteFromStorage(email){
  this.storage.deleteFromStorage(email);
}
getLoggedInUserEmail() {
  let email = localStorage.getItem('email');
  console.log('Returning email:' , email);
  // return this.loggedInUserEmail;
  return email;
}
}
