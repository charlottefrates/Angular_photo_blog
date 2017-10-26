//root module of application

//NgModule is foundation of any angular app
//There must be at least one NgModule for our app to work
import { NgModule } from '@angular/core';

//BrowserModule is a package for browser-specific features
import { BrowserModule } from '@angular/platform-browser';

//Import App Component
import { AppComponent } from './app.component';

//Metadata is information used by Angular to associate style sheets, HTML templates and other settings in individual modules or components
//use a decorator - if you add a decorator or class/property you are post processing it
//Angular's compiler pens on them to map each components and to compose the application efficiently 

@NgModule({
    //Adding imports array allows angular to know that the app will used in a web browser
    //and will pack their BrowserModule with the AppModule when Angular compiles our application
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { 




}