import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionListComponent
  ]
})
export class AccordionModule { }
