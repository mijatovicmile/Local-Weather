import { NgModule } from '@angular/core';
import { MatButtonModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatCardModule 
       } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ]
})

export class MaterialModule { }
