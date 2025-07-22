"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.createListModel = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['lists'],
        operation: ['addListElements'],
    },
};
exports.createListModel = [
    ...model_1.listElementModelDescription.filter((el) => el.name !== 'id'),
    (0, RequestId_1.addRequestId)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'List Name or ID',
        name: 'catalog_id',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getCatalogs',
        },
        default: '',
        required: true,
        description: 'Select list. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        displayOptions,
    },
    {
        displayName: 'List Elements',
        name: 'collection',
        placeholder: 'Add element',
        type: 'fixedCollection',
        default: [],
        required: true,
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                ...displayOptions.show,
                json: [false],
            },
            hide: {
                catalog_id: [''],
            },
        },
        options: [
            {
                displayName: 'Create Element',
                name: 'element',
                values: exports.createListModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map