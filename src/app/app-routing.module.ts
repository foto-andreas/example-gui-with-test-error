import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * Basisrouten der POSY-OfficeConnect Oberflächen.
 */
export const APP_ROUTES: Routes = [
];

/**
 * Modul für die Basisrouten.
 */
@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTES,
            {
                onSameUrlNavigation: "reload",
                enableTracing: false,
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
