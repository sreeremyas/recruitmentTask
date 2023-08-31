import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AppService } from '../app.service';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  paymentSearch: FormControl = new FormControl();
  subsciption: any;
  component: any = "payment";
  header: any = "MANAGE PAYMENTS";
  placeholder: any = "Search payments"
  paymentList: any;

  constructor(private appServ: AppService, private loaderService: LoaderService) { }
  ngOnInit(): void {
    this.getPaymentDetails();
  }

  // function to fetch payment data for the listing
  getPaymentDetails() {
    this.loaderService.show();
    this.subsciption = this.appServ.getPaymentData().subscribe((res: any) => {

      const getStatusCounts = (statusNames: any) =>
        Array.from(new Map(statusNames.map((status: any) => [status, statusNames.filter((s: any) => s === status).length])))
          .map(([status, count]) => ({ status, count }));
      if (res && res.length) {
        this.loaderService.hide();
        const statusNames = res.map((filterStatus: any) => filterStatus.status)
        this.paymentList = getStatusCounts(statusNames);
      }


    });
  }
}
