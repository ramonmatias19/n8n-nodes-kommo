"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequestId = void 0;
const addRequestId = (displayOptions) => {
    return {
        displayName: 'Request ID',
        name: 'request_id',
        type: 'string',
        default: undefined,
        displayOptions,
        description: 'The field that will be returned unchanged in the response and will not be saved',
    };
};
exports.addRequestId = addRequestId;
//# sourceMappingURL=RequestId.js.map