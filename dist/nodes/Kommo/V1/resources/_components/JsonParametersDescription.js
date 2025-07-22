"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addJsonParametersDescription = void 0;
const addJsonParametersDescription = (displayOptions) => {
    return [
        {
            displayName: 'JSON Parameters',
            name: 'json',
            type: 'boolean',
            displayOptions,
            default: false,
            noDataExpression: true,
        },
        {
            displayName: 'Stringifyed Array of Objects',
            name: 'jsonString',
            type: 'string',
            default: '={{JSON.stringify([{key: "value"}])}}',
            displayOptions: {
                show: {
                    ...displayOptions === null || displayOptions === void 0 ? void 0 : displayOptions.show,
                    json: [true],
                },
                hide: {
                    ...displayOptions === null || displayOptions === void 0 ? void 0 : displayOptions.hide,
                },
            },
        },
    ];
};
exports.addJsonParametersDescription = addJsonParametersDescription;
//# sourceMappingURL=JsonParametersDescription.js.map