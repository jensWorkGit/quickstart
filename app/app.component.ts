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

    customers = [
        {id: 1, name: 'Ward'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Eric'},
        {id: 4, name: 'Sally'},
        {id: 5, name: 'Emmet'}
    ];


    changeColor() {
        this.jensColor = (this.jensColor === 'blue') ?
            'green' : 'green';
    }


}
