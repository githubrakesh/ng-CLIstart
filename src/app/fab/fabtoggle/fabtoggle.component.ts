import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fabtoggle',
  templateUrl: './fabtoggle.component.html',
  styleUrls: ['./fabtoggle.component.css']
 ,  encapsulation: ViewEncapsulation.None
})
export
  class FabtoggleComponent {
  @Input()
  icon;
  @Output()
  onClick = new EventEmitter();

}
