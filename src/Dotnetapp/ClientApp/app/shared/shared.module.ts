import { NgModule } from '@angular/core';
import { DotnetappSharedLibsModule } from './shared-libs.module';
import { JhiAlertComponent } from './alert/alert.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';
import { JhiLoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [DotnetappSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent, JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DotnetappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent, JhiLoginModalComponent, HasAnyAuthorityDirective]
})
export class DotnetappSharedModule {}
