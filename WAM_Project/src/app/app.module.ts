import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PluginContentComponent } from './components/plugin-content/plugin-content.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { OAuthModule } from 'angular-oauth2-oidc';
import {MatIconModule  } from "@angular/material/icon";
import {MatCardModule } from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { SignUpComponent } from './AuthComponent/sign-up/sign-up.component';
import { DeleteAccountComponent } from './AuthComponent/delete-account/delete-account.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PluginContentComponent,
    HomeComponent,
    LoginComponent,
    AuthComponentComponent,
    SignUpComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule, 
    FormsModule, 
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
