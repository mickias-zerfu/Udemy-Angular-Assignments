import { HostBinding, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetteHighlight]'
})
export class BetteHighlightDirective implements OnInit{
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  // tslint:disable-next-line: no-trailing-whitespace
  constructor(private elementR: ElementRef, private renderer: Renderer2) { 
  }
  // tslint:disable-next-line: typedef
    ngOnInit() {
      this.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(this.elementR.nativeElement, 'background-color', 'green');
  }


  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementR.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementR.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
