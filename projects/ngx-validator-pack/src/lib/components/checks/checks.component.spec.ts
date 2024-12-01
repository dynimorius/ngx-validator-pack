import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksComponent } from './checks.component';

describe('ChecksComponent', () => {
  let component: ChecksComponent;
  let fixture: ComponentFixture<ChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
