import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import * as _ from 'lodash';

// Vendors
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { LaddaModule } from 'angular2-ladda';
// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { PopoverModule } from 'ngx-bootstrap/popover';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Components
//

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
        //
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
    ],
    providers: []
})
export class SharedModule {
    //
}
