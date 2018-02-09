import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoaderComponent} from './loader/loader.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {OrderHistoryComponent} from './order-history/order-history.component';


const routes: Routes = [
    {path:'',redirectTo: '/log-history',pathMatch: 'full'},
    {path:'log-history',component:OrderHistoryComponent},
    {path:'**',redirectTo: '/log-history',pathMatch: 'full'}
    ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[AppComponent,HeaderComponent,DashboardComponent,LoaderComponent,
    FooterComponent,OrderHistoryComponent
 ];  


