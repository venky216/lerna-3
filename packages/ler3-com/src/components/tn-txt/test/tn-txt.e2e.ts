import { newE2EPage } from '@stencil/core/testing';

describe('tn-txt', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tn-txt></tn-txt>');

    const element = await page.find('tn-txt');
    expect(element).toHaveClass('hydrated');
  });
});
