import {LitElement, html, css } from 'lit-element';

export default class CommonSearchPageComponent extends LitElement {
  static dependencies() {
    return ['search-box'];
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
      Keyword is ${new URLSearchParams(location.search).get('k') || 'none'}
    `;
  }
}