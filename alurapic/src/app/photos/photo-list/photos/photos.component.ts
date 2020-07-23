import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) // when photos be changed this if going to be true
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3)); // it going to pick it up 3 in 3 photos and add it in newRows
                            //   0       3
    }
    return newRows;
  }

}
