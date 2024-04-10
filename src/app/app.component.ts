import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/matrimony-logo.jpg" alt="logo"aria-hidden="true">
    </header>
    <section class="content">
      <h3 class="matches-text">My Matches</h3>
      <h2 class="profiles-pending-text"> 8 Profiles pending with me <span><button>5 New</button></span></h2>
      <router-outlet></router-outlet>
</section>
  </main>  
  `,
  styleUrls: ['./app.component.css'],
  imports:[HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
