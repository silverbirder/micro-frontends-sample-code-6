import { LitElement, html, css } from 'lit-element';

export default class SearchBoxComponent extends LitElement {
  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <input type="text"></input>
    `;
  }
}