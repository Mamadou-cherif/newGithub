import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "../../../../models/user"
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public user: User;
 public identity: any
  constructor(private userService: UserService, private _router: Router) {
    this.user= new User("","","","");
   }

  ngOnInit(): void {
    this.userService.getIdentity()
    
  }

    public verifIdentity(){
     const identifiant= this.userService.getIdentity();
     if(identifiant==null){
       this._router.navigateByUrl("/login");

     }
     else{
       this._router.navigateByUrl("/home")
     }
    }
  onSubmit(loginFrom: NgForm){
    this.userService.login(loginFrom.value);
      
  }
}
