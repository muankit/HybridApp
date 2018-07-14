import { Component ,ViewChild, OnInit, Renderer} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home-faculty/home';
import { ImagePicker } from '@ionic-native/image-picker';
import { CameraOptions , Camera} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-faculty-form',
  templateUrl: 'faculty-form.html',
})
export class FacultyFormPage implements OnInit{

  path : String;

  accordionExapanded = false;
  @ViewChild("qualCardCon") QualCardContent: any;
  @ViewChild("expCardCon") expSchCardContent : any;
  @ViewChild("expInsCardCon") expInsCardContent : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              public renderer : Renderer , 
              public alertCtrl : AlertController,
              public platform : Platform,
              public actionsheetCtrl : ActionSheetController,
              public picker : ImagePicker,
              public camera : Camera) {
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
    this.navCtrl.setRoot(HomePage).then(()=>{
      let index = this.navCtrl.length()-2;
      this.navCtrl.remove(index);
    });
  }
  addImg(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: 'md-camera',
          handler: () => {
            this.takeCameraPicture();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'md-images',
          handler: () => {
            this.takeGalleryPhoto();
          }
        },
      ]
    });
    actionSheet.present();
  }

  // choose photo from gallery
  takeGalleryPhoto(){
    let option =  {
      title : " Select picture ",
      message : "Select one picture",
      maximumImagesCount : 1,
      outType : 0 // 0-path , 1-base64
    };
    this.picker.getPictures(option).then(result => {
      for(var i =0; i<result.length; ++i){
        this.path = result[i];
        alert("Gallery Path :" + result[i]);
      } 
    },err => {
      alert("error : " + err);
    })
  }
  //ends here

  //camera function is here
  takeCameraPicture(){
    let option : CameraOptions = {
      quality : 100 ,
      destinationType : this.camera.DestinationType.FILE_URI,
      encodingType : this.camera.EncodingType.PNG,
      mediaType : this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(option).then(uri => {
      this.path = uri;
      alert("Camera URI : " + uri);
    },err => {
      alert("error : " + err);
    });
  }
}


