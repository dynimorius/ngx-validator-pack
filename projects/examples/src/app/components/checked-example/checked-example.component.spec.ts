import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedExampleComponent } from './checked-example.component';

describe('CheckedExampleComponent', () => {
  let component: CheckedExampleComponent;
  let fixture: ComponentFixture<CheckedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
