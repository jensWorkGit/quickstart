import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
    customers: any[];
    private _customerService: CustomerService;

    constructor(customerService: CustomerService) {
        this._customerService = customerService;
    }

    ngOnInit() {
        this.customers = this._customerService.getCustomer();
    }

}