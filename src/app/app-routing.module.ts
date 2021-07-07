import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageComponent } from './page/page.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "page", component: PageComponent, canActivate: [AuthGuard]},
  {path: "**" /* unmatched path */, component: PageNotFoundComponent}
]; /* Note that importing and using these components in this module
automatically imports and calls these components on the app.module */

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
