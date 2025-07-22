"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearNullableProps = void 0;
function clearNullableProps(obj) {
    if (!obj)
        return undefined;
    return Object.keys(obj).reduce((acc, key) => {
        const val = obj[key];
        if (Array.isArray(val) && !val.length) {
            return acc;
        }
        if (val && typeof val === 'object') {
            const prop = clearNullableProps(val);
            if (prop && Object.keys(prop).length)
                acc[key] = prop;
            return acc;
        }
        if (!!val || typeof val === 'boolean') {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
exports.clearNullableProps = clearNullableProps;
//# sourceMappingURL=clearNullableProps.js.map