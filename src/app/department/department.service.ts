import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Department } from './department';

@Injectable()
export
    class DepartmentService {
    private baseUrl: string = 'http://v17.iqsmartapp.com/webapi';

    constructor(private http: Http) {

    }

    public getDepartments(): Observable<Department[]> {
        return this.http.get(`${this.baseUrl}/api/department`) // Notice : `${this.baseUrl}- ES6 Template Strings that you can interpolate data into `${data}` syntax.
            // return this.http.get('./src/app/department/departments.json')
            .map((res) => res.json())
            .catch(this.handleError);
    }
    public getDepartment(id: number): Observable<Department> {
        console.log(id);
        return this.http.get(`${this.baseUrl}/api/department/${id}`)
            // return this.http.get('./src/app/department/department.json')
            .map((res) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: any): any {
        console.error(error.message);
        // throw an application level error
        // Note: Handle error at differnt level of Abstraction
        return Observable.throw(error.message);
    }

    private getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}
