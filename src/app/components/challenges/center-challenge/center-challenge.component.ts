import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from 'src/app/services/upload-service.service';

@Component({
  selector: 'app-center-challenge',
  templateUrl: './center-challenge.component.html',
  styleUrls: ['./center-challenge.component.scss'],
  providers: [UploadServiceService]
})
export class CenterChallengeComponent implements OnInit {
  currentFile?: File;

  selectedFiles?: FileList;
  constructor(private _uploadService: UploadServiceService) { }
  ngOnInit(): void {
  }

  selectFile(event:any){
    this.selectedFiles= event.target.files
  }

  upload():void{
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      
      if (file) {
        this.currentFile = file;
        this._uploadService.upload(this.currentFile, "http://localhost:3000/api/upload").subscribe(data=>{
           
          alert("bonjour")
        },
        error=>{
          console.log(error)
        }
        );
           
        }
      }
      
      this.selectedFiles = undefined;
    }
}
