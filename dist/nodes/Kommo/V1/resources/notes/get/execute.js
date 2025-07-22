"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
async function execute(index) {
    var _a, _b, _c, _d;
    const body = {};
    const qs = {};
    const filter = this.getNodeParameter('filter', 0);
    if (Object.keys(filter).length) {
        qs.filter = {
            ...filter,
            id: (_a = filter.id) === null || _a === void 0 ? void 0 : _a.toString().split(',').map((el) => Number(el.trim())),
            entity_id: (_b = filter.entity_id) === null || _b === void 0 ? void 0 : _b.toString().split(',').map((el) => Number(el.trim())),
            note_type: filter.note_type,
            updated_at: (0, DateRangeDescription_1.makeRangeProperty)((_c = filter.updated_at) === null || _c === void 0 ? void 0 : _c.dateRangeCustomProperties),
        };
    }
    const options = this.getNodeParameter('options', 0);
    if ((_d = options.sort) === null || _d === void 0 ? void 0 : _d.sortSettings) {
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
    const endpoint = (await this.getNodeParameter('entity_type', 0)) + '/notes';
    if (returnAll) {
        const responseData = await await transport_1.apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData);
    }
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body, qs);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map