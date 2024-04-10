import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
const routeConfig: Routes = [{
    path: '', component: HomeComponent, title: 'Home Page'
},
{
    path:'details/:id', component:ProfileDetailsComponent, title: 'Profile Details Page'
}
];

export default routeConfig;