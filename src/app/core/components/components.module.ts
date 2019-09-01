import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
    ]
})
export class ComponentsModule { }
