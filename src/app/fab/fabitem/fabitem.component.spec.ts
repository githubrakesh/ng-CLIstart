import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabitemComponent } from './fabitem.component';

describe('FabitemComponent', () => {
  let component: FabitemComponent;
  let fixture: ComponentFixture<FabitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
