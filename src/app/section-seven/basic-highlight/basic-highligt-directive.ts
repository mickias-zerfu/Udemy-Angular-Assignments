import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    // tslint:disable-next-line: typedef
    ngOnInit() {
       this.elementRef.nativeElement.style.backgroundColor = 'blue';
    }
}
