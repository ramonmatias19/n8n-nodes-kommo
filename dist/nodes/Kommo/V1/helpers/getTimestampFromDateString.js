"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestampFromDateString = void 0;
const getTimestampFromDateString = (dateString) => {
    if (!dateString)
        return;
    if (typeof dateString === 'number')
        return dateString;
    return Math.round(new Date(dateString).valueOf() / 1000);
};
exports.getTimestampFromDateString = getTimestampFromDateString;
//# sourceMappingURL=getTimestampFromDateString.js.map