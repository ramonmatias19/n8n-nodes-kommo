"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRangeProperty = exports.addDateRangeDescription = void 0;
const getTimestampFromDateString_1 = require("../../helpers/getTimestampFromDateString");
const addDateRangeDescription = (displayName, name, displayOptions) => {
    return {
        displayName,
        name,
        placeholder: 'Add Date Range',
        type: 'fixedCollection',
        default: {},
        displayOptions,
        options: [
            {
                displayName: 'Date Range Properties',
                name: 'dateRangeCustomProperties',
                values: [
                    {
                        displayName: 'From',
                        name: 'from',
                        type: 'dateTime',
                        required: true,
                        default: '',
                    },
                    {
                        displayName: 'To',
                        name: 'to',
                        type: 'dateTime',
                        required: true,
                        default: '',
                    },
                ],
            },
        ],
    };
};
exports.addDateRangeDescription = addDateRangeDescription;
const makeRangeProperty = (obj) => {
    if (!obj)
        return undefined;
    const from = (0, getTimestampFromDateString_1.getTimestampFromDateString)(obj === null || obj === void 0 ? void 0 : obj.from);
    const to = (0, getTimestampFromDateString_1.getTimestampFromDateString)(obj === null || obj === void 0 ? void 0 : obj.to);
    if (!from || !to)
        return;
    return {
        from,
        to,
    };
};
exports.makeRangeProperty = makeRangeProperty;
//# sourceMappingURL=DateRangeDescription.js.map