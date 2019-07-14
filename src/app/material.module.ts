import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatCardModule 
       } from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ]
})

export class MaterialModule { }
