import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AppService } from '../app.service';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,
    SharedModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,OnDestroy {
  subsciption:any;
  component:any="user";
  header:any="MANAGE TEAM";
  placeholder:any="Search team"


  userList:any=[];
  
 
  constructor(private appServ: AppService,private loaderService: LoaderService) {}
 
  
  ngOnInit(): void {
  this.getUserDetails();
  }

  // function to fetch User data for the listing
  getUserDetails(){
    this.loaderService.show();
    this.subsciption = this.appServ.getUserData().subscribe((res:any) => {
      if(res){
        this.loaderService.hide();
        this.userList=res;
      }
      
     
    });

  }
 
  ngOnDestroy(): void {
    this.subsciption.unsubscribe()
   }
}

