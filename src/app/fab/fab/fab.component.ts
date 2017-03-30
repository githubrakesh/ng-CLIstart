import {
  Component, ViewEncapsulation,
  Input,
  ContentChildren,
  ContentChild,
  ElementRef,
  HostListener,
  AfterContentInit
} from '@angular/core';

import { FabtoggleComponent } from '../fabtoggle/fabtoggle.component';
import { FabitemComponent } from '../fabitem/fabitem.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
 ,encapsulation: ViewEncapsulation.None
})
export
  class FabComponent implements AfterContentInit {
  @Input()
  dir = 'right';
  @ContentChild(FabtoggleComponent)
  toggle;
  @ContentChildren(FabitemComponent)
  buttons;


  public _active;
  public element;

  get active() {
    return this._active;
  }

  set active(val) {
    this.updateButtons(val);
    this._active = val;
  }

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngAfterContentInit() {
    this.toggle.onClick.subscribe(() => {
      this.active = !this.active;
    });
  }

  getTranslate(idx) {
    if (this.dir === 'right') {
      return `translate3d(${60 * idx}px,0,0)`;
    } else if (this.dir === 'down') {
      return `translate3d(0,${60 * idx}px,0)`;
    } else {
      console.error(`Unsupported direction for Fab; ${this.dir}`);
    }
  }

  updateButtons(active) {
    let idx = 1;
    for (let btn of this.buttons.toArray()) {
      const style = btn.element.nativeElement.style;
      style['transition-duration'] = active ? `${90 + (100 * idx)}ms` : '';
      style['transform'] = active ? this.getTranslate(idx) : '';
      idx++;
    }
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target) {
    if (this.active && !this.element.contains(target)) {
      this.active = false;
    }
  }
}

