import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarsComponent } from './pages/guitars/guitars.component';

const routes: Routes = [
  { path: '', component: GuitarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
