"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
const transport_1 = require("../../../transport");
const getTimestampFromDateString_1 = require("../../../helpers/getTimestampFromDateString");
async function execute(index) {
    const requestMethod = 'POST';
    const endpoint = `tasks`;
    const jsonParams = (await this.getNodeParameter('json', 0));
    if (jsonParams) {
        const jsonString = (await this.getNodeParameter('jsonString', 0));
        const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
        return this.helpers.returnJsonArray(responseData);
    }
    const tasksCollection = (await this.getNodeParameter('collection', 0));
    const body = tasksCollection.task
        .map((task) => {
        const data = { ...task, result: { text: task.resultText }, resultText: undefined };
        return {
            ...data,
            complete_till: (0, getTimestampFromDateString_1.getTimestampFromDateString)(task.complete_till) || 0,
            entity_id: Number(task.entity_id),
            result: { text: task.resultText },
            created_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(task.created_at),
            updated_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(task.updated_at),
            duration: Number(task.duration),
        };
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map