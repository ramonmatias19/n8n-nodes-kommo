"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['tasks'],
        operation: ['updateTasks'],
    },
};
const updateTaskModel = [...model_1.taskModelDescription, (0, RequestId_1.addRequestId)()];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Tasks',
        name: 'collection',
        placeholder: 'Add edited task',
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
                displayName: 'Update Task',
                name: 'task',
                values: updateTaskModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map