import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from '../profile-list/profile-list.component';
import { ProfileListings } from '../profile-listings';
import { ProfilesService } from '../profiles.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileListComponent],
  template: `
    <section class="results">
      <app-profile-list *ngFor="let profileList of profileListResults"[profileList]="profileList"></app-profile-list>
</section> 
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
profileListResults:ProfileListings[]=[];

constructor(private profileService:ProfilesService){
  this.profileListResults = this.profileService.getAllProfiles();
}
}
