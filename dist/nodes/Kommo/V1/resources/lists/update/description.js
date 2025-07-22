"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['lists'],
        operation: ['updateLists'],
    },
};
const updateListModel = [
    ...model_1.listModelDescription.filter((el) => ['id', 'name', 'can_add_elements', 'can_link_multiple'].includes(el.name)),
    (0, RequestId_1.addRequestId)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Lists',
        name: 'collection',
        placeholder: 'Add edited list',
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
                displayName: 'Update Lists',
                name: 'list',
                values: updateListModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map