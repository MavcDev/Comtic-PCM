import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNextComponent } from './label-next.component';

describe('LabelNextComponent', () => {
  let component: LabelNextComponent;
  let fixture: ComponentFixture<LabelNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
