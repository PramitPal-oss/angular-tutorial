import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'template-ref-variables';
  @ViewChild(ChildComponent) childComponenteRef!: ChildComponent;

  ngAfterViewInit(): void {
    this.childComponenteRef.name = 'Message From Parent Componenet';
  }
}
