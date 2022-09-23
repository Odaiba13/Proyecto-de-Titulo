import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcaseComponent } from './uploadcase.component';

describe('UploadcaseComponent', () => {
  let component: UploadcaseComponent;
  let fixture: ComponentFixture<UploadcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
