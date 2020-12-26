import { LitElement, html, css } from 'lit-element';

export default class ProductBoxComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      this is product
    `;
  }
}