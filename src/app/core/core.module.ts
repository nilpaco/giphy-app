import { metaReducers, reducers } from './store';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })

  ]
})
export class CoreModule { }
