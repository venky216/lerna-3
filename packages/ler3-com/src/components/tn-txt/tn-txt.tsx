import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tn-txt',
  styleUrl: 'tn-txt.css',
  shadow: true,
})
export class TnTxt {

  render() {
    return (
      <Host>
        <textarea></textarea>
      </Host>
    );
  }

}
