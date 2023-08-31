import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {FormControl} from '@angular/forms';

import { AppService } from '../app.service';
import { LoaderService } from '../shared/loader/loader.service';
@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, SharedModule ],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countrySearch: FormControl = new FormControl();
  subsciption: any;
  countryList: any;
  component:any="country";
  header:any="MANAGE COUNTRIES";
  placeholder:any="Search country";
  
  constructor(private appServ: AppService,private loaderService: LoaderService) { }
  ngOnInit(): void {
    this.getCountryDetails();
  }
 

  // function to fetch country data for the listing

  getCountryDetails() {
    this.loaderService.show();
    this.subsciption = this.appServ.getCountryData().subscribe((res: any) => {
      if(res && res.length){
        this.loaderService.hide();
        this.countryList = res;
      }
      
      
    });
  }
}
