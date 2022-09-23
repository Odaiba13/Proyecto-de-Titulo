import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalgorithmsComponent } from './myalgorithms.component';

describe('MyalgorithmsComponent', () => {
  let component: MyalgorithmsComponent;
  let fixture: ComponentFixture<MyalgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyalgorithmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyalgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
