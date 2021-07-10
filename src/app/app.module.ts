import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './section-thirteen/home/home.component';
// import { SectionFiveComponent } from './section-five/section-five.component';
// import { CockpitComponent } from './section-five/cockpit/cockpit.component';
// import { ServerElementComponent } from './section-five/server-element/server-element.component';
// import { FormsModule } from '@angular/forms';
// import { SectionSevenComponent } from './section-seven/section-seven.component';
// import { BasicHighlightDirective } from './section-seven/basic-highlight/basic-highligt-directive';
// import { BetteHighlightDirective } from './section-seven/basic-highlight/bette-highlight.directive';
// import { SectionNineComponent } from './section-nine/section-nine.component';
// import { AccountComponent } from './section-nine/account/account.component';
// import { NewAccountComponent } from './section-nine/new-account/new-account.component';
// import { SectionElevenComponent } from './section-eleven/section-eleven.component';
// import { HomeComponent } from './section-eleven/home/home.component';
// import { EditServerComponent } from './section-eleven/servers/edit-server/edit-server.component';
// import { ServerComponent } from './section-eleven/servers/server/server.component';
// import { ServersComponent } from './section-eleven/servers/servers.component';
// import { UserComponent } from './section-eleven/users/user/user.component';
// import { UsersComponent } from './section-eleven/users/users.component';
// import { ServersService } from './section-eleven/servers/servers.service';
// import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './section-eleven/page-not-found/page-not-found.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AuthService } from './auth.service';
// import { AuthGuard } from './auth-guard.service';
// import { CanDeactivateGuard } from './section-eleven/servers/edit-server/can-deactivate-guard.service';
// import { ErrorPageComponent } from './section-eleven/error-page/error-page.component';
// import { ServerResolver } from './section-eleven/servers/server/server-resolver.service';
import { SectionThirteenComponent } from './section-thirteen/section-thirteen.component';
import { UserComponent } from './section-thirteen/user/user.component';
    // SectionFiveComponent,
    // CockpitComponent,
    // ServerElementComponent,
    // SectionSevenComponent,
    // BasicHighlightDirective,
    // BetteHighlightDirective,
    // SectionNineComponent,
    // AccountComponent,
    // NewAccountComponent,
    // SectionElevenComponent,
    // HomeComponent,
    // UsersComponent,
    // ServersComponent,
    // UserComponent,
    // EditServerComponent,
    // ServerComponent,
    // PageNotFoundComponent,
    // ErrorPageComponent,

@NgModule({
  declarations: [
    AppComponent,
    SectionThirteenComponent,
    HomeComponent,
    UserComponent
  ],
  // AppRoutingModule
  imports: [BrowserModule, FormsModule,AppRoutingModule ],
  // providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
