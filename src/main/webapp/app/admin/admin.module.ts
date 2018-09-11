import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZeusSharedModule } from '../shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
import {ColorPickerModule} from 'ngx-color-picker';

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    JhiMetricsMonitoringModalComponent,
    JhiMetricsMonitoringComponent,
    JhiHealthModalComponent,
    JhiHealthCheckComponent,
    JhiConfigurationComponent,
    JhiDocsComponent,
    AuditsService,
    JhiConfigurationService,
    JhiHealthService,
    JhiMetricsService,
    LogsService,
    UserResolvePagingParams,
    UserResolve,
    UserModalService,
    ReferenceDialogComponent,
    ZeusReferencesComponent,
    ReferenceModalService,
    AttributeDialogComponent,
    ZeusReferencesMgmtDialogComponent,
    AttributeModalService,
    ZeusAttributesMgmtDialogComponent,
    ZeusColorMgmtDialogComponent,
    ZeusSizeMgmtDialogComponent,
    ProductService,
    ColorService,
    ZeusAttributesComponent,
    ZeusColorsComponent,
    ColorDialogComponent,
    ColorModalService,
    ZeusSizesComponent,
    SizeDialogComponent,
    SizeModalService
} from './';

@NgModule({
    imports: [
        ZeusSharedModule,
        RouterModule.forChild(adminState),
        ColorPickerModule
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserDialogComponent,
        UserDeleteDialogComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        JhiConfigurationComponent,
        JhiHealthCheckComponent,
        JhiHealthModalComponent,
        JhiDocsComponent,
        JhiMetricsMonitoringComponent,
        JhiMetricsMonitoringModalComponent,
        ZeusReferencesComponent,
        ZeusAttributesComponent,
        ReferenceDialogComponent,
        AttributeDialogComponent,
        ZeusReferencesMgmtDialogComponent,
        ZeusAttributesMgmtDialogComponent,
        ZeusColorMgmtDialogComponent,
        ZeusColorsComponent,
        ColorDialogComponent,
        ZeusSizeMgmtDialogComponent,
        SizeDialogComponent,
        ZeusSizesComponent
    ],
    entryComponents: [
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        JhiHealthModalComponent,
        JhiMetricsMonitoringModalComponent,
        ZeusReferencesMgmtDialogComponent,
        ZeusAttributesMgmtDialogComponent,
        ZeusColorMgmtDialogComponent,
        ZeusSizeMgmtDialogComponent
    ],
    providers: [
        AuditsService,
        JhiConfigurationService,
        JhiHealthService,
        JhiMetricsService,
        LogsService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService,
        ReferenceModalService,
        AttributeModalService,
        ProductService,
        ColorService,
        ColorModalService,
        SizeModalService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZeusAdminModule {}
