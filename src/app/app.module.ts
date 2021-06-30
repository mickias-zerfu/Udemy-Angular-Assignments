import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { CockpitComponent } from './section-five/cockpit/cockpit.component';
import { ServerElementComponent } from './section-five/server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { SectionSevenComponent } from './section-seven/section-seven.component';
import { BasicHighlightDirective } from './section-seven/basic-highlight/basic-highligt-directive';
import { BetteHighlightDirective } from './section-seven/basic-highlight/bette-highlight.directive';
import { SectionNineComponent } from './section-nine/section-nine.component';
import { AccountComponent } from './section-nine/account/account.component';
import { NewAccountComponent } from './section-nine/new-account/new-account.component';
import { SectionElevenComponent } from './section-eleven/section-eleven.component';
import { HomeComponent } from './section-eleven/home/home.component';
import { EditServerComponent } from './section-eleven/servers/edit-server/edit-server.component';
import { ServerComponent } from './section-eleven/servers/server/server.component';
import { ServersComponent } from './section-eleven/servers/servers.component';
import { UserComponent } from './section-eleven/users/user/user.component';
import { UsersComponent } from './section-eleven/users/users.component';
import { ServersService } from './section-eleven/servers/servers.service';
import { Routes, RouterModule } from '@angular/router';

  const appRoutes : Routes=[
    {path:'', component: HomeComponent},
    {path:'users', component: UsersComponent},
    {path:'users/:id/:name', component: UserComponent},
    {path:'servers', component: ServersComponent},
    {path: 'servers/:id', component: ServerComponent},
    {path: 'servers/:id/edit', component: EditServerComponent},
  ]
@NgModule({
  declarations: [
    AppComponent,
    SectionFiveComponent,
    CockpitComponent,
    ServerElementComponent,
    SectionSevenComponent,
    BasicHighlightDirective,
    BetteHighlightDirective,
    SectionNineComponent,
    AccountComponent,
    NewAccountComponent,
    SectionElevenComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
