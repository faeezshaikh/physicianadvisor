import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MyDataService } from '../../providers/my-data-service';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ModalController, Content } from 'ionic-angular';
import { ExplanationModal } from '../../modals/explanationModal';
import { SimpleTimer } from 'ng2-simple-timer';
import * as _ from 'lodash';

@Component({
  selector: 'page-page3',
  templateUrl: 'topicDetailPage.html'
})
export class TopicDetailPage {
  timesheet: any;

  data: any = {};
  questions: any[];
  question: string;
  showReview: boolean = false;
  scrollContent: any;
 


  timeupAlert: any;
  confirmAbortAlert: any;
  confirmSubmitAlert: any;


  @ViewChild(Content) content: Content;

  questionNumber: number;   // this is to support shuffling of array. the question.id is no longer used to display 'Question 1 of 10' ..

  scrollToTop() {
    if (this.content)
      this.content.scrollToTop();
  }



  ////////// [Start of Constructor] ///////////
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: MyDataService,
    public modalCtrl: ModalController,
    public storage: MyLocalStorage,
    private st: SimpleTimer,
    public alertCtrl: AlertController) {


    if (navParams.get('timesheet') != null) {

      this.timesheet = navParams.get('timesheet');  // TODO: Sliding ion-item can provide users to select if they want to randomize a question set. Use Local Storage and if selecetd cll shuffle
  
     

    } 
   
 


  }


  ////////// [End of Constructor] ///////////

 

  ///// [Shuffling of Questions ] //////////
  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }






  openExplanationModal(question) {
    let modal = this.modalCtrl.create(ExplanationModal, question);
    modal.present();
  }

 
  //////// [ Confirm Alert ] //////
  presentAbortConfirm() {
    this.confirmAbortAlert = this.alertCtrl.create({
      title: 'Confirm Abort',
      message: 'This will end the test and take you back to the home menu. Do you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Abort clicked');
            // Stop the timers and go back
          
            this.navCtrl.pop();


          }
        }
      ]
    });
    this.confirmAbortAlert.present();
  }

    presentSubmitConfirm() {
    this.confirmSubmitAlert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'This will submit your test and show you the final score. Do you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Submit clicked');
            // Submit the exam.
            // this.calculateAndUpdateScore();
          }
        }
      ]
    });
    this.confirmSubmitAlert.present();
  }


  //// [Lifecycle Hooks ]///////
  ionViewWillLeave() {
    // this.stopTimers();
  }
  ionViewDidLeave() {
    console.log('Page leaving..stopping the timers');
    // this.stopTimers();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
  }
 
}
