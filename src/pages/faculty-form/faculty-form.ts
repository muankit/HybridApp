import { Component ,ViewChild, OnInit, Renderer, Input} from '@angular/core';
import { IonicPage, NavController, NavParams, CardContent, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-faculty-form',
  templateUrl: 'faculty-form.html',
})
export class FacultyFormPage implements OnInit{

  accordionExapanded = false;
  @ViewChild("qualCardCon") QualCardContent: any;
  @ViewChild("expCardCon") expSchCardContent : any;
  @ViewChild("expInsCardCon") expInsCardContent : any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public renderer : Renderer , public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyFormPage');
  }

  ngOnInit() {
    console.log(this.QualCardContent.nativeElement);
    this.renderer.setElementStyle(this.QualCardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    this.renderer.setElementStyle(this.expSchCardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    this.renderer.setElementStyle(this.expInsCardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  //Qualification accordian toggle function is here
  QualtoggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.QualCardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.QualCardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.QualCardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.QualCardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
  }
  
  //Experience School accordian toggle function is here
  ExpSchtoggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.expSchCardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.expSchCardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.expSchCardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.expSchCardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
  }

  //Experience institute accordian toggle function is here
  ExpInstoggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.expInsCardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.expInsCardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.expInsCardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.expInsCardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
  }

  nextBtnClick(){
    this.navCtrl.push(HomePage);
  }
  addImg(){
    const alert = this.alertCtrl.create({
        title : "Gallery Intent",
        buttons : [
          {
            text: 'Add Image'
          }
        ]
         
      });
      alert.present();
    }
}


