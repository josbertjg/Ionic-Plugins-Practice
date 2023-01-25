import { Component, OnInit } from '@angular/core';
//PLUGINS
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Camera,CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';

@Component({
  selector: 'app-foto-historias',
  templateUrl: './foto-historias.page.html',
  styleUrls: ['./foto-historias.page.scss'],
})
export class FotoHistoriasPage implements OnInit {

  constructor(private storage:NativeStorage,private camera:Camera,private dialog:Dialogs) { }

  img!:any;

  ngOnInit() {
  }

  tomarFoto(){
    const options:CameraOptions={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true
    };
    this.camera.getPicture(options)
    .then((imgData)=>{
      this.img='data:image/jpeg; base64,'+imgData
      this.dialog.alert("Tu imagen se guardo en tu dispositivo");
    })
    .catch((error)=>console.log("ocurrio un error: "+error))
  }

}

