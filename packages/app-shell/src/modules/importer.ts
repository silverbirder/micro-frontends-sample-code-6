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
        return await Promise.all(this.targets.map(async (target) => {
            const obj = await import(response[target]);
            return {target: target, object: obj}
        }));
    }
}