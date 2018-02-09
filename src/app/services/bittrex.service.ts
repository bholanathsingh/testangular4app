import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../shared/utils/config.service';


@Injectable()
export class BittrexDetailService {

    _baseUrl: string = '';
    
    constructor(private http: Http
    ,private configService:ConfigService) { 
        this._baseUrl=configService.getApiURI(); 
     }

    GetLogHistory() :Observable<any[]> {
        return this.http.get(this._baseUrl+'/logs').map((response: Response) => response.json());
    }

 
}
