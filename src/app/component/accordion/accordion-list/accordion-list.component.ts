import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css'],
})
export class AccordionListComponent implements OnInit {
  @Input() HeaderText: string = '';

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleShowContent(event: Event){
    this.isExpanded = !this.isExpanded;
    
    let currentActiveElement = (event.target as Element)

    currentActiveElement.parentElement?.setAttribute('aria-expanded', 'true');
  }
}
