import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, OnChanges {

  @Input() collapse: string = '';

  constructor() { }

  ngOnInit(): void {
    // if (this.collapse === 'auto') {
    //   const listElements = document.querySelectorAll('#acccordion-list');
    //   for (let i = 0; i < listElements.length; i++) {
    //     const element = listElements[i].hasAttribute('aria-expanded');
    //     console.log(element);        
    //   }
    // }
  }
  ngOnChanges():void{
    // if (this.collapse === 'auto') {
    //   const listElements = document.querySelectorAll('#acccordion-list');
    //   for (let i = 0; i < listElements.length; i++) {
    //     const element = listElements[i].hasAttribute('aria-expanded');
    //     console.log(element);        
    //   }
    // }
  }

}
