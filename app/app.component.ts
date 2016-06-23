import {Component} from '@angular/core';
import {CustomersComponent} from './customer/customers.component';
import {CustomerService} from './customer/customer.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [CustomerService]
})
export class AppComponent {

    constructor(private _customerService: CustomerService) {}

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
