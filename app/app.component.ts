import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    // [] means property binding - C to D
    // ( ) means event binding - D to C



    title = 'My First Angular 2 App';
    name = 'jens';
    surName = 'you dont know';
    jensColor = 'blue';

    changeColor() {
        this.jensColor = (this.jensColor === 'blue') ?
            'green' : 'green';
    }
}
