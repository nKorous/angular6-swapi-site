import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import notify from 'devextreme/ui/notify'
import { DxButtonModule, DxSelectBoxModule, DxBoxModule } from 'devextreme-angular';
import { GetapiService } from './getapi.service'

import { MatCardModule } from '@angular/material/card'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,  
    HttpClientModule,
    BrowserAnimationsModule, 

    //DxModules
    DxButtonModule,
    DxSelectBoxModule,
    DxBoxModule,

    //Angular Material
    MatCardModule
    ],
  declarations: [ AppComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [GetapiService]
})
export class AppModule { }
