import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { AuthenticationComponent } from './components/header/authentication/authentication.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BorderHighlightDirective } from './directives/border-highlight/border-highlight.directive';

import { SortingPipe } from './pipe/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SortingComponent,
    AuthenticationComponent,
    SearchResultsComponent,
    SearchItemComponent,
    BorderHighlightDirective,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
