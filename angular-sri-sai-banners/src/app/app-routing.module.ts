import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'extrapages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
