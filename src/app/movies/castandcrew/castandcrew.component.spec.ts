import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastandcrewComponent } from './castandcrew.component';

describe('CastandcrewComponent', () => {
  let component: CastandcrewComponent;
  let fixture: ComponentFixture<CastandcrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastandcrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastandcrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
