import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnemComponent } from './enem.component';
import { SummaryModule } from './summary/summary.module';

@NgModule({
  imports: [
    CommonModule,
    SummaryModule
  ],
  declarations: [EnemComponent]
})
export class EnemModule { }
