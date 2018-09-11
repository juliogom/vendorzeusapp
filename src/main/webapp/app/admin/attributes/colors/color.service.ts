import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from '../../../app.constants';
import { Color } from '../../../shared/product/color.model';
import { createRequestOption } from '../../../shared/model/request-util';

@Injectable()
export class ColorService {
    private resourceUrl = SERVER_API_URL + 'api/colors';

    constructor(private http: HttpClient) { }

    /*create(user: User): Observable<HttpResponse<User>> {
        return this.http.post<User>(this.resourceUrl, user, { observe: 'response' });
    }

    update(user: User): Observable<HttpResponse<User>> {
        return this.http.put<User>(this.resourceUrl, user, { observe: 'response' });
    }

    find(login: string): Observable<HttpResponse<User>> {
        return this.http.get<User>(`${this.resourceUrl}/${login}`, { observe: 'response' });
    }

    delete(login: string): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.resourceUrl}/${login}`, { observe: 'response' });
    }

    authorities(): Observable<string[]> {
        return this.http.get<string[]>(SERVER_API_URL + 'api/users/authorities');
    }
*/
    query(req?: any): Observable<HttpResponse<Color[]>> {
        const options = createRequestOption(req);
        return this.http.get<Color[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    queryTest(req?: any):Observable<HttpResponse<Color[]>>{
        const options = createRequestOption(req);

        /*var req2=this.http.get(this.resourceUrl,{responseType: 'text'}).subscribe(data => {
            console.log(data);
          });*/
          
        var request=this.http.get<Color[]>(this.resourceUrl,{params: options,observe:'response'});
        //console.log(request);
        return request;
    }
}
