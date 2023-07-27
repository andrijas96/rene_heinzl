import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'core',
  templateUrl: './core.component.html',
})
export class CoreComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateChild', { read: ElementRef }) children:
    | QueryList<ElementRef>
    | undefined;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.children?.forEach((el: ElementRef) => {
      el.nativeElement.className =
        'opacity-0 translate-y-[5%] transition-all duration-700';
    });
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.children?.forEach((el: ElementRef) => {
      const componentPosition = el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition >= componentPosition - 450) {
        el.nativeElement.className =
          'opacity-1 translate-y-0 transition-all duration-700';
      } else {
      }
    });
  }
}
