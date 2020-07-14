import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Product} from './../model/models.model';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.scss'],
})
export class AssignmentTwoComponent implements OnInit {

  constructor( private http:HttpService) { }

  products: Array<Product>;
  mode: String = 'grid';
  sortType: String;
  modeSelected: String = '';
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.http.getProducts().subscribe( products => {
      this.products = products.products;
    })
  }
  switchModes(mode: string){
    this.mode = mode;
  }

  filterPrice(sortType: string, modeSelected: string){
    this.sortType = sortType;
    this.modeSelected = modeSelected;
  }
}
