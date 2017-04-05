import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

import { ModalController, Content } from 'ionic-angular';
import { ExplanationModal } from '../../modals/explanationModal';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedTopic: any;

  data: any = {};
  questions: string[];
  question: string;
  showReview : boolean = false;
  scrollContent: any;
  mode: string = 'quiz';
  // result: string = 'Correct';

  @ViewChild(Content) content: Content;
  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService,
              public modalCtrl: ModalController) {
    if (navParams.get('topic') != null) {
      this.selectedTopic = navParams.get('topic');

      dataService.getData(this.selectedTopic.no).then(theResult => {
          this.data =   theResult;
          this.questions = theResult.questions;
          this.question = this.questions[0];
          console.log("Data => ",this.data);
          console.log("Questions => ",theResult.questions);
        });
      
      // this.questions = dataService.getQuestions(this.selectedTopic.no);
      // this.question = this.questions[0];
    } else {
      this.selectedTopic = { note: "blah" };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }


  shift(increment: number) {
    let ix = increment + this.questions.findIndex(c => c === this.question);
    ix = Math.min(this.questions.length - 1, Math.max(0, ix));
    this.question = this.questions[ix];
    this.scrollToTop();
  }
  left() {
    this.shift(-1);
  }
  right() {
    this.shift(1);
  }

  // isAnswered(index: number) {
  //   if (index % 2 == 0) return 'Answered';
  // }
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
  goTo(index: number) {
    if (index > 0 && index <= this.questions.length) {
      this.question = this.questions[index - 1];
    }
    this.mode = 'quiz';
  }



  setMode(mode) {
    this.mode = mode;
    console.log('Mode set to:', mode);
    this.scrollToTop();
    
  }

		toBoolVal(val:any){
			if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
				return false;
			else if (val == true || val == 'true' || val == 'True')
				return true;
			// else
			// 	return 'unidentified';
		}
		;

  	isCorrect(question) {
      let result = 'Correct';
      let self = this;
			question.Options.forEach(function (option, index, array) {
        
				if (self.toBoolVal(option.Selected) != option.IsAnswer) {
          // if (option.Selected != option.IsAnswer) {
          result = 'Wrong';
					return false;
				}
			});
			return result;
		};


    closeResults() {
      // setMode('quiz');
      this.navCtrl.pop();
    }


    openExplanationModal(question) {
      let modal = this.modalCtrl.create(ExplanationModal, question);
    modal.present();
  }

}
