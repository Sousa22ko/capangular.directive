import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyBrl]'
})
export class CurrencyBrlDirective {

  private el: HTMLInputElement;

  constructor(private element: ElementRef,
              private currencyPipe: CurrencyPipe) {
    this.el = this.element.nativeElement;
    this.element=element
  }

  @HostListener('document:keydown', ["$event.target.value"])  
  type(value: string){
    this.el.value = this.currencyPipe.transform(value.replace(/R\$/g, ''), 'BRL') + '';
  }

}
