"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
exports.description = [
    {
        displayName: 'Limite',
        name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
            maxValue: 250,
        },
        default: 50,
        displayOptions: {
            show: {
                resource: ['webhooks'],
                operation: ['get'],
            },
        },
        description: 'Número máximo de webhooks para retornar',
    },
];
//# sourceMappingURL=description.js.map