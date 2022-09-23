import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadalgorithmComponent } from './uploadalgorithm.component';

describe('UploadalgorithmComponent', () => {
  let component: UploadalgorithmComponent;
  let fixture: ComponentFixture<UploadalgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadalgorithmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadalgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
