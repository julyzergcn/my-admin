import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { LayoutComponent } from './layout/layout.component';
import { AuthGardService } from './auth-gard.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            key: 'auth_token'
          },
          baseEndpoint: '/api/auth',
          login: {
            endpoint: '/token/login/',
          },
          register: {
            endpoint: '/users/',
          },
          logout: {
            endpoint: '/token/logout/',
            method: 'post',
          },
        }),
      ],
      forms: {},
    }),
  ],
  providers: [
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
