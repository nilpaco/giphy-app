import { CustomSerializer, routerInitialState } from './store/layout/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from './store';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GiphyEffects } from './store/entity/giphy/giphy.effects';
import { GiphyResolversModule } from './resolvers/giphy-resolver.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    GiphyResolversModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: {
        router: routerInitialState
      },
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([GiphyEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // Connects router state to the store
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PreActivation
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
