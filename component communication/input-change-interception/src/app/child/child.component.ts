import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  private _loggedIn: boolean = true;
  public message!: string;

  get isloggedIn(): boolean {
    return this._loggedIn;
  }

  @Input()
  set isLoggedIn(value: boolean) {
    if (value) {
      this.message = 'Welcome Back Pramit';
    } else {
      this.message = 'Please logged In';
    }
  }
}
