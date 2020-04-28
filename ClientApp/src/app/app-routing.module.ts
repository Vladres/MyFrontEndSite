import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContentPageComponent } from './content-page/content-page.component';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'about', component : AboutComponent },
  {path : 'content', component : ContentPageComponent },
  {path: '**', redirectTo: '/', pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
