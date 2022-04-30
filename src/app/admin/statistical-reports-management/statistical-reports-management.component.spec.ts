import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalReportsManagementComponent } from './statistical-reports-management.component';

describe('StatisticalReportsManagementComponent', () => {
  let component: StatisticalReportsManagementComponent;
  let fixture: ComponentFixture<StatisticalReportsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalReportsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalReportsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
