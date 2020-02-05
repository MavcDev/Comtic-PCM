import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInfoDetailComponent } from './bar-info-detail.component';

describe('BarInfoDetailComponent', () => {
  let component: BarInfoDetailComponent;
  let fixture: ComponentFixture<BarInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
