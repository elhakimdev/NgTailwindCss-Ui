import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css']
})
export class AccordionListComponent implements OnInit {
  @Input() HeaderText: string = '';

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleShowContent(){
    this.isExpanded = !this.isExpanded;
  }

}
