"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['contacts'],
        operation: ['updateContacts'],
    },
};
const updateContactModel = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'number',
        default: undefined,
        required: true,
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: undefined,
    },
    ...(0, model_1.makeContactModelDescription)(),
    (0, RequestId_1.addRequestId)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Contacts',
        name: 'collection',
        placeholder: 'Edit contact',
        type: 'fixedCollection',
        default: [],
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                ...displayOptions.show,
                json: [false],
            },
        },
        options: [
            {
                displayName: 'Contact',
                name: 'contact',
                values: updateContactModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map