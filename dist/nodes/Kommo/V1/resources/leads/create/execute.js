"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
const transport_1 = require("../../../transport");
const CustomFieldsDescription_1 = require("../../_components/CustomFieldsDescription");
const makeTagsArray_1 = require("../../../helpers/makeTagsArray");
const getTimestampFromDateString_1 = require("../../../helpers/getTimestampFromDateString");
async function execute(index) {
    const requestMethod = 'POST';
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
        var _a, _b, _c, _d, _e, _f;
        return ({
            ...lead,
            created_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(lead.created_at),
            updated_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(lead.updated_at),
            closed_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(lead.closed_at),
            custom_fields_values: lead.custom_fields_values && (0, CustomFieldsDescription_1.makeCustomFieldReqObject)(lead.custom_fields_values),
            _embedded: {
                ...lead._embedded,
                tags: (_b = (_a = lead._embedded) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.flatMap(makeTagsArray_1.makeTagsArray),
                contacts: (_d = (_c = lead._embedded) === null || _c === void 0 ? void 0 : _c.contacts) === null || _d === void 0 ? void 0 : _d.flatMap((group) => group.id.contact.flatMap((contact) => contact)),
                companies: (_f = (_e = lead._embedded) === null || _e === void 0 ? void 0 : _e.companies) === null || _f === void 0 ? void 0 : _f.flatMap((group) => group.id.company.flatMap((company) => company)),
            },
        });
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map