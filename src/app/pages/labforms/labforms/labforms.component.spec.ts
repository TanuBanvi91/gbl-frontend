import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabformsComponent } from './labforms.component';

describe('LabformsComponent', () => {
  let component: LabformsComponent;
  let fixture: ComponentFixture<LabformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabformsComponent]
    });
    fixture = TestBed.createComponent(LabformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
