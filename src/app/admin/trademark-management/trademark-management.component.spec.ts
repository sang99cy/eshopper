import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkManagementComponent } from './trademark-management.component';

describe('TrademarkManagementComponent', () => {
  let component: TrademarkManagementComponent;
  let fixture: ComponentFixture<TrademarkManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
