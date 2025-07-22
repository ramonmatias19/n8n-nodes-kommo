"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const DateRangeDescription_1 = require("../../_components/DateRangeDescription");
const FilterDescription_1 = require("../../_components/FilterDescription");
const LimitDescription_1 = require("../../_components/LimitDescription");
const PageDescription_1 = require("../../_components/PageDescription");
const ReturnAllDescription_1 = require("../../_components/ReturnAllDescription");
const SortDescription_1 = require("../../_components/SortDescription");
const entity_1 = require("../entity");
const displayOptions = {
    show: {
        resource: ['notes'],
        operation: ['getNotes'],
    },
};
exports.description = [
    ...(0, entity_1.entityType)(displayOptions),
    (0, ReturnAllDescription_1.addReturnAll)(displayOptions),
    (0, FilterDescription_1.addFilterDescription)(displayOptions, [
        {
            displayName: 'List of Note IDs',
            name: 'id',
            type: 'string',
            default: '',
            description: 'Note IDs separated by commas',
        },
        {
            displayName: 'List of Entity IDs',
            name: 'entity_id',
            type: 'string',
            default: '',
            description: 'Entity IDs separated by commas',
        },
        {
            displayName: 'Note Type',
            name: 'note_type',
            type: 'multiOptions',
            default: [],
            options: [
                'call_in',
                'call_out',
                'geolocation',
                'message_cashier',
                'service_message',
                'sms_in',
                'sms_out',
                'common',
                'extended_service_message',
                'attachment',
            ].map((el) => ({ name: el, value: el })),
        },
        (0, DateRangeDescription_1.addDateRangeDescription)('Updated at', 'updated_at'),
    ]),
    {
        displayName: 'Options',
        name: 'options',
        type: 'collection',
        placeholder: 'Add Option',
        default: { sortSettings: { sort_by: 'updated_at', sort_order: 'asc' } },
        displayOptions,
        options: [
            (0, SortDescription_1.addSortDescription)(undefined, [
                {
                    name: 'Date Update',
                    value: 'updated_at',
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