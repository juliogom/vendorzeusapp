import { Component,OnInit, animate } from '@angular/core';
import {Observable} from 'rxjs'

import { Product } from '../../shared';//ProductService

import {ProductService} from './product.service'
import { JhiAlertService } from 'ng-jhipster';

@Component({
    selector: 'zeus-references',
    templateUrl: './references.component.html',
    styleUrls: [
        'references.scss'
    ]
})
export class ZeusReferencesComponent implements OnInit{
    
    private products:Product[];
    private cantColores:number;

    page: any;
    itemsPerPage: any;
    predicate: any;
    previousPage: any;
    reverse: any;

    constructor(private productService:ProductService,private alertService: JhiAlertService
    ) {
    }

    ngOnInit() {
        this.loadAll();

    }

    loadAll() {
       this.productService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()}).subscribe(
                (res: Product[]) => this.onSuccess(res),
                (res: any) => this.onError(res.body)
            );
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    private onSuccess(data) {
        
        this.products = data;

        let c=this.products.map(p=>p.sizes);

        this.cantColores=this.products.reduce((acc, cur) => acc + Number(cur.sizes.reduce((act, cu) => act + 1, 0)),0);

    }

    private onError(error) {
        this.alertService.error(error.error, error.message, null);
    }

}
