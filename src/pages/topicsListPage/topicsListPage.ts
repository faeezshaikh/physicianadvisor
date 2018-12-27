import { Component,ViewChild } from '@angular/core';

import { ModalController,NavController, NavParams ,AlertController,Content} from 'ionic-angular';
import { TopicDetailPage } from '../topicDetailPage/topicDetailPage';
import { reorderArray} from 'ionic-angular';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ExamStartingModal} from '../../modals/examStartingModal';
import { MyDataService } from '../../providers/my-data-service';
import { MySocialShareService } from '../../providers/my-social-share-service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';



@Component({
  selector: 'page-page2',
  templateUrl: 'topicsListPage.html'
})
export class TopicsListPage {

  timesheets: Observable<any[]>;
  icons: string[];
  topics: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;

  reorder: boolean = false;
  reorderIcon: string = "options";
  @ViewChild(Content) content: Content;

  exams: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyLocalStorage, public dataService: MyDataService,
              private alertCtrl: AlertController,public modalCtrl: ModalController,
              public mySocialShareService: MySocialShareService,
              db: AngularFireDatabase) {




    this.timesheets = db.list('timesheets').valueChanges();


  }

  scrollToTop() {
    if(this.content)
        this.content.scrollToTop();
  }

  ionViewWillEnter() {
    console.log("View Will Enter");
    // this.getHiScores();

  }

  itemTapped(event, topic) {
    if(topic.no > 8) {
      this.openModal(topic);
    } else {
     this.startExam(topic); 
    }
  }

  startExam(topic) {
     this.navCtrl.push(TopicDetailPage, {
      topic: topic
    });
  }

    openModal(topic) {
    let modal = this.modalCtrl.create(ExamStartingModal,topic,{'enableBackdropDismiss':true});
     modal.onDidDismiss(data => {
      console.log(data);
      if (data && data.cancel) {
        console.log('Cancel hit');
        // Modal crashing issue. Hence catch all : https://github.com/driftyco/ionic/issues/10046
         modal.dismiss().catch(() => {
        console.log("Loading dismissed");
      });;
      } else if (data && !data.cancel) {
        this.startExam(topic);
      }
   });
    modal.present();
  }



  presentAlert(msg) {
  let alert = this.alertCtrl.create({
    title: 'Yikes!',
    message: msg,
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
}


}
