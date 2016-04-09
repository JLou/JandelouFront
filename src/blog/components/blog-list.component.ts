import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {BlogService} from '../services/blog.service';
import {BlogPost} from '../blogpost';

@Component({
    selector: 'blog-list',
    moduleId: module.id,
    templateUrl: './blog-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class BlogListComponent implements OnInit {

    posts: BlogPost[];

    constructor(private _blogService: BlogService) { }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this._blogService.getPosts(1, 5)
        .then(posts => this.posts = posts);
    }
}
