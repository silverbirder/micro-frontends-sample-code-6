// import {MyRouter} from './modules/router';
import {MyImporter} from './modules/importer';
// import { customElement } from 'lit-element';

// const router = new MyRouter('outlet');
const importer = new MyImporter();
importer.stacks(['top-page-component', 'search-page-component']);
importer.fetch();

// importer.fetch(['top-page-component', 'search-page-component']).then((response) => {
//   response.forEach((d) => {
//   });
// });
// router.setRoutes([
//   {path: '/', component: 'top-page-component'}, 
//   {path: '/s', component: 'search-page-component'}
// ])