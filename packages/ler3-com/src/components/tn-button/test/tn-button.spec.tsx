import { newSpecPage } from '@stencil/core/testing';
import { TnButton } from '../tn-button';

describe('tn-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TnButton],
      html: `<tn-button></tn-button>`,
    });
    expect(page.root).toEqualHtml(`
      <tn-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tn-button>
    `);
  });
});
