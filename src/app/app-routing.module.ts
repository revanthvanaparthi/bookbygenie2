import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BollywoodComponent } from "./bollywood/bollywood.component";
import { HollywoodComponent } from "./hollywood/hollywood.component";
import { SignupComponent } from "./signup/signup.component";
import { TollywoodComponent } from "./tollywood/tollywood.component";
import { ScreensComponent } from "./screens/screens.component";

const routes: Routes = [
  { path: "Screen", component: ScreensComponent },
  { path: "SignUp", component: SignupComponent },
  { path: "Movies,Sports&Events", component: TollywoodComponent },
  { path: "Tickets", component: BollywoodComponent },
  { path: "Booking", component: HollywoodComponent },
  { path: "*", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [
  TollywoodComponent,
  HollywoodComponent,
  BollywoodComponent,
  SignupComponent,
  ScreensComponent,
  AppComponent
];
