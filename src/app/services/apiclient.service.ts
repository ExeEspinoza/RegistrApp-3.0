import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*' 
  })
}
//Se establece la base url del Api a consumir
  apiURL = 'https://jsonplaceholder.typicode.com';

  apiHora = 'https://time.is/es/';

  apiQr='	https://api.qr-code-generator.com/v1/create?access-token=your-acces-token-here'

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<any>{ 
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }
  

getPost(id: string):Observable<any>{
  return this.http.get(this.apiURL+'/posts/'+id).pipe(

  );
}


  getHorario():Observable<any>{ 
    return this.http.get(this.apiHora+'/Chile/').pipe(
      retry(3)
    );
  }
}
