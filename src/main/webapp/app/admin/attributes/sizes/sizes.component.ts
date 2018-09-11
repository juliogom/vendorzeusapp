import { Component, OnInit, animate } from '@angular/core';
import { Size } from '../../../shared';

import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../../shared';


@Component({
    selector: 'zeus-sizes',
    templateUrl: './sizes.component.html'
})
export class ZeusSizesComponent implements OnInit {

    currentAccount: any;
    sizes: Size[];
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
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.sizes = [];

        let size = new Size();
        size.id = 1;
        size.name = 'Talla S';
        size.value = 'S';

        this.sizes.push(size);

        size = new Size();

        size.id = 2;
        size.name = 'Talla M';
        size.value = 'M';

        this.sizes.push(size);

    }

    delete() {

        var txt;
        var r = confirm("Eliminar esta talla?");

        if (r == true) {
            
        } else {

        }
    }

}
