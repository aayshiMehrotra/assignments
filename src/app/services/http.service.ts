import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products, Students} from '../model/models.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 

  }

  getProducts(){
    return this.http.get<Products>('https://products-8b3f3.firebaseio.com/products.json');
  }

  getStudentsData(){
    return this.http.get<Students>('https://students-f1b05.firebaseio.com/students.json');
    
  }
}
