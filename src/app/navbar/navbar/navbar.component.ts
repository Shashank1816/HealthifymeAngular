import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, public appservice: AppService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  logout(){
    this.appservice.globalloggedinuser = null;
    this.router.navigateByUrl('');
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
  }
  //if we click on login button the url should change to /login
  // routelogin(){
  //   this.router.navigateByUrl("/login");
  // }
  // routeregister(){
  //   this.router.navigateByUrl("/register");
  // }
  // routeforgotpass(){
  //   this.router.navigateByUrl("/forgotpass");
  // }

}
