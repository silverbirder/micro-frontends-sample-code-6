import { customElement, LitElement, html, css } from 'lit-element';

@customElement('search-page')
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