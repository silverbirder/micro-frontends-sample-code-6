import { LitElement, html, css } from 'lit-element';

export default class RecommendComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      Recommend!
    `;
  }
}