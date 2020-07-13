import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ], // visible to all components in this module
    imports: [HttpClientModule]
})
export class PhotosModule { }