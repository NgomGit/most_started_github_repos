import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubMockupsItemComponent } from './shared/components/github-mockups-item/github-mockups-item.component';
import { GithubMockupsListComponent } from './modules/home/components/github-mockups-list/github-mockups-list.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CustomSpinnerComponent } from './shared/components/custom-spinner/custom-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GithubMockupsItemComponent,
    GithubMockupsListComponent,
    CustomSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
