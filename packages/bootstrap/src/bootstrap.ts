export default function start() {
  import('./XComponent').then(x => {
    // @ts-ignore
    customElements.define('x-component', x.default);
  });
}