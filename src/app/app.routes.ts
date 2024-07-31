import { Routes } from '@angular/router';

import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { HomeComponent } from './page/home/home.component';
import { OrderProductComponent } from './components/order-product/order-product.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'detail/:idPr',
        component: DetailProductComponent,
      },
      {
        path: 'order_confirm/:idPr',
        component: OrderProductComponent,
      },
      {
        path: 'order/:idPr',
        component: OrderComponent,
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },{
    path:"register",
    component:RegisterComponent
  }
];
