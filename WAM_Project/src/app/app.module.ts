import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';

import { FormsModule } from '@angular/forms'; 

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {LoginComponent} from './AuthComponent/login/login.component';
import {DeleteAccountComponent} from './AuthComponent/delete-account/delete-account.component';
import {SignUpComponent} from './AuthComponent/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms'; 

const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'delete-account', component: DeleteAccountComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'home'}

];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LoginComponent,
    DeleteAccountComponent,
    SignUpComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule.forRoot(routes), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
