// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './auth-guard.service';
// import { ErrorPageComponent } from './section-eleven/error-page/error-page.component';
// import { HomeComponent } from './section-eleven/home/home.component';
// import { CanDeactivateGuard } from './section-eleven/servers/edit-server/can-deactivate-guard.service';
// import { EditServerComponent } from './section-eleven/servers/edit-server/edit-server.component';
// import { ServerResolver } from './section-eleven/servers/server/server-resolver.service';
// import { ServerComponent } from './section-eleven/servers/server/server.component';
// import { ServersComponent } from './section-eleven/servers/servers.component';
// import { UserComponent } from './section-eleven/users/user/user.component';
// import { UsersComponent } from './section-eleven/users/users.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent }
//   ] },
//   {
//     path: 'servers',
//     // canActivate: [AuthGuard],
//     canActivateChild: [AuthGuard],
//     component: ServersComponent,
//     children: [
//     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
//     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//   ] },
//   // { path: 'not-found', component: PageNotFoundComponent },
//   { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
//   { path: '**', redirectTo: '/not-found' }
// ];

// @NgModule({
//   imports: [
//     // RouterModule.forRoot(appRoutes, {useHash: true})
//     RouterModule.forRoot(appRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {

// }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './section-thirteen/home/home.component';
import { UserComponent } from './section-thirteen/user/user.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
