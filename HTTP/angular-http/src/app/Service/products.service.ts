import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError} from 'rxjs/operators';
import { Product } from '../model/products';

@Injectable({providedIn: "root"})       //{providedIn: "root"} it is similar to adding in app.module.ts
export class ProductService{
    //A subject is special type of observable
    error = new Subject<string>();          //A property named error which is a subject to which if an error happens in creation the message is assigned to
    constructor(private http: HttpClient){      //An instance of the HttpClient

    }

    //Create product in database
    createProduct(products: {pName: string, desc: string, price: string}){
        console.log(products);
        const headers = new HttpHeaders({'myHeader': 'procademy'});     //We created a header of type key value pair, header is always the last argument
        this.http.post<{name: string}>(
            'https://angularbyprocademy-default-rtdb.firebaseio.com/products.json',     //{/products} creates a folder named products
            products, {headers: headers})       //products because that is the body, products is the variable(data) we want to send stored in
            .subscribe((res) => {
                console.log(res);
            }, (err) => {
                this.error.next(err.message);           //The error in  creation process is emitted by next method and actched in ngOnit in appcomponent
            });
    }

    //fetch products from database
    fetchProduct(){
        const header = new HttpHeaders()
        .set('content-type', 'application/json')    //we say we are sending data in the type of json
        .set('Access-Control-Allow-Origin', '*')    //we say to allow access control access origin

        const params = new HttpParams()
        .set('print', 'pretty').set('pageNum', 1);  //pretty makes each property appear in a new line in the console
        return this.http.get<{[key: string]: Product}>('https://angularbyprocademy-default-rtdb.firebaseio.com/products.json', 
                                                    {'headers' : header, params: params})
        .pipe(map((res) => {
            const products = [];
            for(const key in res){
                if(res.hasOwnProperty(key)){
                products.push({...res[key], id: key})
                }
            }
            return products;
        }), catchError((err) => {
            //write the logic for logging error
            return throwError(err);
        }))
    }
 
    //delete a Product from database
    deleteProduct(id: string){
        let header = new HttpHeaders(); //set method  reates a new header replacing old values while append adds the new values to existing values
        header = header.append('myHeader1', 'Value1');
        header = header.append('myHeader2', 'Value2');
        this.http.delete('https://angularbyprocademy-default-rtdb.firebaseio.com/products/'+id+'.json', {headers: header})
        .subscribe();
    }

    //delete all products from database
    deleteAllProducts(){
        this.http.delete('https://angularbyprocademy-default-rtdb.firebaseio.com/products.json')
        .subscribe();
    }

    updateProduct(id: string, value: Product){
        this.http.put('https://angularbyprocademy-default-rtdb.firebaseio.com/products/'+id+'.json', value)
        .subscribe();
    }
}

/*

    createProduct(products: {pName: string, desc: string, price: string}){
        console.log(products);
        const headers = new HttpHeaders({'myHeader': 'procademy'}); //A header component to be added in the request as an argument
        this.http.post<{name: string}>(     //<{name: string}>This means the response from this post reuest is a object named name of type string
            'https://angularbyprocademy-default-rtdb.firebaseio.com/products.json', 
            products, {headers: headers})           //products is the body (data) of the post request and headers is another argument
            .subscribe((res) => {   //The post request creates an observable since observable emits only when there is a observer we chain it
                console.log(res);   //to an observer
            }, (err) => {   
                this.error.next(err.message);
            });
    }

    'https://angularbyprocademy-default-rtdb.firebaseio.com/products.json'  url of database's products folder
    https://angularbyprocademy-default-rtdb.firebaseio.com/ is url of database
    The above is the database url and /products creates a folder named products in the database

    Whenever we send any http request to a server by default there will be two requests 
    created the first one is a post request(OPTIONS) and the second request named POST.

    When we go into the options request we will see a property named status and if it 
    says OK then the angular application is clear to send the post request to the server then the second request post request is sent.

    Now if we go to the database in the database there will be a folder created named products 
    and in that product subfolder with a unique ID an object is created in which the product we just created is stored in the database.

    Headers are an optional argument.
    If we create a header so comment and use it in the function then in the actual post request 
    we can see that there is a property named my headers and its value will be the value we passed as an argument in the post request function.

*/


/*
fetchProduct(){
        const header = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')

        //<{[key: string]: Product}>
        //The above means the reposne of the fetch request is an object(thatswhy enclosed in {}) and its property of type string and value type product
        const params = new HttpParams()
        .set('print', 'pretty').set('pageNum', 1);
        return this.http.get<{[key: string]: Product}>('https://angularbyprocademy-default-rtdb.firebaseio.com/products.json', 
                                                    {'headers' : header, params: params})
        .pipe(map((res) => {        //pipe is used to transform the observable into another observable
            const products = [];
            for(const key in res){      //for every key(property) in the returned JSON object
                if(res.hasOwnProperty(key)){    //if the response has this key as its own property
                products.push({...res[key], id: key})   //push into the products array  all the properties for that id(property) and add id as additional property
                }
            }
            return products;    //return the array
        }), catchError((err) => {
            //write the logic for logging error
            return throwError(err);
        }))
    }

    When we use the fetch method the data that is returned from the server is a JSON object.

    This object has unique ID's of the objects we entered as properties. 

    And for each of this property the value is again an object which stores the data for the properties of name description, and price.

    products.push({...res[key], id: key})

    ...res[key] It is the spread operator it spreads all {key,value} for that key
    we enclosed it in {} so all these pairs are made to an object
    id:key means we add an additional property to that object which is the key
*/

/*
    deleteProduct(id: string){
        let header = new HttpHeaders();
        header = header.append('myHeader1', 'Value1');
        header = header.append('myHeader2', 'Value2');
        this.http.delete('https://angularbyprocademy-default-rtdb.firebaseio.com/products/'+id+'.json', {headers: header})
        .subscribe();
    }

    'https://angularbyprocademy-default-rtdb.firebaseio.com.json' databse url
    'https://angularbyprocademy-default-rtdb.firebaseio.com/products.json' url for this products folder
    'https://angularbyprocademy-default-rtdb.firebaseio.com/products'+id+'.json'    url for this particular product
*/

/*
    deleteAllProducts(){
        this.http.delete('https://angularbyprocademy-default-rtdb.firebaseio.com/products.json')
        .subscribe();
    }

    delete that folder which has all products so all products are deleted
*/

//In set method the headers are assigned a new value
//In append the new value is appended to the header value