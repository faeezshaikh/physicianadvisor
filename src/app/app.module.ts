import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { Page1 } from '../pages/page1/page1';
import { TopicsListPage } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { DataService } from '../providers/data-service';
import { ExplanationModal } from '../modals/explanationModal';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    TopicsListPage,
    Page3,
    ExplanationModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    TopicsListPage,
    Page3,
    ExplanationModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
