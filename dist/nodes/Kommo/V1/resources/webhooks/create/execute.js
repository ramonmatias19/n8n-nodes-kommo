"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
async function execute(index) {
    const destination = this.getNodeParameter('destination', index);
    const events = this.getNodeParameter('events', index);
    const body = {
        destination,
        events,
    };
    const responseData = await transport_1.apiRequest.call(this, 'POST', 'webhooks', body);
    return this.helpers.returnJsonArray([responseData]);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map