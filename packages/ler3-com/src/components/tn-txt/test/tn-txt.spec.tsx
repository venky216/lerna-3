import { newSpecPage } from '@stencil/core/testing';
import { TnTxt } from '../tn-txt';

describe('tn-txt', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TnTxt],
      html: `<tn-txt></tn-txt>`,
    });
    expect(page.root).toEqualHtml(`
      <tn-txt>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tn-txt>
    `);
  });
});
