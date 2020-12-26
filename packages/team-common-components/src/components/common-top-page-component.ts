import { LitElement, html, css } from 'lit-element';

export default class CommonTopPageComponent extends LitElement {
  static dependencies() {
    return ['search-box']
  }

  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      <search-box></search-box>
    `;
  }
}