import { NgControl } from "@angular/forms";
import { ShowValidationDirective } from "./show-validation.directive";
import { ElementRef, Renderer2 } from "@angular/core";
import { TestBed } from "@angular/core/testing";

describe("ShowValidationDirective", () => {
  TestBed.configureTestingModule({
    providers: [ElementRef, Renderer2, NgControl],
  });

  let elementRef: ElementRef;
  let renderer: Renderer2;
  let control: NgControl;

  it("should create an instance", () => {
    const directive = new ShowValidationDirective(
      elementRef,
      renderer,
      control
    );
    expect(directive).toBeTruthy();
  });
});
