import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

const URL_CUSTOMER = 'app/CustomerService.json';

@Injectable()
export class CustomerService {
    constructor(private _http: Http) { }

    getCustomer() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json());
    }

}