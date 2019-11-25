import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnfinishComponent } from './btnfinish.component';

describe('BtnfinishComponent', () => {
  let component: BtnfinishComponent;
  let fixture: ComponentFixture<BtnfinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnfinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnfinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
