import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDivLoop]'
})
export class DivLoopDirective implements OnInit{
 
  @Input() styleWidth: number;

  @Input() counts: number;

  @Input() verticalMargin: number;

  @Input() horizontalMargin: number;

  @Input() styleHeight: number;

  @Input() text: string;
  constructor(private el: ElementRef) { 
    
  }

  ngOnInit() {
    let htmlEdit: string = "";
    let width = this.styleWidth;
    let height = this.styleHeight;
    for (let i = 0; i < this.counts; i++) {
      htmlEdit += `<div style="padding-left:${this.horizontalMargin}px; padding-right:${this.horizontalMargin}px;
                        padding-top:${this.verticalMargin}px;
                        padding-bottom:${this.verticalMargin}px;
                        width: ${width}px;
                        height: ${height}px;"
                     >`;

                     width -= 2*this.horizontalMargin;
                     height-= 2*this.verticalMargin;
    }
    htmlEdit += `<marquee behavior="scroll" direction="left">${this.text}</marquee>`
    for (let i = 0; i < this.counts; i++) {
      htmlEdit += `</div>`;
                 
    }
    this.el.nativeElement.innerHTML = htmlEdit;
  }
  

}
