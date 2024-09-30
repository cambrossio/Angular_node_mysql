import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent  // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    // Otros módulos si es necesario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
