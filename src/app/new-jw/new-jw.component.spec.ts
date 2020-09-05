import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJwComponent } from './new-jw.component';

describe('NewJwComponent', () => {
  let component: NewJwComponent;
  let fixture: ComponentFixture<NewJwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
