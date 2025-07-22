"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
async function execute(index) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const body = {};
    const qs = {};
    const filter = this.getNodeParameter('filter', 0);
    if (filter.query)
        qs.query = filter.query;
    const filterWithoutQuery = JSON.parse(JSON.stringify(filter));
    delete filterWithoutQuery.query;
    if (Object.keys(filterWithoutQuery).length) {
        qs.filter = {
            ...filterWithoutQuery,
            id: (_a = filterWithoutQuery.id) === null || _a === void 0 ? void 0 : _a.toString().split(',').map((el) => Number(el.trim())),
            name: (_b = filterWithoutQuery.name) === null || _b === void 0 ? void 0 : _b.toString().split(',').map((el) => el.trim()),
            price: (_c = filterWithoutQuery.price) === null || _c === void 0 ? void 0 : _c.rangeCustom,
            created_at: (0, DateRangeDescription_1.makeRangeProperty)((_d = filterWithoutQuery.created_at) === null || _d === void 0 ? void 0 : _d.dateRangeCustomProperties),
            updated_at: (0, DateRangeDescription_1.makeRangeProperty)((_e = filterWithoutQuery.updated_at) === null || _e === void 0 ? void 0 : _e.dateRangeCustomProperties),
            closest_task_at: (0, DateRangeDescription_1.makeRangeProperty)((_f = filterWithoutQuery.closest_task_at) === null || _f === void 0 ? void 0 : _f.dateRangeCustomProperties),
            closed_at: (0, DateRangeDescription_1.makeRangeProperty)((_g = filterWithoutQuery.closed_at) === null || _g === void 0 ? void 0 : _g.dateRangeCustomProperties),
        };
    }
    const options = this.getNodeParameter('options', 0);
    qs.with = options.with ? options.with.join(',') : undefined;
    if ((_h = options.sort) === null || _h === void 0 ? void 0 : _h.sortSettings) {
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
    const endpoint = `leads`;
    if (returnAll) {
        const responseData = await await transport_1.apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData);
    }
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body, qs);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map