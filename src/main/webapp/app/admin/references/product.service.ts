import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../shared';
import {Size} from '../../shared';
import {Color} from '../../shared';

@Injectable()
export class ProductService {

    private products: Product[] = [];

    query(req?: any): Observable<Product[]> {

        var productTest = new Product();

        productTest.reference = '2050';
        productTest.cost = 15000;
        productTest.percentage = 25;
        productTest.sellTotal = (productTest.cost * productTest.percentage) / 100
        productTest.total = 30;

        var sizeTest = new Size();
        sizeTest.name="Talla M";
        sizeTest.quantity=4;

        var colorTest=new Color();
        colorTest.name="Negro";
        sizeTest.colors=[];
        sizeTest.colors.push(colorTest);

        colorTest=new Color();
        colorTest.name="Blanco";

        sizeTest.colors.push(colorTest);

        productTest.sizes=[];
        productTest.sizes.push(sizeTest);


        sizeTest = new Size();
        sizeTest.name="Talla S";
        sizeTest.quantity=3;
 
        colorTest=new Color();
        colorTest.name="Azul";

        sizeTest.colors=[];
        sizeTest.colors.push(colorTest);

        colorTest=new Color();
        colorTest.name="Negro";

        sizeTest.colors.push(colorTest);

        productTest.sizes.push(sizeTest);

        this.products.push(productTest);

       
        return Observable.of(this.products);//create(observer: Observer<Product> => {});

    }
}
