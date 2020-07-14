import { Directive, Input, HostListener, ElementRef, OnInit, Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[appLoadMore]'
})
export class LoadMoreDirective implements OnInit{
  constructor(private element: ElementRef) {}
  @Input() loadMore;
  @HostListener('window:scroll')
  public onScroll() {
    let elementPos = this.element.nativeElement.children.item(this.element.nativeElement.children.length -1).offsetTop + 200 ;
    let maxHeight = window.scrollY + window.innerHeight;
    if(elementPos  < maxHeight) {
     this.loadMore()
    }
  }

  ngOnInit() {
    this.loadMore();

  }

}
