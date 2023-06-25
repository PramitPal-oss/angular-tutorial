import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name: string = 'Pramit';

  greet(): string {
    return 'welcome ' + this.name;
  }
}
