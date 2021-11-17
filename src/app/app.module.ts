import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutsDetailComponent } from './donuts-detail/donuts-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path: 'donuts', component: DonutsComponent},
  {path: 'donuts/:id', component: DonutsDetailComponent},
  {path: 'people', component: FamousPeopleComponent},
  {path: 'people/:id', component: FamousPersonDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutsDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
