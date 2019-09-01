import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GiphiesResolver } from './core/resolvers/giphies.resolver';
import { GiphyComponent } from './pages/giphy/giphy.component';
import { GiphyResolver } from './core/resolvers/giphy.resolver';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { giphy: GiphiesResolver }
  },
  {
    path: 'gifs/:giphyId',
    component: GiphyComponent,
    resolve: { giphy: GiphyResolver }
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
