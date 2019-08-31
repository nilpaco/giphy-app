import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GiphyComponent } from './pages/giphy/giphy.component';
import { GiphyResolver } from './core/resolvers/giphy.resolver';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { giphy: GiphyResolver }
  },
  {
    path: 'gifs/:giphyId',
    component: GiphyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
