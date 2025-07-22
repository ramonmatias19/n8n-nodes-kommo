"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const entity_1 = require("../entity");
const displayOptions = {
    show: {
        resource: ['notes'],
        operation: ['updateNotes'],
    },
};
exports.description = [
    ...(0, entity_1.entityType)(displayOptions),
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    ...(0, entity_1.getNotesDescription)(displayOptions, [
        {
            displayName: 'ID',
            name: 'id',
            type: 'number',
            default: undefined,
            required: true,
        },
    ]),
];
//# sourceMappingURL=description.js.map