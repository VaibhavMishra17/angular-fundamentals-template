import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationFormModule } from '@shared/components/registration-form/registration-form.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from '@app/app.component';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { CoursesModule } from '@features/courses/courses.module';
import { CoursesService } from '@app/services/courses.service';
import { LoginFormModule } from '@shared/components/login-form/login-form.module';
import { AuthModule } from '@app/auth/auth.module';
import { UserModule } from '@app/user/user.module';
import { TokenInterceptor } from '@app/auth/interceptors/token.interceptor';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from '@app/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginFormModule,
    RegistrationFormModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    UserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    AuthorizedGuard,
    NotAuthorizedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    CoursesService,
    CoursesStoreService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
