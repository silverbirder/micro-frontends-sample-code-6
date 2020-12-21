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
    targets: string[];
    constructor() {
        this.targets = []
    }
    stacks(targets: string[]) {
        this.targets = this.targets.concat(targets);
    }
    async fetch() {
        const {SNOWPACK_PUBLIC_SERVICE_DISCOVERY_API_URL} = import.meta.env;
        const response = await (await (await fetch(SNOWPACK_PUBLIC_SERVICE_DISCOVERY_API_URL)).json());
        const v = this.targets.map(async (target) => {
            // const obj = await import(`/proxy?u=${response[target]}`);
            const obj = await import(response[target]);
            return {target: target, object: obj}
        })
        console.log(v);
    }
}