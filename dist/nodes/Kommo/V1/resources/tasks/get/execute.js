"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
const stringToArray_1 = require("../../../helpers/stringToArray");
async function execute(index) {
    var _a;
    const body = {};
    const qs = {};
    const filter = this.getNodeParameter('filter', 0);
    qs.filter = {
        ...filter,
        is_completed: filter.is_completed ? 1 : 0,
        id: (0, stringToArray_1.stringToArray)(filter.id).filter((id) => typeof id === 'number'),
        entity_id: (0, stringToArray_1.stringToArray)(filter.entity_id).filter((id) => typeof id === 'number'),
        updated_at: filter.updated_at && (0, DateRangeDescription_1.makeRangeProperty)(filter.updated_at.dateRangeCustomProperties),
    };
    const options = this.getNodeParameter('options', 0);
    if ((_a = options.sort) === null || _a === void 0 ? void 0 : _a.sortSettings) {
        qs.order = {
            [options.sort.sortSettings.sort_by]: options.sort.sortSettings.sort_order,
        };
    }
    const returnAll = this.getNodeParameter('returnAll', 0);
    if (!returnAll) {
        const page = this.getNodeParameter('page', 0);
        qs.page = page;
    }
    const limit = this.getNodeParameter('limit', 0);
    qs.limit = limit;
    const requestMethod = 'GET';
    const endpoint = `tasks`;
    if (returnAll) {
        const responseData = await await transport_1.apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData);
    }
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body, qs);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map