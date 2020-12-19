import { LitElement, html, css } from 'lit-element';

export default class SearchBoxComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      <input type="text"></input>
    `;
  }
}