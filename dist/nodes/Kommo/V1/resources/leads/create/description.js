"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.createLeadModel = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const displayOptions = {
    show: {
        resource: ['leads'],
        operation: ['createLeads'],
    },
};
exports.createLeadModel = [
    ...(0, model_1.makeLeadModelDescription)([
        {
            displayName: 'Contacts',
            name: 'contacts',
            values: [
                {
                    displayName: 'Contacts',
                    name: 'id',
                    type: 'fixedCollection',
                    typeOptions: {
                        multipleValues: true,
                    },
                    default: [],
                    required: true,
                    placeholder: 'Add contact',
                    options: [
                        {
                            displayName: 'Contact',
                            name: 'contact',
                            values: [
                                {
                                    displayName: 'ID',
                                    name: 'id',
                                    type: 'number',
                                    default: '',
                                },
                                {
                                    displayName: 'Is Main',
                                    name: 'is_main',
                                    type: 'boolean',
                                    default: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            displayName: 'Companies',
            name: 'companies',
            values: [
                {
                    displayName: 'Companies',
                    name: 'id',
                    type: 'fixedCollection',
                    typeOptions: {
                        multipleValues: true,
                    },
                    default: [],
                    required: true,
                    placeholder: 'Add company',
                    options: [
                        {
                            displayName: 'Company',
                            name: 'company',
                            values: [
                                {
                                    displayName: 'ID',
                                    name: 'id',
                                    type: 'number',
                                    default: '',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Leads',
        name: 'collection',
        placeholder: 'Add lead',
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
                values: exports.createLeadModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map