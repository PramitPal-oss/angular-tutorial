import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})
export class ChildComponent {
    @Output() gretEvent = new EventEmitter()
    name: string = 'WelCome Back Bruh!'

    callParentGreet() {
        this.gretEvent.emit(this.name)
    }
}
