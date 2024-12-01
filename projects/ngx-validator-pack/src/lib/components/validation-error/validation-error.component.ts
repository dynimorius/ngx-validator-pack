import { ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core'

/**
 * @internal
 * @description
 * A component showing the validation error to the user
 */
@Component({
  selector: '',
  standalone: true,
  imports: [],
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.css',
})
export class ValidationErrorComponent implements DoCheck{
  content!: HTMLDivElement;
  _class!: string;
  @ViewChild('errorContent') contentRef!: ElementRef;

  @Input() error!: string
  @Input() zIndex!: string | number;
  @Input() set class(css: string | undefined | null) {
    this._class = css ? css : 'dmz-validation-content'
  };
  @Input() style!: string;

  constructor(
    private readonly renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngDoCheck(): void {
    if(!this.content) {
      this.changeDetectorRef.detectChanges();
      this.content = this.contentRef.nativeElement;
    }

    this.renderer.setStyle(this.content, 'zIndex', `${this.zIndex}`);
  }
}
