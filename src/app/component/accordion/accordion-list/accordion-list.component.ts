import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css'],
})
export class AccordionListComponent implements OnInit {
  @Input() HeaderText: string = '';
  @Input() expanded: boolean = false;

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.hideInitialContent();
  }

  toogleShowContent(event: Event){
    this.isExpanded = !this.isExpanded;
    
    let currentActiveElement = (event.target as Element)

    currentActiveElement.parentElement?.setAttribute('aria-expanded', 'true');

    // but we must check if autocollapsible feature is on we must handle it also ;

  }

  hideInitialContent(){
    let nodes = self.document.querySelectorAll('div#accordion-list');

    if (this.expanded) {
      this.isExpanded = this.expanded;

      nodes.forEach(node => {
        node.setAttribute('aria-expanded', 'true');
      });
    } else {
      this.isExpanded = false;

      nodes.forEach(node => {
        node.setAttribute('aria-expanded', 'false');
      });
    }
  }
}
