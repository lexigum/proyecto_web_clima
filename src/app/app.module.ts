import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }    from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LugarComponent }  from './lugar/lugar.component';
import { PronosticoComponent } from './pronostico/pronostico.component';

@NgModule({
  declarations: [
    AppComponent,
    LugarComponent,
    PronosticoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
