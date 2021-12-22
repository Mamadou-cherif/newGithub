import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/signin-signup/login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { LogupComponent } from './components/signin-signup/logup/logup.component';
import { HomeComponent } from './components/home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { LeftComponent } from './components/home/left/left.component';
import { CenterComponent } from './components/home/center/center.component';
import { DroiteComponent } from './components/home/droite/droite.component';
import { FriendsComponent } from './components/add-friends/friends/friends.component';
import { AddChallengeComponent } from './components/challenges/add-challenge/add-challenge.component';
import { IdentityChallengeComponent } from './components/challenges/identity-challenge/identity-challenge.component';
import { ViewChallengeComponent } from './components/challenges/view-challenge/view-challenge.component';
import { ResultsComponent } from './components/live-results/results/results.component';
import { CenterChallengeComponent } from './components/challenges/center-challenge/center-challenge.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogupComponent,
    HomeComponent,
    LeftComponent,
    CenterComponent,
    DroiteComponent,
    FriendsComponent,
    AddChallengeComponent,
    IdentityChallengeComponent,
    ViewChallengeComponent,
    ResultsComponent,
    CenterChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
