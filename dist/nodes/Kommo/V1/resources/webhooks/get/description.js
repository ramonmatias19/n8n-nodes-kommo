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
        },
        default: 50,
        displayOptions: {
            show: {
                resource: ['webhooks'],
                operation: ['get'],
            },
        },
        description: 'Max number of results to return',
    },
];
//# sourceMappingURL=description.js.map