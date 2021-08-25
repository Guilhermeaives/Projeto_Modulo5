import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { NoLoguinGuardGuard } from './guards/no-loguin-guard.guard';





const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'doces',
    loadChildren: () => import('./pages/doces/doces.module').then( m => m.DocesPageModule), 
  },
  {
    path: 'salgados',
    loadChildren: () => import('./pages/slagados/slagados.module').then( m => m.SlagadosPageModule), 
  },
  {
    path: 'bolos',
    loadChildren: () => import('./pages/bolos/bolos.module').then( m => m.BolosPageModule), 
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule), 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), 
  },
  {
    path: 'produtos/:id',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  } 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
