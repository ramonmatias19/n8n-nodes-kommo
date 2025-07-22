"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
const transport_1 = require("../../../transport");
const makeTagsArray_1 = require("../../../helpers/makeTagsArray");
const getTimestampFromDateString_1 = require("../../../helpers/getTimestampFromDateString");
const CustomFieldsDescription_1 = require("../../_components/CustomFieldsDescription");
async function execute(index) {
    const requestMethod = 'PATCH';
    const endpoint = `leads`;
    const jsonParams = (await this.getNodeParameter('json', 0));
    if (jsonParams) {
        const jsonString = (await this.getNodeParameter('jsonString', 0));
        const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
        return this.helpers.returnJsonArray(responseData);
    }
    const leadsCollection = (await this.getNodeParameter('collection', 0));
    const body = leadsCollection.lead
        .map((lead) => {
        var _a, _b;
        return ({
            ...lead,
            id: Number(lead.id),
            created_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(lead.created_at),
            updated_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(lead.updated_at),
            custom_fields_values: lead.custom_fields_values && (0, CustomFieldsDescription_1.makeCustomFieldReqObject)(lead.custom_fields_values),
            _embedded: {
                ...lead._embedded,
                tags: (_b = (_a = lead._embedded) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.flatMap(makeTagsArray_1.makeTagsArray),
            },
        });
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map