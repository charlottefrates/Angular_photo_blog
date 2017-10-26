import { Component } from '@angular/core';

@Component({
    //this inserts our component into the HTML placeholder element
    selector: 'app-root',
    template: '<h2> Hello Charlotte\'s Angular App! </h2>',
    styles: [
        `
        h2 {
            font-family: sans;
            font-size: 1.2em; 
        }
        `
    ]
})

export class AppComponent {


}