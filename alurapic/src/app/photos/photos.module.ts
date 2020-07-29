import { NgModule } from '@angular/core';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';



@NgModule({
    imports: [
        PhotoModule,        //sub-modules are imported. And components are in declarations.
        PhotoFormModule,
        PhotoListModule,
    ]
})
export class PhotosModule { }