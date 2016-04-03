import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';

import {BlogService} from '../services/blog.service';
import {BlogListComponent} from './blog-list.component';

@Component({
    selector: 'blog',
    moduleId: module.id,
    templateUrl: './blog.component.html',
    providers: [BlogService],
    directives: [ROUTER_DIRECTIVES, RouterOutlet ]
})
@RouteConfig([
  {path:'/',    name: 'BlogList', component: BlogListComponent, useAsDefault:true},
  //{path:'/:id', name: 'BlogDetail', component: AlbumDetailComponent},
])
export class BlogComponent {

//    constructor() { }

//    ngOnInit() { }
}
