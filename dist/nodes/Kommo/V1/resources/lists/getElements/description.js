"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const LimitDescription_1 = require("../../_components/LimitDescription");
const PageDescription_1 = require("../../_components/PageDescription");
const ReturnAllDescription_1 = require("../../_components/ReturnAllDescription");
const FilterDescription_1 = require("../../_components/FilterDescription");
const displayOptions = {
    show: {
        resource: ['lists'],
        operation: ['getListElements'],
    },
};
exports.description = [
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
    (0, ReturnAllDescription_1.addReturnAll)(displayOptions),
    (0, FilterDescription_1.addFilterDescription)(displayOptions, [
        {
            displayName: 'Query',
            name: 'query',
            type: 'string',
            default: '',
            description: 'Search query',
        },
        {
            displayName: 'List of Element IDs',
            name: 'id',
            type: 'string',
            default: '',
            description: 'Element IDs separated by commas',
        },
    ]),
    (0, PageDescription_1.addPageDescription)({
        show: {
            ...displayOptions.show,
            returnAll: [false],
        },
    }),
    (0, LimitDescription_1.addLimitDescription)(displayOptions),
];
//# sourceMappingURL=description.js.map