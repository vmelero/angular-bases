import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterModule } from './counter/components/counter.module';
import { HeroesModule   } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    HeroesModule,    
    DbzModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
