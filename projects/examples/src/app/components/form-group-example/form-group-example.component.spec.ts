import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupExampleComponent } from './form-group-example.component';

describe('FormGroupExampleComponent', () => {
  let component: FormGroupExampleComponent;
  let fixture: ComponentFixture<FormGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
