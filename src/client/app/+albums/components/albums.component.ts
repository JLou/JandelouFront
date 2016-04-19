import {Component} from 'angular2/core';
import {Album} from '../album';
import {AlbumListComponent} from './album-list.component';
import {AlbumDetailComponent} from './album-detail.component';
import {AlbumsService} from '../services/albums.service';

//import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
  selector: 'sd-albums',
  templateUrl: 'app/+albums/components/albums.component.html',
  styleUrls: ['app/+albums/components/albums.component.css'],
  directives: [ROUTER_DIRECTIVES, RouterOutlet ],
  providers: [AlbumsService],
})
@RouteConfig([
  {path:'/',    name: 'AlbumList', component: AlbumListComponent, useAsDefault:true},
  {path:'/:id', name: 'AlbumDetail', component: AlbumDetailComponent},
])
export class AlbumsComponent {

    albums: Album[];

    //constructor() {}

    //ngOnInit() {}
}
