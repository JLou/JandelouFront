import {Injectable} from 'angular2/core';

import {Album} from '../album';
import {Picture} from '../picture';

@Injectable()
export class AlbumsService {
  empty: Picture[];

  albums = [
    {'id': 1, 'name': 'Vacances', 'pictures': this.empty},
    {'id': 2, 'name': 'Paques', 'pictures': this.empty},
    {'id': 3, 'name': 'xzy', 'pictures': this.empty},
    {'id': 4, 'name': 'noel', 'pictures': this.empty},
    {'id': 5, 'name': 'anniv', 'pictures': this.empty},
  ];

  pictures = [
    {'id': 1, 'name': 'a', 'url': 'assets/jdl/a.png'},
    {'id': 2, 'name': 'b', 'url': 'assets/jdl/b.png'},
    {'id': 3, 'name': 'c', 'url': 'assets/jdl/c.png'},
    {'id': 4, 'name': 'd', 'url': 'assets/jdl/d.png'},
  ];

  getAlbums() {
    return Promise.resolve(this.albums);
  }

  getAlbum(id: number) {
      return Promise.resolve(this.albums).then(
          albums => {
              let a = albums.filter(album => album.id === id)[0];
              a.pictures = this.pictures;
              return a;
          }
      );
  }

  addAlbum(value: Album): void {
    this.albums.push(value);
  }

  getPictures(album: Album) {
    return Promise.resolve(this.pictures);
  }
}
