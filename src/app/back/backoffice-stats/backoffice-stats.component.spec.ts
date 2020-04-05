import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeStatsComponent } from './backoffice-stats.component';

describe('BackofficeStatsComponent', () => {
  let component: BackofficeStatsComponent;
  let fixture: ComponentFixture<BackofficeStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
