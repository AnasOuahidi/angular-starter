import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

// declare const mdc: any;

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'app'}),
        RouterModule.forRoot(ROUTES),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        // mdc.autoInit();
    }
}
