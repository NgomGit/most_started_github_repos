import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubMockupsItemComponent } from './modules/home/components/github-mockups-item/github-mockups-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    GithubMockupsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
