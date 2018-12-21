import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-whitepapers',
  templateUrl: 'whitepapers.html'
})
export class WhitepapersPage {

  whitepapers: Array<{ no: number, title: string, note: string,logo:string,icon:string,link:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.whitepapers = [{no:1,title:"Overview of Amazon Web Services",logo:"assets/img/pdf-icon.ico",note:"sdfsdfsd",icon:"md-download",link:"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"},
    {no:2,title:"Architecting for the Cloud: AWS Best Practices",logo:"assets/img/pdf-icon.ico",icon:"md-download",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"},
    {no:3,title:"How AWS Pricing Works",note:"sdfsdfsd",logo:"assets/img/pdf-icon.ico",icon:"md-download",link:"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"},
    {no:4,title:"The Total Cost of (Non) Ownership of Web Applications in the Cloud",logo:"assets/img/pdf-icon.ico",note:"sdfsdfsd",icon:"md-download",link:"https://d1.awsstatic.com/whitepapers/aws-tco-web-applications.pdf"},
    {no:5,title:"Compare AWS Support Plans",note:"sdfsdfsd",icon:"paper-plane",logo:"assets/img/html.png",link:"https://aws.amazon.com/premiumsupport/compare-plans/"},
    {no:6,title:"Official Exam Guide",logo:"assets/img/pdf-icon.ico",note:"sdfsdfsd",icon:"md-download",link:"https://d1.awsstatic.com/training-and-certification/Docs%20-%20Cloud%20Practitioner/AWS%20Certified%20Cloud%20Practitioner_Exam_Guide_v1.4_FINAL.PDF"},];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhitepapersPage');
  }

openLink(e,link) {
    	window.open(link, '_system', 'location=yes');
			return false;
  }

}
