import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'input-change-interception2';
  onLoggedIn: boolean = true;

  login(): boolean {
    return (this.onLoggedIn = true);
  }

  logout(): boolean {
    return (this.onLoggedIn = false);
  }
}
