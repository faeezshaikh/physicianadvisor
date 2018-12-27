import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contactUsPage/contactUsPage';
import { TopicsListPage } from '../pages/topicsListPage/topicsListPage';
import { TopicDetailPage } from '../pages/topicDetailPage/topicDetailPage';
import { MyDataService } from '../providers/my-data-service';
import { MyLocalStorage } from '../providers/my-local-storage';
import { ExplanationModal } from '../modals/explanationModal';
import { ExamStartingModal} from '../modals/examStartingModal';
import { IonicStorageModule } from '@ionic/storage';
import { SimpleTimer } from 'ng2-simple-timer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MySocialShareService } from '../providers/my-social-share-service';
import { VideosPage } from '../pages/videos/videos';
import { WhitepapersPage } from '../pages/whitepapers/whitepapers';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import { AuthService } from '../providers/auth.service';

export const environment = {
  firebase: {
    
  }
};


import {
  LoginPage
} from "../pages/auth/auth";
import {EventsService} from "../providers/events.service";



@NgModule({
  declarations: [
    MyApp,
    ContactUsPage,
    TopicsListPage,
    TopicDetailPage,
    ExplanationModal,
    ExamStartingModal,
    LoginPage,
    VideosPage,
    WhitepapersPage
  ],
  imports: [
    
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    HttpClientModule,
    AngularFireDatabaseModule,
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactUsPage,
    TopicsListPage,
    TopicDetailPage,
    ExplanationModal,
    ExamStartingModal,
    LoginPage,
    VideosPage,
    WhitepapersPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyDataService,
    MyLocalStorage,
    EventsService,
    SimpleTimer,
    SocialSharing,
    MySocialShareService,
    InAppBrowser,
    AuthService
    // NativeStorage
  ]
})
export class AppModule {}
