import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListings } from '../profile-listings';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule,RouterModule],
  template: `
   <section class="listing">
    <img class="listing-photo" [src]="profileList.photo"[width]="400" [height]="400">
    <h2 class="listing-heading">{{profileList.name}}</h2>
      <p class="listing-details">
        <span>{{profileList.age}}</span>,
        <span> {{profileList.height}} </span>,  
        <span> {{profileList.language}}</span>,
        <span>{{profileList.caste}}</span>,
        <span>{{profileList.education}}</span>,
        <span>{{profileList.profession}}</span>,
        <span>{{profileList.city}}</span>,
         <span>{{profileList.state}}</span>,
         <span>{{profileList.country}}</span>
          </p>
          <div class="button">            
            <button role="link" mat-raised-button class="yes-btn" [routerLink]="['/details', profileList.id]">Yes</button>            
            <button mat-raised-button class="no-btn">No</button>
        </div>
</section>
  `,
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
@Input() profileList!: ProfileListings;
}
