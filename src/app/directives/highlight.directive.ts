import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
@HostBinding('style.backgroundColor') backgroundColor:string='transparent';

  constructor(private elRef:ElementRef,private renderer:Renderer2) {

  }

  ngOnInit(): void {
  this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
  }

  @HostListener('mouseenter') mouserOver(eventData :Event){
    this.backgroundColor='blue';
  }
  @HostListener('mouseleave') mouseLeave(eventData :Event){
    this.backgroundColor='transparent';

  }
  @HostListener('mouseup') mouseUp(eventData :Event){
    this.backgroundColor='red';

  }
  @HostListener('mouseout') mouseOut(eventData :Event){
    this.backgroundColor='pink';

  }




}
