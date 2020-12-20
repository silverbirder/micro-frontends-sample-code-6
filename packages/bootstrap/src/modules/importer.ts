// import TopPageComponent from './top-page-component';
// import SearchPageComponent from '../../pages/src/search-page-component';
// customElements.define('top-page-component', TopPageComponent);
// customElements.define('search-page-component', SearchPageComponent);

/*
1. catch requested component name.
2. request component url to discovery service.
3. catch 2's response. (map that component name and component url)
4. import component url
5. define custom element
*/
export class MyImporter {
    constructor() {
    }
    async fetch(nameList: Array<string>) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return nameList.map((name: string) => {
            return {name: name, url: 'https://localhost'}
        })
    }
}