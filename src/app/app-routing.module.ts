import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemComponent } from './enem/enem.component';
import { SummaryComponent } from './enem/summary/summary.component';

const routes: Routes = [
  { path: "enem", component: EnemComponent},
  { path: "english", component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
