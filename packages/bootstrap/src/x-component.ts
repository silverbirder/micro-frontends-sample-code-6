import { LitElement, html, css } from 'lit-element';

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