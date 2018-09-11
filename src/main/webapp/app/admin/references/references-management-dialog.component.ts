import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceModalService } from './references-modal.service';
import { Product } from '../../shared';
import { Size } from '../../shared';
import { Color } from '../../shared';

@Component({
    selector: 'zeus-references-mgmt-dialog',
    templateUrl: './references-management-dialog.component.html',
    styleUrls: [
        'references.scss'
    ]
})
export class ZeusReferencesMgmtDialogComponent {

    product: Product = {};
    isSaving: boolean;
    size: Size;
    color: Color;

    private sizes: Size[];
    private colors: Color[];

    private selectedsize: Size = {};
    private selectedColor: Color;

    private sizes_colors: Size[] = [];
    private repeatvalue = false;
    private quantity: number = 0;

    private totcosts: number;
    private totSells: number;

    constructor(public activeModal: NgbActiveModal,
    ) {
    }

    ngOnInit() {
        this.isSaving = false;

        if (this.product.sizes == null) {
            this.size = {};
            this.color = {};

            this.sizes = [];
            this.colors = [];

            this.testData();

        }

    }

    testData() {
        this.size.id = 1;
        this.size.name = "Talla S";
        this.size.value = "S";
        this.size.colors = [];

        this.color.id = 1;
        this.color.name = "Negro";
        this.color.hexadecimal = "#18171C";

        this.sizes.push(this.size);
        this.colors.push(this.color);

        this.size = new Size();
        this.size.id = 2;
        this.size.name = "Talla M";
        this.size.value = "M";
        this.size.colors = [];

        this.color = new Color();
        this.color.id = 2;
        this.color.name = "Blanco";
        this.color.hexadecimal = "#18171D";

        this.sizes.push(this.size);
        this.colors.push(this.color);

    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    validateColorAtributes(obj) {

        if (this.selectedsize != null && this.selectedColor != null) {

            if (this.sizes_colors.filter(size =>
                size.name == this.selectedsize.name && size.colors.find(color => color.name === this.selectedColor.name)).length > 0) {
                this.repeatvalue = true;
            } else {
                this.repeatvalue = false;
            }
        }
    }

    calculateTots() {

        this.totcosts = this.sizes_colors.reduce((acc, cur) => acc + Number(cur.quantity), 0) * this.product.cost;
        this.totSells = ((this.totcosts * this.product.percentage) / 100) + this.totcosts;
        this.product.total = this.sizes_colors.reduce((acc, cur) => acc + Number(cur.quantity), 0);

    }

    addAtribute() {

        this.validateColorAtributes(null);

        if (!this.repeatvalue && this.quantity > 0) {

            this.selectedsize.colors = [];

            this.selectedsize.colors.push(this.selectedColor);

            let sizeaux = new Size();
            sizeaux.id = this.selectedsize.id;
            sizeaux.name = this.selectedsize.name;
            sizeaux.quantity = this.quantity;
            sizeaux.colors = this.selectedsize.colors;

            this.sizes_colors.push(sizeaux);
            this.calculateTots();
            this.quantity = 1;
        }
        else if (this.selectedsize == null && this.selectedColor == null) {
            alert("Elije una talla, un color y una cantidad");
        } else if (this.quantity == 0) {
            alert("Ingresa una combinacion mayor a 0");
        } else {
            alert("combinacion ingresada repetida");
        }

    }

    deleteAtribute(size, color) {

        const indx = this.sizes_colors.indexOf(this.sizes_colors.find(siz => siz.name == size.name && siz.colors.find(col => col.name == color.name) != undefined));

        if (indx >= 0) {
            this.sizes_colors.splice(indx, 1);
            this.calculateTots();
        }
    }

    save() {

    }

}

@Component({
    selector: 'zeus-reference-dialog',
    template: ''
})
export class ReferenceDialogComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private referenceModalService: ReferenceModalService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {

            this.referenceModalService.open(ZeusReferencesMgmtDialogComponent as Component);

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}