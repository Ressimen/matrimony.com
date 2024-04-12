import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListings } from '../profile-listings';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextserviceService } from '../textservice.service';
@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule,RouterModule, HttpClientModule],
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
export class ProfileListComponent implements OnInit {
  
@Input() profileList!: ProfileListings;

yesBtn = '';
noBtn = '';

ngOnInit(): void {
  this.textService.getTexts().subscribe(data =>{
    this.yesBtn = data.yesBtn;
    this.noBtn = data.noBtn;
  })
}

constructor(private textService: TextserviceService){}

}
