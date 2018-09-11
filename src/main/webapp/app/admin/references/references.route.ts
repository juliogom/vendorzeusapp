import { Route } from '@angular/router';

import { ZeusReferencesComponent } from './references.component';
import { ReferenceDialogComponent } from './references-management-dialog.component';

export const referencesRoute: Route = {
    path: 'references',
    component: ZeusReferencesComponent,
    data: { 
        pageTitle: 'References'
    }
};

export const referenceDialogRoute: Route = 
    {
        path: 'reference-management-new',
        component: ReferenceDialogComponent,
        outlet: 'popup'//'referencepopup'
    }
;