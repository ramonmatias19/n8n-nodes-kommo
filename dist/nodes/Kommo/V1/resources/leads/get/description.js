"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
const FilterDescription_1 = require("../../_components/FilterDescription");
const LimitDescription_1 = require("../../_components/LimitDescription");
const NumRangeDescription_1 = require("../../_components/NumRangeDescription");
const PageDescription_1 = require("../../_components/PageDescription");
const ReturnAllDescription_1 = require("../../_components/ReturnAllDescription");
const SortDescription_1 = require("../../_components/SortDescription");
const WithDescription_1 = require("../../_components/WithDescription");
const displayOptions = {
    show: {
        resource: ['leads'],
        operation: ['getLeads'],
    },
};
exports.description = [
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
            displayName: 'List of Lead IDs',
            name: 'id',
            type: 'string',
            default: '',
            description: 'Lead IDs separated by commas',
        },
        {
            displayName: 'List of Names',
            name: 'name',
            type: 'string',
            default: '',
            description: 'Names separated by commas',
        },
        (0, NumRangeDescription_1.addNumRangeDescription)('Price', 'price'),
        {
            displayName: 'Pipeline Names or IDs',
            name: 'pipelines',
            type: 'multiOptions',
            default: [],
            description: 'Select pipelines. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
            typeOptions: {
                loadOptionsMethod: 'getPipelines',
            },
            noDataExpression: true,
        },
        {
            displayName: 'Status Names or IDs',
            name: 'statuses',
            type: 'multiOptions',
            default: [],
            description: 'Select statuses. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
            options: [],
            typeOptions: {
                loadOptionsMethod: 'getStatuses',
            },
            noDataExpression: true,
        },
        {
            displayName: 'Created by Users',
            name: 'created_by',
            type: 'multiOptions',
            default: [],
            typeOptions: {
                loadOptionsMethod: 'getActiveUsersWithRobot',
            },
            description: 'Select users. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
            noDataExpression: true,
        },
        {
            displayName: 'Updated by Users',
            name: 'updated_by',
            type: 'multiOptions',
            default: [],
            typeOptions: {
                loadOptionsMethod: 'getActiveUsersWithRobot',
            },
            description: 'Select users. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
            noDataExpression: true,
        },
        {
            displayName: 'Responsible User Names or IDs',
            name: 'responsible_user_id',
            type: 'multiOptions',
            default: [],
            typeOptions: {
                loadOptionsMethod: 'getActiveUsers',
            },
            description: 'Select users. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
            noDataExpression: true,
        },
        (0, DateRangeDescription_1.addDateRangeDescription)('Created at', 'created_at'),
        (0, DateRangeDescription_1.addDateRangeDescription)('Updated at', 'updated_at'),
        (0, DateRangeDescription_1.addDateRangeDescription)('Closed at', 'closed_at'),
        (0, DateRangeDescription_1.addDateRangeDescription)('Closest task at', 'closest_task_at'),
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
                    name: 'Date Update',
                    value: 'updated_at',
                },
                {
                    name: 'ID',
                    value: 'id',
                },
            ]),
            (0, WithDescription_1.addWithDescription)(undefined, [
                {
                    name: 'Deal-Related Catalog Elements',
                    value: 'catalog_elements',
                },
                {
                    name: 'Last Modified by Robot',
                    value: 'is_price_modified_by_robot',
                },
                {
                    name: 'Loss Reason',
                    value: 'loss_reason',
                },
                {
                    name: 'Contacts',
                    value: 'contacts',
                },
                {
                    name: 'Only Deleted',
                    value: 'only_deleted',
                },
                {
                    name: 'Source ID',
                    value: 'source_id',
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