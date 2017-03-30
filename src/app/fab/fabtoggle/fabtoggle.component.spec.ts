import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabtoggleComponent } from './fabtoggle.component';

describe('FabtoggleComponent', () => {
  let component: FabtoggleComponent;
  let fixture: ComponentFixture<FabtoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabtoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabtoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
