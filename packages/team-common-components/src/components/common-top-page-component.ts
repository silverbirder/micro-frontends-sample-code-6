import { LitElement, html, css } from 'lit-element';

export default class CommonTopPageComponent extends LitElement {
  static dependencies() {
    return []
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      Top Page
    `;
  }
}