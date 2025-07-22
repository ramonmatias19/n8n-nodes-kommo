"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
async function execute(index) {
    const webhookId = this.getNodeParameter('webhookId', index);
    await transport_1.apiRequest.call(this, 'DELETE', `webhooks/${webhookId}`);
    return this.helpers.returnJsonArray([{ success: true, webhookId }]);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map