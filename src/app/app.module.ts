import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAuthorizationModule, AuthorizationConfiguration, AuthorizationService, RouteGuard } from 'ngx-authorization';

const authConfig = new AuthorizationConfiguration();
authConfig.secure("/profile", ['admin']);
authConfig.secure('/dashboard/sub', ['lolo']);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAuthorizationModule
  ],
  providers: [
    { provide: 'role', useValue: 'admin'},
    { provide: 'permissions', useValue: ['p1', 'p2']},
    { provide: 'authConfig', useValue: authConfig },
    { provide: 'authService', useClass: AuthorizationService },
    RouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
