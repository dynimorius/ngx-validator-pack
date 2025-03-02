import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenExamplesComponent } from './template-driven-examples.component';

describe('TemplateDrivenExamplesComponent', () => {
  let component: TemplateDrivenExamplesComponent;
  let fixture: ComponentFixture<TemplateDrivenExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
