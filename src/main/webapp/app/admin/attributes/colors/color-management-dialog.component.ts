import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorModalService } from './color-modal.service';
import { Color } from '../../../shared';

@Component({
    selector: 'zeus-color-mgmt-dialog',
    templateUrl: './color-management-dialog.component.html'
})
export class ZeusColorMgmtDialogComponent {

    color:Color={};

    colorSelected:any;

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
    selector: 'zeus-color-dialog',
    template: ''
})
export class ColorDialogComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private attributeModalService: ColorModalService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {

            this.attributeModalService.open(ZeusColorMgmtDialogComponent as Component);

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}