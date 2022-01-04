import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() collapse: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.collapse === 'auto') {
      console.log(document.getElementsByTagName('app-accordion-list'));
    }
  }

}
