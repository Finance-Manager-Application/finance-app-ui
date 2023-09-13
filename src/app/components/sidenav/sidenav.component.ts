import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidebarCompressed = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private authService: AuthService, 
    private dialog: MatDialog
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

  logout() {
    const dialogRef = this.dialog.open(LogoutComponent, {
      autoFocus: false
      // width: '500px',
      // height: '800px' 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
  
}
