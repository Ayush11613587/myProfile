import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { SafePipe } from './pipe/safe-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeatureComponent,
    HistoryComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path :'', component: HomeComponent},
      {path :'contact', component: ContactComponent},  
      {path :'about', component: AboutComponent}, 
      {path :'history', component: HistoryComponent}, 
      {path :'feature', component: FeatureComponent},
      {path :'**', component: HomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
