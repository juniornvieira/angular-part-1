import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '70%';

    constructor(
        private el: ElementRef,         //Angular gonna give the DOM reference where this directive is being used.
        private render: Renderer) { }   //There is no DOM in server side. For that reason we need use de render

    @HostListener('mouseover')              //HostListener will listener mouseover in the host element photos.component.html > div
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`); //template string
    }
    
    @HostListener('mouseleave')
    darkenOff() {                           
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}