import {LitElement, html, css } from 'lit-element';

export default class SearchPageComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      Keyword is ${new URLSearchParams(location.search).get('k') || 'none'}
    `;
  }
}