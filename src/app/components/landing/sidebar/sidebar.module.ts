import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { TokenomicsModule } from '../tokenomics/tokenomics.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    TokenomicsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
