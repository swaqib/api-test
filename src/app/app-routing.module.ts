import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'randomdog',
    loadChildren: () => import('./pages/randomdog/randomdog.module').then( m => m.RandomdogPageModule)
  },
  {
    path: 'randomjoke',
    loadChildren: () => import('./pages/randomjoke/randomjoke.module').then( m => m.RandomjokePageModule)
  },
  {
    path: 'joke',
    redirectTo: '/randomjoke',
    pathMatch: 'full'
  },
  {
    path: 'dog',
    redirectTo: '/randomdog',
    pathMatch: 'full'
  },
  {
    path: 'randomactivity',
    loadChildren: () => import('./pages/randomactivity/randomactivity.module').then( m => m.RandomactivityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
