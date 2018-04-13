import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BadRequestError } from './bad-request-error';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { UnauthorizedError } from './unauthorized-error';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = environment.baseApiUrl;
    }

    get(method: string) {
        return this.http.get(this.baseUrl + method)
            .map(response => response.json())
            .catch(this.handleError);
    }

    post(method: string, request: any) {
        return this.http.post(this.baseUrl + method, request)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error) {
            switch (error.status) {
                case 400:
                    return Observable.throw(new BadRequestError(error));
                case 401:
                    return Observable.throw(new UnauthorizedError(error));
            }
        }
    }
}