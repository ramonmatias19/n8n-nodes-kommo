"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
const transport_1 = require("../../../transport");
async function execute(index) {
    const requestMethod = 'PATCH';
    const endpoint = `catalogs`;
    const jsonParams = (await this.getNodeParameter('json', 0));
    if (jsonParams) {
        const jsonString = (await this.getNodeParameter('jsonString', 0));
        const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
        return this.helpers.returnJsonArray(responseData);
    }
    const listsCollection = (await this.getNodeParameter('collection', 0));
    const body = listsCollection.list
        .map((list) => {
        return {
            ...list,
            id: Number(list.id),
            name: String(list.name),
            can_add_elements: Boolean(list.can_add_elements),
            can_link_multiple: Boolean(list.can_link_multiple),
            request_id: !!list.request_id ? String(list.request_id) : undefined,
        };
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map