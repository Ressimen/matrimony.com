import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TextserviceService } from './textservice.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/matrimony-logo.jpg" alt="logo"aria-hidden="true">
    </header>
    <section class="content">
      <h3 class="matches-text">{{myMatches}}</h3>
      <h2 class="profiles-pending-text"> 8 Profiles pending with me <span><button>5 New</button></span></h2>
      <router-outlet></router-outlet>
</section>
  </main>  
  `,
  styleUrls: ['./app.component.css'],
  imports:[HomeComponent, RouterModule,HttpClientModule],
  providers:[TextserviceService,]
})
export class AppComponent implements OnInit{
  title = 'homes';
  myMatches: string ='';
  profilesPending: string = '';
  profilesPendingBtnTxt: string = '';
  constructor(private textService: TextserviceService) {
    
  }
  ngOnInit(): void {
    this.textService.getTexts().subscribe(data => {
      console.log(data.myMatches);
      this.myMatches = data.myMatches;
      this.profilesPending = data.profilesPendingBtnTxt;
    });
  }
}
