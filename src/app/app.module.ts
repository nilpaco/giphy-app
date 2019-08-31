import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './pages/dashboard/card/card.component';
import { ComponentsModule } from './core/components/components.module';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GiphyComponent } from './pages/giphy/giphy.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingComponent } from './core/components/loading/loading.component';
import { LoadingDirective } from './core/directive/loading.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GiphyComponent,
    CardComponent,
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
