import { BaseControl } from './base.control';
import { JsonFormsRenderer } from '../renderer.util';
import { uiTypeIs, rankWith, RankedTester } from '../../core/testers';

/**
 * Default tester for text-based/string controls.
 * @type {RankedTester}
 */
export const textControlTester: RankedTester = rankWith(1, uiTypeIs('Control'));

/**
 * Default text-based/string control.
 */
@JsonFormsRenderer({
  selector: 'jsonforms-text',
  tester: textControlTester
})
export class TextControl extends BaseControl<HTMLInputElement> {

  /**
   * @inheritDoc
   */
  protected configureInput(input: HTMLInputElement): void {
    input.type = 'text';
    input.classList.add('form-control');
  }

  /**
   * @inheritDoc
   */
  protected get valueProperty(): string {
    return 'value';
  }

  /**
   * @inheritDoc
   */
  protected get inputChangeProperty(): string {
    return 'oninput';
  }

  /**
   * @inheritDoc
   */
  protected convertModelValue(value: any): any {
    return value === undefined ? '' : value;
  }

  /**
   * @inheritDoc
   */
  protected createInputElement(): HTMLInputElement {
    return document.createElement('input');
  }
}
