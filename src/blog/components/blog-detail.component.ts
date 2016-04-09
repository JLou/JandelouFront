import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {BlogPost} from '../blogpost';
import {BlogService} from '../services/blog.service';

@Component({
    selector: 'blog-detail',
    templateUrl: './blog-detail.component.html',
    moduleId: module.id,
})

export class BlogPostDetailComponent implements OnInit {

    post: BlogPost;

    constructor(private _blogService: BlogService,
                private _routeParams: RouteParams) { }

    ngOnInit() {
        var id = +this._routeParams.get('id');
        this._blogService.getPost(id)
        .then(p => this.post = p);
     }
}