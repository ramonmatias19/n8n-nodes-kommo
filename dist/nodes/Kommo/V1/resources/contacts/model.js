"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeContactModelDescription = void 0;
const CustomFieldsDescription_1 = require("../_components/CustomFieldsDescription");
const modelDescription = [
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
];
const makeContactModelDescription = (embeddedOptions) => {
    const model = [
        ...modelDescription,
        (0, CustomFieldsDescription_1.addCustomFieldDescription)('getContactCustomFields'),
    ];
    const options = embeddedOptions ? [...embeddedOptions] : [];
    const embedded = {
        displayName: 'Embedded',
        name: '_embedded',
        placeholder: 'Add embedded',
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
exports.makeContactModelDescription = makeContactModelDescription;
//# sourceMappingURL=model.js.map