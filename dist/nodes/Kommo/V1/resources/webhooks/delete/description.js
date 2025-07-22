"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
exports.description = [
    {
        displayName: 'ID do Webhook',
        name: 'webhookId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['webhooks'],
                operation: ['delete'],
            },
        },
        default: '',
        description: 'ID do webhook a ser excluído',
    },
];
//# sourceMappingURL=description.js.map