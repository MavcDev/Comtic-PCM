import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineQuestionComponent } from './line-question.component';

describe('LineQuestionComponent', () => {
  let component: LineQuestionComponent;
  let fixture: ComponentFixture<LineQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
