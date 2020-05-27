import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancComponent } from './loanc.component';

describe('LoancComponent', () => {
  let component: LoancComponent;
  let fixture: ComponentFixture<LoancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
