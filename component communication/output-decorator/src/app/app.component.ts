import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'output-decorator'

    greet(name: string) {
        alert('Hellow friend ' + name)
    }
}
