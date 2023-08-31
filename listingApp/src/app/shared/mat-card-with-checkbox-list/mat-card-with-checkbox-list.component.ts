import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-card-with-checkbox-list',
  templateUrl: './mat-card-with-checkbox-list.component.html',
  styleUrls: ['./mat-card-with-checkbox-list.component.scss']
})
export class MatCardWithCheckboxListComponent implements OnChanges {
  searchValue: FormControl = new FormControl();
  @Input() list: any;
  @Input() component: any;
  @Input() header: any;
  @Input() InputPlaceholder: any;
  listbackup: any
  searchTermValue: any;

  ngOnChanges() {
    this.listbackup = this.list;
  }

  // function to retrieve data when user use backspace in search field and at the same time save the search values.
  onSearchText() {
    this.searchTermValue = this.searchValue.value.toLowerCase();
    if (this.searchTermValue.length == "0") {
      this.list = this.listbackup;
    }

  }
  // function to clear search field value
  clearSearchField() {
    
    this.searchValue.reset();
    this.searchTermValue = "";
    this.list = this.listbackup;
  }
}
