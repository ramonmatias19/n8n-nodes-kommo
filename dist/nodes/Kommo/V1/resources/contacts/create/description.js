"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.createContactModel = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const displayOptions = {
    show: {
        resource: ['contacts'],
        operation: ['createContacts'],
    },
};
exports.createContactModel = [
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: undefined,
    },
    {
        displayName: 'First Name',
        name: 'first_name',
        type: 'string',
        default: undefined,
    },
    {
        displayName: 'Last Name',
        name: 'last_name',
        type: 'string',
        default: undefined,
    },
    ...(0, model_1.makeContactModelDescription)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Contacts',
        name: 'collection',
        placeholder: 'Add contact',
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
                values: exports.createContactModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map