import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Product } from './model/products';
import { ProductService } from './Service/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];      //Ana rray to store all products fetched from response
  isFetching: boolean = false;      //A property to know if data is being fetched
  editMode: boolean = false;        //If a product is being edited
  currentProductId: string;
  errorMessage: string = null;    //Creating an error message property
  errorSub: Subscription          //Creating an errorSub property of type subscription to which the error message of create is assigned to ngOnInit Function
  @ViewChild('productsForm') form: NgForm;

  constructor(private productService: ProductService){    //Create an instance of ProductService   

  }

  ngOnInit(){
    this.fetchProducts();
    this.errorSub = this.productService.error.subscribe((message) => {  //To subscribe to the error message from createProduct in service file
      this.errorMessage = message;      //Now the emitted error message from service file createproducts functions is assigned to errorMessageproperty
    }) 
  }

  onProductsFetch(){
    this.fetchProducts();
  }

  //The properties pName, desc, price are the names we added in html file and are assigned to this object
  onProductCreate(products: {pName: string, desc: string, price: string}){
    if(!this.editMode)    //If it is not in edit mode then the button is create
        this.productService.createProduct(products);
    else                  //If it is in edit mode then the button is update button
      this.productService.updateProduct(this.currentProductId, products);
  }

  private fetchProducts(){
    this.isFetching = true;           //fetching started so set fetching =true
    this.productService.fetchProduct().subscribe((products) => {    //We subscribe here since for this function we are not subscribing in service file
      this.allProducts = products;    //The subscribed(received products are populted into allproducts array)
      this.isFetching = false;        //Make fetching false
    }, (err) => {
      this.errorMessage = err.message;
    })
  }

  onDeleteProduct(id: string){
    this.productService.deleteProduct(id);
  }

  onDeleteAllProducts(){
    this.productService.deleteAllProducts();
  }

  onEditClicked(id: string){
    this.currentProductId = id;
    //Get the product based on the id
    let currentProduct = this.allProducts.find((p) => {return p.id === id});
    //console.log(this.form);

    //Populate the form with the product details
    this.form.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price
    });

    //Change the button value to update product
    this.editMode = true;
  }

  ngOnDestroy(): void {     //Here we are unsubscribing from the subscription 
    this.errorSub.unsubscribe();
  }
}


/*
When we are fetching products from the server if there is an error that is returned, 
we subscribe to that observer in the app component so we are handling that error in the app component in the fetch products function.


But in the case of creation of products we subscribe to that event in the service component 
and if an error occurred we need to deal with this in the service component.

so we are creating a property that is of type subject and when an error happens 
the error message is returned by the property next of this object.
Please subscribe to this returned object in the app component in the ngOnInit function.


*/

