const fetch = require('node-fetch');

exports.handler = async function(componentName) {
    if (typeof (typeof componentName) !== 'string') {
        return {} // TODO: include the error message (response type ...)
    }
    if (componentName.startsWith('search')) {
        return await fetch(`${process.env.SEARCH_API}`);
    } else if (componentName.startsWith('product')) {
        return await fetch(`${process.env.PRODUCT_API}`);
    } else if (componentName.startsWith('inspire')) {
        return await fetch(`${process.env.INSPIRE_API}`);
    } else if (componentName.startsWith('common')) {
        return await fetch(`${process.env.COMMON_API}`);
    }
}