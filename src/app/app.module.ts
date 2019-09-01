import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './pages/dashboard/card/card.component';
import { ComponentsModule } from './core/components/components.module';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GiphyComponent } from './pages/giphy/giphy.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GiphyComponent,
    CardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ComponentsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
