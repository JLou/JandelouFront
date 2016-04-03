import { Component, OnInit} from 'angular2/core';
import { RouteParams} from 'angular2/router';

import {Album} from '../album';
//import {Picture} from '../picture';
import {AlbumsService} from '../services/albums.service';

@Component({
    selector: 'album-detail',
    templateUrl: './album-detail.component.html',
    moduleId: module.id
})

export class AlbumDetailComponent implements OnInit {
    album: Album;

    //pictures : Picture[];

    constructor(private _albumService : AlbumsService,
                private _routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._albumService.getAlbum(id)
            .then(a => {
                this.album = a;
            });
    }
}
