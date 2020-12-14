//@ts-ignore
import { LitElement, html, css } from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export default class XComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      Hello from lit-element!
    `;
  }
}