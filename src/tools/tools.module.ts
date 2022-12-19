import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import {FuiNavigateModule} from "@solenopsys/uimatrix-layouts";
import {IconsPageComponent} from "./icons-page/icons-page.component";
import {IconsSectionPageComponent} from "./icons-section-page/icons-section-page.component";

import {UtilsGlobalsModule} from "@solenopsys/lib-globals";
import {ClipboardModule} from "ngx-clipboard";
import {FuiTemplatesModule} from "@solenopsys/uimatrix-templates";
import {FuiIconsModule} from "../lib/fui-icons.module";


const routes: Routes = [
    {path: '', redirectTo: '01-Interface-Essential', pathMatch: 'full'},

    {
        path: 'icons',
        component: IconsPageComponent,
        children: [{path: ':section', component: IconsSectionPageComponent}]
    },

];

export const PROVIDERS_CONF = [
    {provide: 'assets_dir', useValue: "/fm/modules/alexstorm/icons"},
    {provide: 'mod_name', useValue: "icons"}
]

export const IMPORTS_CONF = [
    BrowserModule,
    RouterModule,
    ClipboardModule,
    RouterModule.forChild(routes),
]


@NgModule({
    declarations: [IconsPageComponent, IconsSectionPageComponent],
    imports: [
        ...IMPORTS_CONF,
        FuiNavigateModule,

        UtilsGlobalsModule,
        FuiIconsModule
    ],
    providers: [...PROVIDERS_CONF],
    bootstrap: [],
    exports: []
})
export class ToolsIconsModule {
}