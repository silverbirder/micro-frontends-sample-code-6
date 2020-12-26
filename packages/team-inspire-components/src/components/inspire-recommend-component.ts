import { LitElement, html, css } from 'lit-element';

export default class InspireRecommendComponent extends LitElement {
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