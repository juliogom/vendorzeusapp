import { Component, OnInit, animate } from '@angular/core';
import { Color } from '../../../shared';
import { HttpResponse } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../../shared';
import {ColorService} from './color.service';

@Component({
    selector: 'zeus-colors',
    templateUrl: './colors.component.html'
})
export class ZeusColorsComponent implements OnInit {

    currentAccount: any;
    colors: Color[];
    error: any;
    success: any;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;

    
    constructor(
        private alertService: JhiAlertService,
        private principal: Principal,
        private parseLinks: JhiParseLinks,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private eventManager: JhiEventManager,
        private colorService:ColorService
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        
        this.routeData = this.activatedRoute.data.subscribe((data) => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.colors = [];

        this.colorService.queryTest({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()}).subscribe(
            (res: HttpResponse<Color[]>) => this.onSuccess(res.body, res.headers),
            (res: HttpResponse<any[]>) => this.onError(res.body)
        );

        
        /*let color = new Color();
        color.id = 1;
        color.name = 'Blanco';
        color.hexadecimal = '#FFFFFF';

        this.colors.push(color);

        color = new Color();

        color.id = 2;
        color.name = 'Negro';
        color.hexadecimal = '#000000';

        this.colors.push(color);*/

    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    delete() {

        var txt;
        var r = confirm("Eliminar este color");

        if (r == true) {
            
        } else {

        }
    }


    private onSuccess(data, headers) {
        //console.log(headers);
        //this.links = this.parseLinks.parse(headers.get('link'));
        //this.totalItems = headers.get('X-Total-Count');
        //this.queryCount = this.totalItems;
        this.colors = data;
    }

    private onError(error) {
        console.log('error');
    }

}
