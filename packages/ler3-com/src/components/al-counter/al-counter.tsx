import { Component, ComponentInterface, Event, EventEmitter, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'al-counter',
  styleUrl: 'al-counter.scss',
  shadow: true,
})
export class AlCounter implements ComponentInterface {
  @Prop() min: number = null;
  @Prop() max: number = null;

  @State() number: number = this.min || 0;

  @Event() alChange: EventEmitter<number>;
  onChangeHandler(number: number) {
    this.alChange.emit(number);
  }

  increment = () => {
    if (typeof this.max === "number" && this.number >= this.max) {
      return;
    }
    this.number = this.number + 1;
    this.onChangeHandler(this.number);
  }

  decrement = () => {
    if (typeof this.min === "number" && this.number <= this.min) {
      return;
    }
    this.number = this.number - 1;
    this.onChangeHandler(this.number);
  }
  
  render() {
    return (
      <div class="counter">
        <button 
          disabled={typeof this.min === "number" && this.number <= this.min}
          onClick={this.decrement}>-</button>
        <p>{this.number}</p>
        <button
          disabled={typeof this.max === "number" && this.number >= this.max}
          onClick={this.increment}>+</button>
      </div>
    );
  }
}
