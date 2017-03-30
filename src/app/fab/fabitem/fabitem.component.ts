import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'app-fabitem',
  templateUrl: './fabitem.component.html',
  styleUrls: ['./fabitem.component.css']
  ,  encapsulation: ViewEncapsulation.None
})
export
  class FabitemComponent {
  @Input()
  icon;
  @Output()
  onClick = new EventEmitter();
  @ViewChild('anchor')
  element;
}
