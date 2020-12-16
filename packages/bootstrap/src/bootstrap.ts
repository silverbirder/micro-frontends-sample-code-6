import {Router} from '@vaadin/router';
import XComponent from './x-component';
customElements.define("x-component", XComponent);

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'x-component'},
]);

// const components: string[] = ["x-component"];
// components
// .filter((component: string) => document.querySelector(component) !==  null)
// .map((component: string) => {
//   import(`./${component}.js`).then(x => {
//     // @ts-ignore
//     customElements.define(component, x.default);
//   });
// });