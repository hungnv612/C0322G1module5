import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhVienComponent } from './benh-vien.component';

describe('BenhVienComponent', () => {
  let component: BenhVienComponent;
  let fixture: ComponentFixture<BenhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
