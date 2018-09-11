import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AttributeModalService } from './attribute-modal.service';
import { Color } from '../../shared';


@Component({
    selector: 'zeus-attributes-mgmt-dialog',
    templateUrl: './attribute-management-dialog.component.html'
})
export class ZeusAttributesMgmtDialogComponent {

    color:Color={};

    constructor(public activeModal: NgbActiveModal,
    ) {
    }

    ngOnInit() {
        
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }
}

@Component({
    selector: 'zeus-attribute-dialog',
    template: ''
})
export class AttributeDialogComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private attributeModalService: AttributeModalService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {

            this.attributeModalService.open(ZeusAttributesMgmtDialogComponent as Component);

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}