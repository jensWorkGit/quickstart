import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers = [
        { id: 1, name: 'Ward' },
        { id: 2, name: 'Kevin' },
        { id: 3, name: 'Eric' },
        { id: 4, name: 'Sally' },
        { id: 5, name: 'Emmet' }
    ];

    constructor() { }

    ngOnInit() { }

}