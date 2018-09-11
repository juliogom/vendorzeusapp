import { Routes, Route } from '@angular/router';

import { ZeusAttributesComponent } from './attributes.component';
import { ZeusColorsComponent } from './colors/colors.component';
import {ColorDialogComponent} from './colors/color-management-dialog.component';
import { AttributeDialogComponent } from './attribute-management-dialog.component';
import {SizeDialogComponent} from './sizes/size-management-dialog.component';

import {ZeusSizesComponent} from './sizes/sizes.component';

export const AttributeRoute: Routes = [{
    path: 'atributes',
    component: ZeusAttributesComponent,
    data: {
        pageTitle: 'Attributes'
    }
},
{
    path: 'atributes/colors',
    component: ZeusColorsComponent,
    data: {
        pageTitle: 'Colors'
    }
},
{
    path:'attributes/sizes',
    component:ZeusSizesComponent,
    data: {
        pageTitle: 'Sizes'
    }
}
];

export const attributeDialogRoute: Route =
{
    path: 'attribute-management-new',
    component: AttributeDialogComponent,
    outlet: 'popup'
};

export const colorDialogRoute: Route =
{
    path: 'color-management-new',
    component: ColorDialogComponent,
    outlet: 'popup'
};

export const sizeDialogRoute: Route =
{
    path: 'size-management-new',
    component: SizeDialogComponent,
    outlet: 'popup'
};


