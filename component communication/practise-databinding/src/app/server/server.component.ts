import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  @Input() element: { name: string; type: string; content: string } = {
    name: '',
    type: '',
    content: '',
  };
}
