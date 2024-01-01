import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path:'heroes',
      loadChildren: () => import('./heroes/heroes.module').then((m) => m.HeroesModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
