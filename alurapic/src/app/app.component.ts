import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root', //view or template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos: any[] = [];

  //constructor only to injection dependency
  constructor(private photoService: PhotoService) { }


  //it will be call after class be builded
  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}