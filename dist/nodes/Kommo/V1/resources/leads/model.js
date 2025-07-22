"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLeadModelDescription = void 0;
const CustomFieldsDescription_1 = require("../_components/CustomFieldsDescription");
const modelDescription = [
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: undefined,
    },
    {
        displayName: 'Price',
        name: 'price',
        type: 'number',
        default: undefined,
    },
    {
        displayName: 'Pipeline Name or ID',
        name: 'pipeline_id',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        default: '',
        typeOptions: {
            loadOptionsMethod: 'getPipelines',
        },
    },
    {
        displayName: 'Status Name or ID',
        name: 'status_id',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        default: '',
        typeOptions: {
            loadOptionsMethod: 'getStatusesWithoutUnsorted',
        },
    },
    {
        displayName: 'Created by User Name or ID',
        name: 'created_by',
        type: 'options',
        default: 0,
        typeOptions: {
            loadOptionsMethod: 'getActiveUsersWithRobot',
        },
        description: 'Select user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
    },
    {
        displayName: 'Updated by User Name or ID',
        name: 'updated_by',
        type: 'options',
        default: 0,
        typeOptions: {
            loadOptionsMethod: 'getActiveUsersWithRobot',
        },
        description: 'Select user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
    },
    {
        displayName: 'Responsible User Name or ID',
        name: 'responsible_user_id',
        type: 'options',
        default: 0,
        typeOptions: {
            loadOptionsMethod: 'getActiveUsersWithRobot',
        },
        description: 'Select user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
    },
    {
        displayName: 'Closed At',
        name: 'closed_at',
        type: 'dateTime',
        default: undefined,
    },
    {
        displayName: 'Created At',
        name: 'created_at',
        type: 'dateTime',
        default: undefined,
    },
    {
        displayName: 'Updated At',
        name: 'updated_at',
        type: 'dateTime',
        default: undefined,
    },
    {
        displayName: 'Loss Reason Name or ID',
        name: 'loss_reason_id',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        default: '',
        typeOptions: {
            loadOptionsMethod: 'getLossReasons',
        },
        noDataExpression: false,
    },
    (0, CustomFieldsDescription_1.addCustomFieldDescription)('getLeadCustomFields'),
];
const makeLeadModelDescription = (embeddedOptions) => {
    const model = [...modelDescription];
    const options = embeddedOptions ? [...embeddedOptions] : [];
    const embedded = {
        displayName: 'Embedded',
        name: '_embedded',
        placeholder: 'Add custom embedded',
        type: 'fixedCollection',
        default: {},
        typeOptions: {
            multipleValues: true,
        },
        options: [
            {
                displayName: 'Tags',
                name: 'tags',
                values: [
                    {
                        displayName: 'Tag Names or IDs',
                        name: 'id',
                        type: 'multiOptions',
                        description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
                        typeOptions: {
                            loadOptionsMethod: 'getTags',
                        },
                        default: [],
                    },
                ],
            },
            ...options,
        ],
    };
    model.push(embedded);
    return model;
};
exports.makeLeadModelDescription = makeLeadModelDescription;
//# sourceMappingURL=model.js.map