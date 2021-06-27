import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { CockpitComponent } from './section-five/cockpit/cockpit.component';
import { ServerElementComponent } from './section-five/server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { SectionSevenComponent } from './section-seven/section-seven.component';
import { BasicHighlightDirective } from './section-seven/basic-highlight/basic-highligt-directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionFiveComponent,
    CockpitComponent,
    ServerElementComponent,
    SectionSevenComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
