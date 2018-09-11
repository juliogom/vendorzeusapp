import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SizeModalService } from './size-modal.service';
import { Size } from '../../../shared';

@Component({
    selector: 'zeus-color-mgmt-dialog',
    templateUrl: './size-management-dialog.component.html'
})
export class ZeusSizeMgmtDialogComponent {

    size:Size={};

    sizeSelected:any;

    constructor(public activeModal: NgbActiveModal,
    ) {
    }

    ngOnInit() {
        
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save(){

    }
}

@Component({
    selector: 'zeus-size-dialog',
    template: ''
})
export class SizeDialogComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private sizeModalService: SizeModalService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {

            this.sizeModalService.open(ZeusSizeMgmtDialogComponent as Component);

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}