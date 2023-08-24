import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const links = this.elementRef.nativeElement.querySelectorAll('.nav-links a');
        links.forEach(link => {
          if (link.getAttribute('href') === event.url) {
            this.renderer.addClass(link, 'active');
          } else {
            this.renderer.removeClass(link, 'active');
          }
        });
      });
  }

  ngOnInit(): void {
  }
}
