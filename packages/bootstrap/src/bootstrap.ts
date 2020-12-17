import {Router} from '@vaadin/router';
import TopPageComponent from './top-page-component';
import SearchPageComponent from './search-page-component';
customElements.define('top-page-component', TopPageComponent);
customElements.define('search-page-component', SearchPageComponent);

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'top-page-component'},
  {path: '/s', component: 'search-page-component'},
]);