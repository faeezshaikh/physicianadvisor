import {Component} from "@angular/core";
import {NavController, NavParams, AlertController} from "ionic-angular";
import { MyDataService } from "../../providers/my-data-service";

import { TopicsListPage } from "../topicsListPage/topicsListPage";
import {EventsService} from "../../providers/events.service";
import { AuthService } from '../../providers/auth.service';






////////////// [ Login Page ] ////////////////


@Component({
  templateUrl: 'login.html'
})
export class LoginPage  {
  email:string;
  password:string;
  processingSignin = false;

  constructor(public nav:NavController,
              public navParam:NavParams,
              public alertCtrl:AlertController,
     
              public eventService:EventsService,
              public dataService: MyDataService,
              private authService:AuthService) {
    console.log("LoginComponent constructor");
    if (navParam != null && navParam.get("email") != null)
      this.email = navParam.get("email");

      // If the user is signed in, dont prompt for creds, send them to home page

      // if (true) {
        // this.dataService.getLoggedInUserEmail().then(data => {
        //   if(data!=null) {
        //   this.eventService.sendLoggedInEvent();
        //   this.nav.setRoot(TopicsListPage);
        //   }
        //    else {
        //     this.nav.setRoot(LoginPage);
        //    }
        // });
 
    

  }

  ionViewLoaded() {
    console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
  //  this.userService.isAuthenticated(this);
  }

  signMeIn() {
    console.log("in onLogin");
    this.processingSignin = true;
    console.log("processingSignin is:" , this.processingSignin);
    if (this.email == null || this.password == null) {
      this.doAlert("Error", "All fields are required");
      this.processingSignin = false;
      return;
    }
   // this.userService.authenticate(this.email, this.password, this);
    
  }

  signMeInWithGoogle(){
    this.authService.doGoogleLogin()
    .then(res => {
      console.log('Success with Google',res);
      this.dataService.setLoggedInUserEmail(res.user.email);
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(TopicsListPage);
      // this.router.navigate(['/user']);
    })
  }


  signMeInWithTwitter(){
    this.authService.doTwitterLogin()
    .then(res => {
      console.log('Success with Twitter',res);
      if(res.user.email != null )
      this.dataService.setLoggedInUserEmail(res.user.email);
      else 
      this.dataService.setLoggedInUserEmail(res.user.displayName);
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(TopicsListPage);
      // this.router.navigate(['/user']);
    })
  }

  signMeInWithGithub(){
    this.authService.doGithubLogin()
    .then(res => {
      console.log('Success with Github',res);
      if(res.user.email != null )
      this.dataService.setLoggedInUserEmail(res.user.email);
      else 
      this.dataService.setLoggedInUserEmail(res.user.displayName);
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(TopicsListPage);
      // this.router.navigate(['/user']);
    })
  }

  signMeInWithFacebook(){
    this.authService.doFacebookLogin()
    .then(res => {
      console.log('Success with Facebook',res);
      if(res.user.email != null )
      this.dataService.setLoggedInUserEmail(res.user.email);
      else 
      this.dataService.setLoggedInUserEmail(res.user.displayName);
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(TopicsListPage);
      // this.router.navigate(['/user']);
    })
  }



  cognitoCallback(message:string, result:any) {
    if (message != null) { //error
      this.doAlert("Error", message);
      console.log("result: " + message);
    } else { //success
      console.log("Redirect to TopicsListPage");
      this.nav.setRoot(TopicsListPage);
    }
    this.processingSignin = false;
      console.log("processingSignin is:" , this.processingSignin);
  }

  isLoggedInCallback(message:string, isLoggedIn:boolean) {
    console.log("The user is logged in: " + isLoggedIn);
    if (isLoggedIn) {
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(TopicsListPage);
    }
  }

 

  doAlert(title:string, message:string) {

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}




