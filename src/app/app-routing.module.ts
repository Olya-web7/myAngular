import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
