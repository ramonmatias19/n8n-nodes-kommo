"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const LimitDescription_1 = require("../../_components/LimitDescription");
const PageDescription_1 = require("../../_components/PageDescription");
const ReturnAllDescription_1 = require("../../_components/ReturnAllDescription");
const displayOptions = {
    show: {
        resource: ['lists'],
        operation: ['getLists'],
    },
};
exports.description = [
    (0, ReturnAllDescription_1.addReturnAll)(displayOptions),
    (0, PageDescription_1.addPageDescription)({
        show: {
            ...displayOptions.show,
            returnAll: [false],
        },
    }),
    (0, LimitDescription_1.addLimitDescription)(displayOptions),
];
//# sourceMappingURL=description.js.map