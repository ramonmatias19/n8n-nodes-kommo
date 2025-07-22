"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTagsArray = void 0;
function makeTagsArray(group) {
    if (typeof group.id === 'string')
        return [{ name: group.id }];
    if (typeof group.id === 'object')
        return group.id.map((val) => {
            if (typeof val === 'number')
                return { id: val };
            if (typeof val === 'string')
                return { name: val };
            return { name: String(val) };
        });
    return [];
}
exports.makeTagsArray = makeTagsArray;
//# sourceMappingURL=makeTagsArray.js.map