import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.components';
import {AuthorsComponent} from './authors.components';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular 2 App</h1><courses></courses><authors></authors>',
    directives:[CoursesComponent,AuthorsComponent]
})
export class AppComponent { }