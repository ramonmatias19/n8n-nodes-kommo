"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
async function execute(index) {
    const qs = {};
    const additionalFields = this.getNodeParameter('with', 0);
    qs.with =
        Array.isArray(additionalFields) && additionalFields.length
            ? additionalFields.join(',')
            : undefined;
    const responseData = await transport_1.apiRequest.call(this, 'GET', `account`, {}, qs);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map