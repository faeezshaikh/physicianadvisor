import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Platform,ToastController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class MySocialShareService {

  constructor(public http: HttpClient,private socialSharing: SocialSharing,public platform   : Platform,public toastCtrl: ToastController) {
    console.log('Hello MyLocalStorage Provider');
  }

   /////// [Social Sharing ] ///////

  // http://masteringionic.com/blog/2016-12-27-implementing-social-media-sharing-in-ionic-applications/?s=2016-12-27-implementing-social-media-sharing-in-ionic-2-applications/

   public sendTo   : any;
   public subject  : string = 'AWS Certified Sol. Arch - Professional';
   public shareMsg  : string = "I thought you'd find this app useful for preparing for the AWS Certified Solution Architect - Professional Exam. Check out this app in app store. ";
   public image     : string   = "assets/img/EC2.png";
   public fbUrl      : string   ="https://www.facebook.com/awsarchitect";
   public twitterMsg: string = "Check out the AWS Sol Arch Professional Exam App"


 presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }


  shareViaFacebook() {
    console.log('In Share Via Facebook');
    this.socialSharing.shareViaFacebook(this.shareMsg, this.image, this.fbUrl).then(() => {
            // Success!
            console.log("Successfully shared via Facebook");
          },(rejected)=> {
              // Error!
            let msg = 'Sharing via Facebook.. If the Facebook app does not open, check if you have the latest version installed.';
            console.log(msg + " : "+ rejected);
            this.presentToast(msg);
          }).catch(() => {
           console.log('ERROR! Was not shared via Facebook');
          });;
  }

  


  shareViaTwitter() {
    console.log('In Share Via Twitter');
     this.socialSharing.shareViaTwitter(this.twitterMsg , "assets/img/EC2.png", this.fbUrl).then(() => {
            // Success!
            console.log("Successfully shared via Twitter");
          },(rejected)=>{
            // Error!
            let msg = 'Sharing via Twitter.. If the Twitter app does not open, check if you have the latest version installed.';
            console.log(msg + " : "+ rejected);
            this.presentToast(msg);
          }).catch(() => {
             console.log('ERROR! Was not shared via Twitter');
          });
  }




  shareViaWhatsapp() {
    console.log('In Share Via WhatsApp');
    this.socialSharing.shareViaWhatsApp(this.shareMsg,  "assets/img/EC2.png", this.fbUrl).then(() => {
            // Success!
          },(rejected)=> {
            // Error!
            let msg = 'Sharing via WhatsApp.. If the WhatsApp app does not open, check if you have the latest version installed.';
            console.log(msg + " : "+ rejected);
            this.presentToast(msg);
          }).catch(() => {
              console.log('ERROR! Was not shared via WhatsApp');
          });
  }


   shareViaInstagram()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.shareViaInstagram(this.shareMsg, this.image)
         .then((data) =>
         {
            console.log('Shared via shareViaInstagram');
         },(rejected)=> {
             let msg = 'Sharing via Instagram.. If the Instagram app does not open, check if you have the latest version installed.';
            console.log(msg + " : "+ rejected);
            this.presentToast(msg);
         })
         .catch((err) =>
         {
             // Error!
            console.log('ERROR! Was not shared via Instagram');
         });

      });
   }



   regularShare()
   {
      this.platform.ready()
      .then(() =>{
           this.socialSharing.share(this.shareMsg, this.subject, this.image, this.fbUrl).then((data) => {
              console.log('Successfully shared via SharePicker');
           },(rejected) => {
              let msg = 'Opening slideshare.. If the slideshare does not open please retry later.';
              console.log(msg + " : "+ rejected);
              this.presentToast(msg);
           }).catch((err) => {
            console.log('ERROR! Was not shared via SharePicker');
         });

      });
   }




  shareViaSMS() {
    console.log('In Share via SMS');
    this.socialSharing.shareViaSMS(this.shareMsg + " - " + this.fbUrl, "").then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via SMS not possible. Check if you have the appropriate app installed.';
            console.log(msg);
            this.presentToast(msg);
          });
  }

   shareViaMail() {
    console.log('In Share Via Email');
    
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
       // Share via email
          this.socialSharing.shareViaEmail(this.shareMsg + ' ' + this.fbUrl, 'AWS Sol. Arch Professional', ['']).then(() => {
            // Success!
          }).catch(() => {
            // Error!
            let msg = 'Sharing via email was possible but there was some issue.';
            console.log(msg);
            this.presentToast(msg);
          });
    }).catch(() => {
      // Sharing via email is not possible
      let msg = 'Sharing via email not possible. Check if you have the appropriate app to share via email installed.';
      console.log(msg);
      this.presentToast(msg);
      
    });
  }

}
