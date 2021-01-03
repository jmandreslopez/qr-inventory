import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import * as _ from 'lodash';

// Vendors
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { LaddaModule } from 'angular2-ladda';

// Components
import { ScannerComponent } from './components';

// Options
import { LaddaOptions } from '@app/options';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,

        // Vendors
        NgxErrorsModule, // @hackages/ngxerrors
        LaddaModule.forRoot(LaddaOptions), // angular2-ladda
    ],
    declarations: [
        ScannerComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,

        // Modules
        NgxErrorsModule, // @hackages/ngxerrors
        LaddaModule, // angular2-ladda

        // Components
        ScannerComponent,
    ],
    providers: []
})
export class SharedModule {
    //
}
