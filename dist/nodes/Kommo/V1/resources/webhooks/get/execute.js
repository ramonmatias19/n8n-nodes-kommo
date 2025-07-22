"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
async function execute(index) {
    var _a;
    const qs = {};
    const limit = this.getNodeParameter('limit', index);
    if (limit) {
        qs.limit = limit;
    }
    const responseData = await transport_1.apiRequest.call(this, 'GET', 'webhooks', {}, qs);
    const webhooks = ((_a = responseData._embedded) === null || _a === void 0 ? void 0 : _a.webhooks) || responseData.webhooks || [];
    return this.helpers.returnJsonArray(webhooks);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map