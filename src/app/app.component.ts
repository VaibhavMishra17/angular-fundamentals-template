import {Component, OnInit} from '@angular/core';
import {UserStoreService} from "./user/services/user-store.service";
import {Router} from "@angular/router";
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'courses-app';

  userName = '';
  isAuthorized = false;

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isAuthorized$.subscribe(res => {
      this.isAuthorized = res.valueOf();
      this.userStoreService.getUser().subscribe();
    })
    this.userStoreService.name$.subscribe(name => {
      this.userName = name.valueOf();
    })
  }

  singUp(){
    this.router.navigate(['/registration']);
  }

  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate([this.authService.getLoginUrl()]);
    });
  }
}
