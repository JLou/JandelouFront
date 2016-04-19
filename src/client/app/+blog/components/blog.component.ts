import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';

import {BlogService} from '../services/blog.service';
import {BlogListComponent} from './blog-list.component';
import {BlogPostDetailComponent} from './blog-detail.component';

@Component({
    selector: 'blog',
    templateUrl: 'app/+blog/components/blog.component.html',
    providers: [BlogService],
    directives: [ROUTER_DIRECTIVES, RouterOutlet ]
})
@RouteConfig([
  {path:'/',    name: 'BlogList', component: BlogListComponent, useAsDefault:true},
  {path:'/:id',    name: 'BlogPostDetail', component: BlogPostDetailComponent},
])
export class BlogComponent {

//    constructor() { }

//    ngOnInit() { }
}
