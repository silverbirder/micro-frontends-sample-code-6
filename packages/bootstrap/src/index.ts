import {MyRouter} from './modules/router';

const router = new MyRouter('outlet');
router.setRoutes([
  {path: '/', component: 'top-page-component'}, 
  {path: '/s', component: 'search-page-component'}
])