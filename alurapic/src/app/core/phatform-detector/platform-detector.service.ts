import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }
    // we are injecting PLATFORM_ID value in platformId. otherwise it would be empty string

    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId);
        //this id platformId will to say yes/true isPlatformBrowser
    }
}