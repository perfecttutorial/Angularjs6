import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { DeviceTypeList } from "src/app/model/devicetype.model";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { MainContentTabModel } from "./mainconent.model";

@Injectable()
export class MainContentService {

    url ='assets/customer.json';

    smtform = new MainContentTabModel("");

    constructor(private httpClient: HttpClient) {
        
    }

    setData(mtdata:MainContentTabModel){
        this.smtform = mtdata;
    }
    getData(){
        return this.smtform;
    }
    getDeviceTypeList(): Observable<DeviceTypeList[]> {
        return this.httpClient.get<DeviceTypeList[]>('assets/customer.json')
        .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        // return an observable with a meaningful error message to the end user
        return throwError('There is a problem with the service.We are notified & working on it. Please try again later.');
    }
}