"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['leads'],
        operation: ['updateLeads'],
    },
};
const updateLeadModel = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'number',
        default: undefined,
        required: true,
    },
    ...(0, model_1.makeLeadModelDescription)(),
    (0, RequestId_1.addRequestId)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Leads',
        name: 'collection',
        placeholder: 'Add edited lead',
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
                displayName: 'Lead',
                name: 'lead',
                values: updateLeadModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map