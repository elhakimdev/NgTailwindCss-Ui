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

  /**
   * Toogle bewtween show and hide
   * 
   * @param event Event
   */
  toogleShowContent(event: Event){
    this.isExpanded = !this.isExpanded;
    
    let currentActiveElement = (event.target as Element)

    currentActiveElement.parentElement?.setAttribute('aria-expanded', 'true');

    const currentActiveIcon = (currentActiveElement.parentNode?.childNodes[0] as Element);

    this.rotateExpandedIcon(currentActiveIcon);
  }

  /**
   * Hide initializer
   */
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

  /**
   * Rotate given specific element
   * 
   * @param el Element
   */
  rotateExpandedIcon(el: Element): void{
    this.isExpanded ? el.children[1].classList.add('rotate-180') : el.children[1].classList.remove('rotate-180');
  }
}
