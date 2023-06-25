import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'component-interaction';
  pageTitle: string = 'Angular Component Interraction';
  imageUrl: string =
    'https://images.pexels.com/photos/560963/pexels-photo-560963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  count: number = 0;

  name: string = '';

  userName: string = '';

  private customerName: string = '';

  //This will held the dom reference
  @ViewChild('nameRef') nameInputElementRef!: ElementRef;

  incrementCount(): void {
    this.count++;
  }

  decrementCOunt(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  greetVishwas(updatedValue: any) {
    this.userName = updatedValue;
    if (updatedValue === 'Pramit') {
      alert('WelcomeBack Pramit');
    }
  }

  get customername(): string {
    return this.customerName;
  }

  set customername(value: string) {
    this.customerName = value;
    if (value === 'Pramit') {
      alert('WelcomeBack Pramit');
    }
  }

  ngAfterViewInit(): void {
    this.nameInputElementRef.nativeElement.focus();
    console.log(this.nameInputElementRef);
  }
}
