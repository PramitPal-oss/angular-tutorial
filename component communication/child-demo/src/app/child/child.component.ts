import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() loggedIn: boolean = true;
  message!: string;
  private _loggedIn!: boolean;

  get loggednIn(): boolean {
    return this._loggedIn;
  }

  @Input()
  set loggednIn(v: boolean) {
    this._loggedIn = v;
    if (v === true) {
      this.message = 'Welcome Back pramit';
    } else {
      this.message = 'Please Log In';
    }
  }

  ngOnInit(): void {}
}
