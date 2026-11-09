import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { EtapSlide } from './test/etap-slide/etap-slide';
import { About } from './components/about/about';
import { Dashboard } from './pages/dashboard/dashboard';
import { Fanorona } from './test/fanorona/fanorona';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'jerely',
        pathMatch:'full'
    },
    {
        path:'jerely/about',
        component:About,
    },
    {
        path:'jerely/login',
        component:Login
    },
    {
        path:'jerely/register',
        component:Register
    },
    {   
        path:'jerely/test',
        component:EtapSlide
    },
    {
        path:'jerely',
        component:Home
    },
    {
        path:'jerely/dashboard',
        component:Dashboard
    },
    {
        path:'fanorona',
        component:Fanorona
    }
];
