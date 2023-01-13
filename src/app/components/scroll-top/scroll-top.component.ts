import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})

export class ScrollTopComponent {
  @ViewChild('button')
  button!: ElementRef;
  showButton = false;

  @HostListener('window:scroll')
  checkScroll() {
    // window.pageYOffset or window.scrollY
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= 100) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    (this.button.nativeElement as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

