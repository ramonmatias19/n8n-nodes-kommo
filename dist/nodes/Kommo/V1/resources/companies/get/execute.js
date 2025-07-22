"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
const stringToArray_1 = require("../../../helpers/stringToArray");
async function execute(index) {
    var _a, _b, _c, _d;
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
            id: (0, stringToArray_1.stringToArray)(filterWithoutQuery.id).filter((el) => typeof el === 'number'),
            name: (0, stringToArray_1.stringToArray)(filterWithoutQuery.name).filter((el) => typeof el === 'string'),
            created_at: (0, DateRangeDescription_1.makeRangeProperty)((_a = filterWithoutQuery.created_at) === null || _a === void 0 ? void 0 : _a.dateRangeCustomProperties),
            updated_at: (0, DateRangeDescription_1.makeRangeProperty)((_b = filterWithoutQuery.updated_at) === null || _b === void 0 ? void 0 : _b.dateRangeCustomProperties),
            closest_task_at: (0, DateRangeDescription_1.makeRangeProperty)((_c = filterWithoutQuery.closest_task_at) === null || _c === void 0 ? void 0 : _c.dateRangeCustomProperties),
        };
    }
    const options = this.getNodeParameter('options', 0);
    if (options.with) {
        qs.with = options.with.join(',');
    }
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
    const endpoint = `companies`;
    if (returnAll) {
        const responseData = await await transport_1.apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData);
    }
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body, qs);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map