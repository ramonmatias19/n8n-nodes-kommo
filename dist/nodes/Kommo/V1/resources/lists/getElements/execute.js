"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
async function execute(index) {
    var _a;
    const body = {};
    const qs = {};
    const filter = this.getNodeParameter('filter', 0);
    if (filter.query)
        qs.query = filter.query;
    const filterWithoutQuery = JSON.parse(JSON.stringify(filter));
    delete filterWithoutQuery.query;
    if (Object.keys(filterWithoutQuery).length) {
        qs.filter = {
            id: (_a = filterWithoutQuery.id) === null || _a === void 0 ? void 0 : _a.toString().split(',').map((el) => Number(el.trim())),
        };
    }
    const returnAll = this.getNodeParameter('returnAll', 0);
    if (!returnAll) {
        const page = this.getNodeParameter('page', 0);
        qs.page = page;
    }
    const limit = this.getNodeParameter('limit', 0);
    qs.limit = limit;
    const listId = this.getNodeParameter('catalog_id', 0);
    const requestMethod = 'GET';
    const endpoint = `catalogs/${listId}/elements`;
    if (returnAll) {
        const responseData = await await transport_1.apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);
        return this.helpers.returnJsonArray(responseData);
    }
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body, qs);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map