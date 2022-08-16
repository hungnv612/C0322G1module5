import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoComponent } from './colo.component';

describe('ColoComponent', () => {
  let component: ColoComponent;
  let fixture: ComponentFixture<ColoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
