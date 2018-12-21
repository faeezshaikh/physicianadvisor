import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contactUsPage/contactUsPage';
import { TopicsListPage } from '../pages/topicsListPage/topicsListPage';
import { VideosPage } from '../pages/videos/videos';
import {WhitepapersPage } from '../pages/whitepapers/whitepapers';

import {LoginPage} from "../pages/auth/auth";

import {MyDataService} from '../providers/my-data-service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TopicsListPage;
  pages: Array<{title: string, component: any, icon: string}>;
  loggedInUserEmail: string;

  public loginPage = LoginPage;
  // public logoutPage = LogoutPage;
  
  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public events:Events,
              public menu:MenuController,
              public dataService: MyDataService) {
    this.initializeApp();

    this.pages = [
      { title: 'Practice Exams', component: TopicsListPage, icon: 'list' },
      { title: 'Video Resources', component: VideosPage, icon: 'logo-youtube' },
      { title: 'Other Resources', component: WhitepapersPage, icon: 'folder' },
      { title: 'Contact Us', component: ContactUsPage, icon: 'people' },
      { title: 'Logout', component: '', icon: 'log-out' }
    ];


  }


  logout() {
    console.log("Publishing logout event");
    // localStorage.removeItem('r'); 
    this.dataService.deleteFromStorage("email");
    this.events.publish('user:logout');
  
  }
  initializeApp() {
    console.log('insside intiApp');
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.loggedInUserEmail = this.dataService.getLoggedInUserEmail() ;
      if(this.loggedInUserEmail) {
        // this.rootPage = TopicsListPage;
        this.nav.setRoot(TopicsListPage);
        this.enableMenu(true);
      } else {
        this.rootPage = this.loginPage;
      }

      this.listenToLoginEvents();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.title == 'Logout') {
      this.logout();
      return;
    }
    this.nav.setRoot(page.component);
    // this.nav.setRoot(page);
  }

    openPage2(page) {
        this.nav.setRoot(page);
        this.menu.close();
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
    this.loggedInUserEmail = this.dataService.getLoggedInUserEmail() ;
    this.enableMenu(true);
    });


    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
      // this.nav.pop();
      this.nav.setRoot(LoginPage);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
