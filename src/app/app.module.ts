import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Devextreme Stuff
import { DxBoxModule, DxDataGridModule, DxButtonModule, DxSelectBoxModule} from 'devextreme-angular'

//Angular Materials stuff
import { MatCardModule } from '@angular/material'

import { AppComponent } from './app.component';
import { MainRoutingModule } from './/main-routing.module';
import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //Materials stuff
    MatCardModule,




    //Devextreme stuff
    DxBoxModule,
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
    MainRoutingModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
