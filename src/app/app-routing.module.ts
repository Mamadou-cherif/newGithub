import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './components/add-friends/friends/friends.component';
import { AddChallengeComponent } from './components/challenges/add-challenge/add-challenge.component';
import { IdentityChallengeComponent } from './components/challenges/identity-challenge/identity-challenge.component';
import { ViewChallengeComponent } from './components/challenges/view-challenge/view-challenge.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/live-results/results/results.component';

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'add-friends', component: FriendsComponent},
    {path: 'identity-challenge', component:IdentityChallengeComponent},
    {path: 'chooseImage', component: AddChallengeComponent},
    {path: 'view-challenge', component: ViewChallengeComponent},
    {path: 'live-results', component: ResultsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }