import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[dateTime]'
})
export class DateFormatterDirective implements OnInit{

  element: ElementRef

  processDate(input: string) {
    let dia = input.substr(0, 2);
    let mes = input.substr(2, 2);
    let ano = input.substr(4, 4);
    let hra = input.substr(8, 2);
    let min = input.substr(10, 2);

    let dt = new Date(parseInt(ano), parseInt(mes)-1, parseInt(dia));

    let diaSemana = [
      "D", "Seguuuuuuuuunda", "Teeeeeeeerça", "Quaaarta", "Quinta", "Sexta", "Sab"
    ]

    return `${dia}/${mes}/${ano} ${hra}:${min} - ${diaSemana[dt.getDay()]}`;  
  };

  constructor(element: ElementRef) {
    this.element=element
  }

  ngOnInit(){
    let input = this.element.nativeElement.innerText;
    this.element.nativeElement.innerText = this.processDate(input);
  }

}
