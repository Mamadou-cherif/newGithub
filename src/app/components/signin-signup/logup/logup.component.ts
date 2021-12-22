import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.scss']
})
export class LogupComponent implements OnInit {
public user: User;
  constructor(private _router: Router, private _http: HttpClient, private userService: UserService) { 
    this.user= new User("", "", "","")

  }

  ngOnInit(): void {
  }

  public onSubmit(loginValue:NgForm){

    this.userService.logup(loginValue).subscribe()

  }

}
