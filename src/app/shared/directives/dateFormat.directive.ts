import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[dateTime]'
})
export class DateFormatterDirective implements OnInit{

  element: ElementRef

  processDate(input: string) {
    return `${input.substr(0, 2)}/${input.substr(2, 2)}/${input.substr(4, 4)} ${input.substr(8, 2)}:${input.substr(10, 2)}`;  
  };

  constructor(element: ElementRef) {
    this.element=element
  }

  ngOnInit(){
    let input = this.element.nativeElement.innerText;
    this.element.nativeElement.innerText = this.processDate(input);
  }

}
