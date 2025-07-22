"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
const FilterDescription_1 = require("../../_components/FilterDescription");
const LimitDescription_1 = require("../../_components/LimitDescription");
const PageDescription_1 = require("../../_components/PageDescription");
const ReturnAllDescription_1 = require("../../_components/ReturnAllDescription");
const SortDescription_1 = require("../../_components/SortDescription");
const displayOptions = {
    show: {
        resource: ['tasks'],
        operation: ['getTasks'],
    },
};
exports.description = [
    (0, ReturnAllDescription_1.addReturnAll)(displayOptions),
    (0, FilterDescription_1.addFilterDescription)(displayOptions, [
        {
            displayName: 'Responsible User Names or IDs',
            name: 'responsible_user_id',
            type: 'multiOptions',
            default: [],
            typeOptions: {
                loadOptionsMethod: 'getActiveUsers',
            },
            description: 'Select users. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        },
        {
            displayName: 'Is Completed',
            name: 'is_completed',
            type: 'boolean',
            default: false,
        },
        {
            displayName: 'Task Type Names or IDs',
            name: 'task_type',
            type: 'multiOptions',
            description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
            default: [],
            typeOptions: {
                loadOptionsMethod: 'getTaskTypes',
            },
        },
        {
            displayName: 'Entity Type',
            name: 'entity_type',
            type: 'options',
            default: 'leads',
            options: [
                {
                    name: 'Leads',
                    value: 'leads',
                },
                {
                    name: 'Contacts',
                    value: 'contacts',
                },
                { name: 'Companies', value: 'companies' },
                { name: 'Customers', value: 'customers' },
            ],
        },
        {
            displayName: 'Entity IDs',
            name: 'entity_id',
            type: 'string',
            default: '',
        },
        {
            displayName: 'Task IDs',
            name: 'id',
            type: 'string',
            default: '',
        },
        (0, DateRangeDescription_1.addDateRangeDescription)('Updated at', 'updated_at'),
    ]),
    {
        displayName: 'Options',
        name: 'options',
        type: 'collection',
        placeholder: 'Add Option',
        default: { sortSettings: { sort_by: 'created_at', sort_order: 'asc' } },
        displayOptions,
        options: [
            (0, SortDescription_1.addSortDescription)(undefined, [
                {
                    name: 'Date Create',
                    value: 'created_at',
                },
                {
                    name: 'Complete Till',
                    value: 'complete_till',
                },
                {
                    name: 'ID',
                    value: 'id',
                },
            ]),
        ],
    },
    (0, PageDescription_1.addPageDescription)({
        show: {
            ...displayOptions.show,
            returnAll: [false],
        },
    }),
    (0, LimitDescription_1.addLimitDescription)(displayOptions),
];
//# sourceMappingURL=description.js.map