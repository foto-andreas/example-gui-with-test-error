import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import localeEn from "@angular/common/locales/en";
import { LOCALE_ID, NgModule } from "@angular/core";
import { MAT_TABS_CONFIG, MatTabsConfig } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateService } from "@ngx-translate/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

registerLocaleData(localeDe);
registerLocaleData(localeEn);

/**
 * Fabrikmethode für die LOCALE_ID.
 */
export function localeIdFactory(translate: TranslateService): string {
    return translate.getBrowserLang();
}

/**
 * Entry module for POSY-OfficeConnect.
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useFactory: localeIdFactory,
            deps: [TranslateService]
        },
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
    public constructor(public translate: TranslateService) {
        // hier wird die Standardsprache gesetzt. Alle Komponenten können das dann nutzen.

        translate.addLangs(["de"]);
        translate.setDefaultLang("de");
        translate.use("de");
    }
}
