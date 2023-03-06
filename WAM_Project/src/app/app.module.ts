// import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PluginListComponent } from './plugin-list/plugin-list.component';
import { AddPluginComponent } from './add-plugin/add-plugin.component';
import { PluginDetailComponent } from './plugin-detail/plugin-detail.component';

const routes:Routes = [
  {path: 'login', component:  LoginComponent},
  {path: 'user', component:  UserProfileComponent},
  {path: 'plugins', component:  PluginListComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    PluginListComponent,
    AddPluginComponent,
    PluginDetailComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
