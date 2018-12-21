import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MyDataService } from '../../providers/my-data-service';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ModalController, Content } from 'ionic-angular';
import { ExplanationModal } from '../../modals/explanationModal';
// import { ExamStartingModal} from '../../modals/examStartingModal';
import { SimpleTimer } from 'ng2-simple-timer';
import * as _ from 'lodash';

@Component({
  selector: 'page-page3',
  templateUrl: 'topicDetailPage.html'
})
export class TopicDetailPage {
  selectedTopic: any;

  data: any = {};
  questions: any[];
  question: string;
  showReview: boolean = false;
  scrollContent: any;
  mode: string = 'quiz';

  verdict: string;
  correct: number = 0;
  score: number = 0;

  /// [Timer related] ///

  secondUnit = 59;
  minutes = 20;
  mtTimerId: string;
  seconds = this.secondUnit;
  secondsTimerId: string;
  /// [Timer related] ///


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

    this.questionNumber = 1;  // wil always start at 1.
    if (navParams.get('topic') != null) {

      this.selectedTopic = navParams.get('topic');  // TODO: Sliding ion-item can provide users to select if they want to randomize a question set. Use Local Storage and if selecetd cll shuffle
      if(this.selectedTopic && this.selectedTopic.no > 8) {
        // this.openModal('asas');
        this.minutes = 120;
      }
      dataService.getData(this.selectedTopic.no).then(theResult => {
        this.data = theResult;
        this.questions = theResult.questions;
        this.questions = this.shuffle(this.questions);   /// TODO: Make shuffling of question order user configurable
        this.question = this.questions[0];
        // console.log("Data => ", this.data);
        // console.log("Questions => ", theResult.questions);
      });

    } else {
      this.selectedTopic = { note: "blah" };
    }

    // Frequency of countdown is 7 ticks.
    this.st.newTimer('mt', this.secondUnit); // decrement the 'minutes' counter after 59 counts of the 'seconds' counter

    // Frequency of countdown is 1 tick.
    this.st.newTimer('sec', 1);

    this.subscribeTimer(this.mtTimerId,'minute');
    this.subscribeTimer(this.secondsTimerId,'seconds');


    this.createTimerAlert();


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


  /////// [ Timer code begins ] ///////

   createTimerAlert() {
      this.timeupAlert = this.alertCtrl.create({
      title: 'Time\'s up!',
      subTitle: 'Your time is up. Please tap OK to view the results!',
      enableBackdropDismiss: false,
      buttons: [{
        text: 'Ok',
        handler: data => {
          // console.log('Cancel clicked');
          if (this.confirmAbortAlert) { this.confirmAbortAlert.dismiss(); }
          this.calculateAndUpdateScore();
        }
      }]
    });
  }

  subscribeTimer(timerId:string,type:string) {
      // timerId = (type == 'minute' ? this.st.subscribe('mt', e => this.mtTimercallback()) : this.st.subscribe('sec', e => this.secondsTimercallback()));

      if(type == 'minute') {
        this.mtTimerId = this.st.subscribe('mt', e => this.mtTimercallback());
      } else {
        this.secondsTimerId = this.st.subscribe('sec', e => this.secondsTimercallback());
      }
      // console.log('Timer subsribed: ', this.mtTimerId);
      // console.log('Timer subsribed: ', this.secondsTimerId);
      
  }

  unsubscribeTimer(timerId){
    if(timerId) {
         console.log('Timer ' + timerId + ' unsubsribed');
         this.st.unsubscribe(timerId);
          timerId = undefined;
    }  else {
      console.log("Timers were already unsubscribed..Didnt do anything");
      
    }

  }

  mtTimercallback() {
    this.minutes--;
    if (this.minutes == 0) {
      this.minutes = 0;
      this.seconds = 0;
      console.log('Setting the counters to zero');
      this.stopTimers();
      this.timeupAlert.present();
    }
  }

  secondsTimercallback() {
    // console.log('Decrementing Seconds Counter..');
    this.seconds--;
    if (this.seconds == 0 || this.seconds<0) this.seconds = this.secondUnit;
  }

   stopTimers() {
    console.log("Printing TIMERS:" ,this.mtTimerId + '-'+this.secondsTimerId);
    
    this.unsubscribeTimer(this.mtTimerId);
    this.unsubscribeTimer(this.secondsTimerId);
  }

  /////// [ Timer code ends ] ///////




  ///// [ Navigation code] ///////

  shift(increment: number) {
    let ix = increment + this.questions.findIndex(c => c === this.question);
    ix = Math.min(this.questions.length - 1, Math.max(0, ix));
    this.question = this.questions[ix];
    this.scrollToTop();
  }
  left() {
    this.shift(-1);
    if (this.questionNumber == 1) {

    } else {
      this.questionNumber--;
    }
  }
  right() {
    this.shift(1);
    if (this.questionNumber == this.questions.length) {

    } else {
      this.questionNumber++;
    }
  }

  goTo(index: number) {
    if (index > 0 && index <= this.questions.length) {
      this.question = this.questions[index - 1];
      this.questionNumber = index;
    }
    this.mode = 'quiz';
  }

 ////// [ Scoring ] ///////

  calculateAndUpdateScore() {

    this.stopTimers();

    let wrong = 0;
    let that = this;
    // $scope.$broadcast('timer-stop');

    this.questions.forEach(function (q, index) {
      if (that.isCorrect(q) == 'Correct') {

      } else {
        wrong++;
      }

    });

    this.correct = this.questions.length - wrong;
    this.score = Math.round((Number(this.correct) / this.questions.length) * 100);
    this.verdict = (this.score > 65) ? 'Pass' : 'Fail';
    this.setMode('result');
    this.storage.saveScore(this.selectedTopic.no, this.score);
  }


  isAnswered(question: any) {
    var answered = 'Not Answered';
    question.Options.forEach(function (element, index, array) {
      if (element.Selected == true) {
        answered = 'Answered';
        return false;
      }
    });
    return answered;
  }



  reset() {
    this.questions.forEach(function (q, index, array) {
      q.Options.forEach(function (option, index, array) {
        option.Selected = false;
      });
    });

  }

  setMode(mode) {
    this.mode = mode;
    console.log('Mode set to:', mode);
    this.scrollToTop();

  }

  toBoolVal(val: any) {
    if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
      return false;
    else if (val == true || val == 'true' || val == 'True')
      return true;
  }
  
  updateAnswer(ques,option){
    // console.log('question:',q);
    // console.log('option:',option);

    // var quest = _.find(this.questions, (question) => question.Id == q.Id).;

    this.questions.forEach(function (q, index, array) {
      if(q.Id == ques.Id) {
        q.Options.forEach(function (o, index, array) {
          if(o.Id == option.Id) {
            o.Selected = true;
            // console.log('Set to true:',o);
          } else {
            o.Selected = false;
          }
        });
      }
    });
  console.log('question:',ques);

  }




  isCorrect(question) {

    let result = 'Correct';
    let self = this;
    if (question.answer) {
      question.Options.forEach(function (option, index, array) {
        if (option.IsAnswer == true) {
          if (option.Name != question.answer) {
            result = 'Wrong';
            
            return result;
          }
        }
      });
    } else {
      question.Options.forEach(function (option, index, array) {

        if (self.toBoolVal(option.Selected) != option.IsAnswer) {
          // if (option.Selected != option.IsAnswer) {
          result = 'Wrong';
          return result;
        }
      });
    }
    return result;
  }


  closeResults() {
    this.reset();
    this.navCtrl.pop();
  }


  openExplanationModal(question) {
    let modal = this.modalCtrl.create(ExplanationModal, question);
    modal.present();
  }

 
  // openModal(modalName) {
  //   let modal = this.modalCtrl.create(ExamStartingModal,null,{'enableBackdropDismiss':false});
  //    modal.onDidDismiss(data => {
  //     console.log(data);
  //     if (data && data.cancel) {
  //        this.navCtrl.pop();
  //     }
  //  });
  //   modal.present();
  // }

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
            this.stopTimers();
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
            this.calculateAndUpdateScore();
          }
        }
      ]
    });
    this.confirmSubmitAlert.present();
  }


  //// [Lifecycle Hooks ]///////
  ionViewWillLeave() {
    this.stopTimers();
  }
  ionViewDidLeave() {
    console.log('Page leaving..stopping the timers');
    this.stopTimers();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
  }
 
}
