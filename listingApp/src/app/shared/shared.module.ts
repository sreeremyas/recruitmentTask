import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { CheckboxlistComponent } from './checkboxlist/checkboxlist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { SearchPipe } from './pipes/search.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { MatCardWithCheckboxListComponent } from './mat-card-with-checkbox-list/mat-card-with-checkbox-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [

    CheckboxlistComponent,
     SearchPipe,
     CamelCasePipe,
     MatCardWithCheckboxListComponent,
     LoaderComponent,
   
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatProgressSpinnerModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgFor,
    MatCardModule,
    MatIconModule,
    MatButtonModule,MatListModule
  ],
  exports:[
    CheckboxlistComponent,
    LoaderComponent,
    MatCardWithCheckboxListComponent

  ]
})
export class SharedModule { }
