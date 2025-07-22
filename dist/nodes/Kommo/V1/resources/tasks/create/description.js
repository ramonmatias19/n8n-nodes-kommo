"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.createTaskModel = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const displayOptions = {
    show: {
        resource: ['tasks'],
        operation: ['createTasks'],
    },
};
exports.createTaskModel = [
    ...model_1.taskModelDescription.filter((el) => el.name !== 'id'),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Tasks',
        name: 'collection',
        placeholder: 'Add task',
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
                displayName: 'Create Task',
                name: 'task',
                values: exports.createTaskModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map