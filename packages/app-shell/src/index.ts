import {MyRouter} from './modules/router';
import {MyImporter} from './modules/importer';

const router = new MyRouter('outlet');
const mainComponentsPath = [
    {path: '/', component: 'common-top-page-component'}, 
    {path: '/s', component: 'common-search-page-component'}
];
router.setRoutes(mainComponentsPath);

const importer = new MyImporter();
Promise.all(mainComponentsPath
    .map((mainComponentPath) => mainComponentPath.component)
    .map(async (componentName) => {
    return await importer.fetch(componentName)
})).then(v => {v.map((vv) => {vv.map((vvv: any) => {
    customElements.get(vvv.componentName) || customElements.define(vvv.componentName, vvv.module)
})})})