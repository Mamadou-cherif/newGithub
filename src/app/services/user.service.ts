import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, Operator } from 'rxjs';
import { observable } from 'rxjs';
import { User } from 'src/models/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 public user: any;
 public token: any
  constructor(private _http: HttpClient) { }

  // Connection d'un utilisateur

  public login(user: any){
    let header= new HttpHeaders()
      header.set("Authorzation", this.token)
    let params= JSON.stringify(user) 
    return this._http.post<any>("", params)
       .subscribe(data=>{
          this.user= data
          
          localStorage.setItem("identity", this.user)         

         },
         (error)=>{
           console.log(error)
         })
      
  }
  // fonction pour enregistrer un nouveau utilisateur

  public logup(user: any): Observable<any>{
     const params= JSON.stringify(user)
   return this._http.post("", params);
  }

  public getIdentity(){
    const user= localStorage.getItem("identity");
    if(!user){
      return null;
    }

      JSON.parse(user);
    return user;
  }

  public getToken(token: any){
   
   token= localStorage.getItem("token")
    // Si il n'y a aucun token, c'est à dire que l'utilisateur est deconnecté
    if(!token){
     return this._http.get<any>("the link will be put here")
        .subscribe(data=>{
          this.token= data._id
          localStorage.setItem("token", this.token)
        })
    }
    else{
      return token

    }
    
  }
}
