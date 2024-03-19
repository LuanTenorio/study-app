import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SummaryModule } from './enem/summary/summary.module';
import { EnemModule } from './enem/enem.module';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SummaryModule,
    EnemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
