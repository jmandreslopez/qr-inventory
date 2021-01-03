import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { LayoutsModule } from '@app/layouts/layouts.module';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // App
        LayoutsModule,
        SharedModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    //
}
