import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent,HttpRequest, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }

  

  upload(file:File, url: string): Observable<HttpEvent<any>>{
      const formData= new FormData();

      formData.append('file', file)
      formData.set("Content-Type", "multipart/form-data")

      const req= new HttpRequest('POST',url, formData,{
        reportProgress: false
      })
    return this._http.request(req)
  }
}
