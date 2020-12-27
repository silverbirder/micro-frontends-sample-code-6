import {LitElement, html, css } from 'lit-element';

export default class CommonSearchPageComponent extends LitElement {
  static dependencies() {
    return ['search-box-component'];
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <div>Keyword is ${new URLSearchParams(location.search).get('k') || 'none'}</div>
      <search-box-component></search-box-component>
    `;
  }
}