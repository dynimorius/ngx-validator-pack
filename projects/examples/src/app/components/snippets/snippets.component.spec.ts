import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsComponent } from './snippets.component';

describe('SnippetsComponent', () => {
  let component: SnippetsComponent;
  let fixture: ComponentFixture<SnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
