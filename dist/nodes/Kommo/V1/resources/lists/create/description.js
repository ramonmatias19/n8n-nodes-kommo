"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.createListModel = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['lists'],
        operation: ['addLists'],
    },
};
exports.createListModel = [
    ...model_1.listModelDescription.filter((el) => el.name !== 'id'),
    (0, RequestId_1.addRequestId)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Lists',
        name: 'collection',
        placeholder: 'Add list',
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
                displayName: 'Create List',
                name: 'list',
                values: exports.createListModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map