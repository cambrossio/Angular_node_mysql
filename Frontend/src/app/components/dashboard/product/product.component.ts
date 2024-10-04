import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'dashboard-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  listProducts: product[]=[]

  constructor(
    private _productService: ProductService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.checkToken()
    this.getProduct()
  }

  checkToken() {
    const token = localStorage.getItem('myToken');
    if (!token) {
      this.router.navigate(['/logIn']);
    } 
  }

  getProduct(){
    this._productService.getProduct().subscribe(data => {
      console.log(data);
      this.listProducts=data
    })

  }
  EditProduct(){}

}
