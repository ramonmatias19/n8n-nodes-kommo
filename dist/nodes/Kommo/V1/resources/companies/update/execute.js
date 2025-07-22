"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
const transport_1 = require("../../../transport");
const CustomFieldsDescription_1 = require("../../_components/CustomFieldsDescription");
const getTimestampFromDateString_1 = require("../../../helpers/getTimestampFromDateString");
async function execute(index) {
    const requestMethod = 'PATCH';
    const endpoint = `companies`;
    const jsonParams = (await this.getNodeParameter('json', 0));
    if (jsonParams) {
        const jsonString = (await this.getNodeParameter('jsonString', 0));
        const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
        return this.helpers.returnJsonArray(responseData);
    }
    const collection = (await this.getNodeParameter('collection', 0));
    const body = collection.company
        .map((company) => {
        var _a, _b;
        return ({
            ...company,
            id: Number(company.id),
            created_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(company.created_at),
            updated_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(company.updated_at),
            custom_fields_values: company.custom_fields_values && (0, CustomFieldsDescription_1.makeCustomFieldReqObject)(company.custom_fields_values),
            _embedded: {
                ...company._embedded,
                tags: (_b = (_a = company._embedded) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.flatMap((group) => group.id.map((id) => ({ id }))),
            },
        });
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map