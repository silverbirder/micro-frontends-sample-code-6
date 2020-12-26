const fetch = require('node-fetch');

exports.handler = async function(componentName) {
    if (typeof (typeof componentName) !== 'string') {
        return {} // TODO: include the error message (response type ...)
    }
    let requestURL = "";
    if (componentName.startsWith('search')) {
        requestURL = `${process.env.SEARCH_API}`;
    } else if (componentName.startsWith('product')) {
        requestURL = `${process.env.PRODUCT_API}`;
    } else if (componentName.startsWith('inspire')) {
        requestURL = `${process.env.INSPIRE_API}`;
    } else if (componentName.startsWith('common')) {
        requestURL = `${process.env.COMMON_API}`;
    }
    const response = await (await fetch(requestURL)).json();
    const returnValues = {};
    returnValues[componentName] = response[componentName];
    return returnValues;
}