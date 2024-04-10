import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { ProfileListings } from '../profile-listings';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  template: `
   <article class="listing">
    <img class="listing-photo" [src]="ProfileListing?.photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{ProfileListing?.name}}</h2>
      <p class="list-desc"><span>{{ProfileListing?.age}}</span>,
      <span>{{ProfileListing?.height}}</span>,
      <span>{{ProfileListing?.education}}</span>,
      <span>{{ProfileListing?.profession}}</span>,
      <span>{{ProfileListing?.caste}}</span>,<br>
      <span>{{ProfileListing?.language}}</span>
      <span>{{ProfileListing?.city}}</span>
      <span>{{ProfileListing?.state}}</span>
    </p>
    </section>
    <section class="listing-features">
      
    <table>
  <tr>
    <th><img src="./assets/star.png" class="shortlist-icon"></th>
    <th>Shortlist</th>
    <th></th>
    <th></th>
    <th>Like Her?</th>
    <th>
      <button mat-raised-button class="no-btn">
      <span class="material-icons">close</span>
      </button>
    </th>
    <th>
      <button mat-raised-button class="yes-btn">
        <span class="material-icons">done</span>
      </button>
    </th>
  </tr>
</table>

    </section>
 </article> 
  `,
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
route: ActivatedRoute = inject(ActivatedRoute);
profileDetailsId = 0;
profileService = inject (ProfilesService);
ProfileListing: ProfileListings | undefined;
constructor(){
  const profileDetailsId = Number(this.route.snapshot.params['id']);
  this.ProfileListing= this.profileService.getProfileById(profileDetailsId)
}
}
