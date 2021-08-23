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
    path: 'setting',
    loadChildren: () => import('./homepages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./homepages/draft/draft.module').then( m => m.DraftPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./homepages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'invitation',
    loadChildren: () => import('./invitationPages/invitation/invitation.module').then( m => m.InvitationPageModule)
  },
  {
    path: 'empty-invitation',
    loadChildren: () => import('./invitationPages/empty-invitation/empty-invitation.module').then( m => m.EmptyInvitationPageModule)
  },
  {
    path: 'written-invitation',
    loadChildren: () => import('./invitationPages/written-invitation/written-invitation.module').then( m => m.WrittenInvitationPageModule)
  },
  {
    path: 'congratulate',
    loadChildren: () => import('./congratulatePages/congratulate/congratulate.module').then( m => m.CongratulatePageModule)
  },
  {
    path: 'written-congratulate',
    loadChildren: () => import('./congratulatePages/written-congratulate/written-congratulate.module').then( m => m.WrittenCongratulatePageModule)
  },
  {
    path: 'empty-congratulate',
    loadChildren: () => import('./congratulatePages/empty-congratulate/empty-congratulate.module').then( m => m.EmptyCongratulatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
