import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatadashComponent } from './components/datadash/datadash.component';
import { AddMembersComponent } from './components/add-members/add-members.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersInComponent } from './components/members-in/members-in.component';

import { MembersService } from './services/members.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatadashComponent,
    AddMembersComponent,
    DashboardComponent,
    MembersInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
