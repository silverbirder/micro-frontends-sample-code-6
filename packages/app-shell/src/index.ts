import {MyRouter} from './modules/router';
import {MyImporter} from './modules/importer';

const router = new MyRouter('outlet');

router.setRoutes([
    {path: '/', component: 'common-top-page-component'}, 
    {path: '/s', component: 'common-search-page-component'}
])

const importer = new MyImporter();
importer.fetch('common-search-page-component').then((r:any) => {
    r.map((o: any) => {
        customElements.get(o.componentName) || customElements.define(o.componentName, o.module);
    });
})