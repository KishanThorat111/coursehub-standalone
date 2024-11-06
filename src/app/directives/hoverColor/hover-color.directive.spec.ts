import { HoverColorDirective } from './hover-color.directive';
import { ElementRef } from '@angular/core';

describe('HoverColorDirective', () => {
  let mockElementRef: ElementRef;
  let directive: HoverColorDirective;

  beforeEach(() => {
    mockElementRef = { nativeElement: document.createElement('div') };
    directive = new HoverColorDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set the default color on initialization', () => {
    directive.defaultColor = 'black';
    // directive.ngOnInit();
    expect(mockElementRef.nativeElement.style.color).toBe('black');
  });

  it('should set hover color on mouse enter', () => {
    directive.hoverColor = 'orange';
    directive.onMouseEnter();
    expect(mockElementRef.nativeElement.style.color).toBe('orange');
  });

  it('should reset to default color on mouse leave', () => {
    directive.defaultColor = 'black';
    directive.onMouseLeave();
    expect(mockElementRef.nativeElement.style.color).toBe('black');
  });
});
