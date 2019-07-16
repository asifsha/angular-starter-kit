import { Component, OnInit, ElementRef, Renderer, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {

  @Output() onMenuClicked: EventEmitter<any> = new EventEmitter();

  constructor(private el:ElementRef, private renderer:Renderer) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event.target'])
  onClick(target){
    let item = this.el.nativeElement.querySelector('li');

    this.onMenuClicked.emit();
    //alert(item);
  }

}
