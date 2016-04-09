import {Injectable} from 'angular2/core';

//import {BlogPost} from '../blogpost';

@Injectable()
export class BlogService {

    posts = [
      {'id': 0, 'title':'First post', 'content': 'blablabla', 'author': 'isabelle'},
      {'id': 1, 'title':'Second post', 'content': 'blablabla', 'author': 'isabelle'},
    ];

//    constructor() { }

    getPosts(page:number, perPage:number) {
        return Promise.resolve(this.posts).then(
            posts => {
                return posts.sort((n1,n2) => n1.id - n2.id);
            }
        );
    }

    getPost(id:number) {
        return Promise.resolve(this.posts).then(
            posts => posts.filter(post => post.id === id)[0]
        );
    }
}
