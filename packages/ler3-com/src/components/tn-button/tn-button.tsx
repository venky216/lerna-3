import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'tn-button',
  styleUrl: 'tn-button.css',
  shadow: false,
})
export class TnButton {
@Prop() text: string;
  render() {
    return (
      <Host>
        <button class='btn'>{this.text}</button>
      </Host>
    );
  }

}
