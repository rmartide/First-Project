import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
