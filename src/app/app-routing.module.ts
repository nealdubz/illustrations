import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { IllustrationsComponent } from './components/illustrations/illustrations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path:'title/:id',
    component: IllustrationsComponent
  },
  {
    path:'title/:id/illustration/:iId',
    component: IllustrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
