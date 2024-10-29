import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from '@shared/components';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { AdminGuard } from '@app/user/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/components/login-form/login-form.module').then(m => m.LoginFormModule),
    canLoad: [NotAuthorizedGuard],
  },
  {
    path: 'registration',
    loadChildren: () => import('./shared/components/registration-form/registration-form.module').then(m => m.RegistrationFormModule),
    canLoad: [NotAuthorizedGuard],
  },
  {
    path: 'courses',
    canLoad: [AuthorizedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'add',
        component: CourseFormComponent,
        canActivate: [AdminGuard],
      },
      {
        path: ':id',
        component: CourseInfoComponent,
      },
      {
        path: 'edit/:id',
        component: CourseFormComponent,
        canActivate: [AdminGuard],
      }
    ]
  },
  { path: '**', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
