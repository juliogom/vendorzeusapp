import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    ZeusSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from '.';

@NgModule({
    imports: [
        ZeusSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        ZeusSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class ZeusSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
