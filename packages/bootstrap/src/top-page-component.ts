import { LitElement, html, css } from 'lit-element';

export default class TopPageComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      Top Page
    `;
  }
}