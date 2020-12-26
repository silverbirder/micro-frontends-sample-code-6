export class MyImporter {
    async fetch(componentName: string) {
        const {SNOWPACK_PUBLIC_COMPONENT_DISCOVERY_API_URL} = import.meta.env;
        const response = await (await fetch(`${SNOWPACK_PUBLIC_COMPONENT_DISCOVERY_API_URL}?name=${componentName}`)).json();
        const module = (await import(response[componentName])).default;
        const components = module.dependencies();
        const dependencyModules = await Promise.all(components.map(async (componentName: string) => {
            const response = await (await fetch(`${SNOWPACK_PUBLIC_COMPONENT_DISCOVERY_API_URL}?name=${componentName}`)).json();
            const module = (await import(response[componentName])).default;
            return {
                componentName: componentName,
                module: module,
            };
        }));
        const returnValue: any = {
            componentName: componentName,
            module: module,
        };
        dependencyModules.push(returnValue);
        return dependencyModules;
    }
}