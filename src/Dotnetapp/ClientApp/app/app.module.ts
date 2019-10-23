import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DotnetappSharedModule } from 'app/shared/shared.module';
import { DotnetappCoreModule } from 'app/core/core.module';
import { DotnetappAppRoutingModule } from './app-routing.module';
import { DotnetappHomeModule } from './home/home.module';
import { DotnetappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DotnetappSharedModule,
    DotnetappCoreModule,
    DotnetappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DotnetappEntityModule,
    DotnetappAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class DotnetappAppModule {}
