import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBaseComponent } from './img-base.component';

describe('ImgBaseComponent', () => {
  let component: ImgBaseComponent;
  let fixture: ComponentFixture<ImgBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
