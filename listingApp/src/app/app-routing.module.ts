import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PaymentsComponent } from './payments/payments.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'countries', component: CountriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
