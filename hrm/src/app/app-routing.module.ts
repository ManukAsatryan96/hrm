import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 // {path: '', component: WelcomePageComponent},
  {path: '',  loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {path: 'test', loadChildren: () => import('./modules/staff-testing-module/staff-testing.module').then(m => m.StaffTestingModuleModule) },
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
