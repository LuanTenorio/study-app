import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemComponent } from './enem/enem.component';

const routes: Routes = [
  { path: "enem", component: EnemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
