import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipetsComponent } from './snippets.component';

describe('SnipetsComponent', () => {
  let component: SnipetsComponent;
  let fixture: ComponentFixture<SnipetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnipetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnipetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
