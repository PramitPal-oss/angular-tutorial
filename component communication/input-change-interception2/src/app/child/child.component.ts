import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() loggedIn!: boolean;
  messgae!: string;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['loggedIn'].currentValue);
    const el = changes['loggedIn'].currentValue;
    if (el) {
      this.messgae = 'Welcome Back Pramit';
    } else {
      this.messgae = 'Please Logged In';
    }
  }
}
