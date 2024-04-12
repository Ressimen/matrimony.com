import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { ProfileListings } from '../profile-listings';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextserviceService } from '../textservice.service';
@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, MatSelectModule, MatSnackBarModule, HttpClientModule],
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
  <section>     
  <table>
  <tr>
    <th><button class="shortlist-btn" (click)="shortListed()"><img src="./assets/star.png" class="shortlist-icon"></button></th>
    <th>{{shortlist}}</th>
    <th></th>
    <th></th>
    <th>{{likeHer}}</th>
    <th>
      <button mat-raised-button class="no-btn" (click)="notInterested()">
      <span class="material-icons">close</span>
      </button>
    </th>
    <th>
      <button mat-raised-button class="yes-btn" (click)="Interested()">
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
export class ProfileDetailsComponent implements OnInit {
  
  shortlist: string = '';
  likeHer: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  route: ActivatedRoute = inject(ActivatedRoute);
  profileDetailsId = 0;
  profileService = inject(ProfilesService);
  ProfileListing: ProfileListings | undefined;

  constructor(private _snackBar: MatSnackBar,
    private textService: TextserviceService) {
    const profileDetailsId = Number(this.route.snapshot.params['id']);
    this.ProfileListing = this.profileService.getProfileById(profileDetailsId);

  }
  ngOnInit(): void {
    this.textService.getTexts().subscribe(data => {
      console.log(data);
      this.shortlist = data.shortlist;
      this.likeHer = data.likeHer;
    })
  }
  shortListed() {
    this._snackBar.open('Shortlisted', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  notInterested() {
    this._snackBar.open('Not Interested', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  Interested(){
    this._snackBar.open('Interested', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
