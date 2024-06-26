import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TopicsSectionComponent } from './components/topics-section/topics-section.component';
import { TopicComponent } from './components/topic/topic.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormCreateTopicComponent } from './components/form-create-topic/form-create-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideMenuComponent,
    HeaderComponent,
    HeroComponent,
    SummaryComponent,
    TopicsSectionComponent,
    TopicComponent,
    FooterComponent,
    FormCreateTopicComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
