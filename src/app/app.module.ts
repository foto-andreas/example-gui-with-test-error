import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

/**
 * Entry module for POSY-OfficeConnect.
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule
    ],
    providers: [
    ]
})
export class AppModule {
    public constructor() {
    }
}
