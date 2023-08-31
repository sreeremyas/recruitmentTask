import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.scss']
})
export class CheckboxlistComponent {
  @Input() list: any;
  @Input() component: any;
  @Input() searchTerm: any = '';
  arrayList: any;

  constructor() { }


}
