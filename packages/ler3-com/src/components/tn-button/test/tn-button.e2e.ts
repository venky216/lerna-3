import { newE2EPage } from '@stencil/core/testing';

describe('tn-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tn-button></tn-button>');

    const element = await page.find('tn-button');
    expect(element).toHaveClass('hydrated');
  });
});
