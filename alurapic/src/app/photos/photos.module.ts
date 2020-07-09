import { NgModule } from "@angular/core";
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PhotoComponent], // visible to all components in this module
    exports: [PhotoComponent], // export or make it accessable to who call
    imports: [HttpClientModule]
})
export class PhotosModule { }