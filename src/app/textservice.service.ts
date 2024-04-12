import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class TextserviceService {

  constructor(private http: HttpClient) { }

  getTexts(){
    return this.http.get<any>('assets/texts.json');
  }
}
