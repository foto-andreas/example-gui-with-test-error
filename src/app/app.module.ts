import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import localeEn from "@angular/common/locales/en";
import { NgModule } from "@angular/core";
import { MAT_TABS_CONFIG, MatTabsConfig } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

registerLocaleData(localeDe);
registerLocaleData(localeEn);

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
        {
            provide: MAT_TABS_CONFIG,
            useValue: {
                animationDuration: "200ms",
                preserveContent: true
            } as MatTabsConfig
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule {
    public constructor() {
    }
}
