import { Component, OnInit, AfterViewInit } from '@angular/core';

// Dependencies
declare const Html5QrcodeScanner: any;

@Component({
    selector: 'jma-scanner',
    templateUrl: './scanner.component.html',
    styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit, AfterViewInit {
    public scanner: any;
    public messages: any = [];

    //****************************************************************************************
    // HANDLERS
    //****************************************************************************************

    private handleSuccess(message: any) {

        // Stop scanning
        this.scanner.clear();

        this.messages = [
            ...this.messages,
            message,
        ];
    }

    private handleError(error: any) {
        // console.error(error);
    }

    //****************************************************************************************
    // METHODS
    //****************************************************************************************

    private initScanner() {
        const element: string = 'reader';
        const options: any = { fps: 10, qrbox: 250 };
        this.scanner = new Html5QrcodeScanner(element, options);
        this.scanner.render(
            (message: any) => this.handleSuccess(message),
            (error: any) => this.handleError(error)
        );
    }

    //****************************************************************************************
    // LIFECYCLES
    //****************************************************************************************

    public ngOnInit() {
        //
    }

    public ngAfterViewInit() {
        this.initScanner();
    }

}
