import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Album} from '../album';
import {AlbumsService} from '../services/albums.service';

@Component({
    templateUrl: './album-list.component.html',
    providers: [AlbumsService],
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES]
})
export class AlbumListComponent implements OnInit {

    albums: Album[];

    constructor(
        private _router: Router,
        private _albumsService: AlbumsService) {

    }

    ngOnInit() {
        this.getAlbums();
    }

    getAlbums() {
        this._albumsService.getAlbums().then(albums =>
            this.albums = albums);
    }

    onSelect(album: Album) {
        console.log(album);
        this._router.navigate(['AlbumDetail', {'id': album.id}]);
    }
}
