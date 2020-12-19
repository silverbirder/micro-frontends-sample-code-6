import {Router} from '@vaadin/router';

export class MyRouter {
    outletElement: HTMLElement;
    constructor(outletSelectorId: string) {
        const outletDoc = document.getElementById(outletSelectorId)
        if (outletDoc === null) {
            throw Error(`Not Found HTMLElement By ElementId ${outletSelectorId}`);
        }
        this.outletElement = outletDoc;
    }
    setRoutes(pairs: Array<{path: string, component: string}>) {
        const router = new Router(this.outletElement);
        router.setRoutes(pairs);
    }
}