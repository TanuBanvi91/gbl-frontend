import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabformsDashboardComponent } from './labforms-dashboard.component';

describe('LabformsDashboardComponent', () => {
  let component: LabformsDashboardComponent;
  let fixture: ComponentFixture<LabformsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabformsDashboardComponent]
    });
    fixture = TestBed.createComponent(LabformsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
