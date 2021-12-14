import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbUser } from '@nebular/auth';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: NbUser;
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(
    private sidebarService: NbSidebarService,
    private authService: NbAuthService,
  ) {
    this.user = new NbUser(1, 'abc@abc.com');
    this.user.fullName = 'Ben W'
  }

  get userName() {
    return this.user?.fullName as string;
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true);
  }
}
