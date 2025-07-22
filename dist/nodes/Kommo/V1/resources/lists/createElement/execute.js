"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
const transport_1 = require("../../../transport");
const CustomFieldsDescription_1 = require("../../_components/CustomFieldsDescription");
async function execute(index) {
    const listId = this.getNodeParameter('catalog_id', 0);
    const requestMethod = 'POST';
    const endpoint = `catalogs/${listId}/elements`;
    const jsonParams = (await this.getNodeParameter('json', 0));
    if (jsonParams) {
        const jsonString = (await this.getNodeParameter('jsonString', 0));
        const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
        return this.helpers.returnJsonArray(responseData);
    }
    const listsCollection = (await this.getNodeParameter('collection', 0));
    const body = listsCollection.element
        .map((element) => {
        return {
            ...element,
            custom_fields_values: element.custom_fields_values && (0, CustomFieldsDescription_1.makeCustomFieldReqObject)(element.custom_fields_values),
        };
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map