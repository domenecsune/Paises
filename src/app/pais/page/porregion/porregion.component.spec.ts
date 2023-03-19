import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorregionComponent } from './porregion.component';

describe('PorregionComponent', () => {
  let component: PorregionComponent;
  let fixture: ComponentFixture<PorregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
