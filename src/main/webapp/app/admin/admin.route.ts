import { Routes } from '@angular/router';

import {
    auditsRoute,
    configurationRoute,
    docsRoute,
    healthRoute,
    logsRoute,
    metricsRoute,
    userMgmtRoute,
    userDialogRoute,
    referencesRoute,
    referenceDialogRoute,
    attributeDialogRoute,
    AttributeRoute,
    colorDialogRoute,
    sizeDialogRoute
} from '.';

import { UserRouteAccessService } from '../shared';

const ADMIN_ROUTES = [
    auditsRoute,
    configurationRoute,
    docsRoute,
    healthRoute,
    logsRoute,
    ...userMgmtRoute,
    metricsRoute,
    referencesRoute,
    ...AttributeRoute
];

export const adminState: Routes = [{
    path: '',
    data: {
        authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessService],
    children: ADMIN_ROUTES
},
    ...userDialogRoute,
    referenceDialogRoute,
    attributeDialogRoute,
    colorDialogRoute,
    sizeDialogRoute
];
