"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['lists'],
        operation: ['updateListElements'],
    },
};
const updateListElementModel = [...model_1.listElementModelDescription, (0, RequestId_1.addRequestId)()];
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
        placeholder: 'Add edited list elements',
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
        },
        options: [
            {
                displayName: 'Update List Elements',
                name: 'element',
                values: updateListElementModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map