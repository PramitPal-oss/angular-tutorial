import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practise-databinding';
  serverElements: { name: string; content: string; type: string }[] = [
    { name: 'Pramit', content: 'Server created', type: 'server' },
    { name: 'Pramit', content: 'Server created', type: 'blueprint' },
  ];

  OnAddingBluePrint(event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      name: event.serverName,
      type: 'blueprint',
      content: event.serverContent,
    });
  }

  OnAddingServer(event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      name: event.serverName,
      type: 'server',
      content: event.serverContent,
    });
  }
}
