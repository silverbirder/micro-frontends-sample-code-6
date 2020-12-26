import {LitElement, html, css } from 'lit-element';

export default class CommonSearchPageComponent extends LitElement {
  static dependencies() {
    return ['search-box-component'];
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
      <search-box-component></search-box-component>
      Keyword is ${new URLSearchParams(location.search).get('k') || 'none'}
    `;
  }
}