import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css'],
})
export class CookpitComponent {
  @Output() addserverEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() addBlueEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName: string = '';
  newServerContent: string = '';

  onAddServer() {
    this.addserverEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.addBlueEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
