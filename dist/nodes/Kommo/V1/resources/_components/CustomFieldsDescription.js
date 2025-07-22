"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCustomFieldReqObject = exports.addCustomFieldDescription = void 0;
const isJson_1 = require("../../helpers/isJson");
const isNumber_1 = require("../../helpers/isNumber");
const stringToArray_1 = require("../../helpers/stringToArray");
const addCustomFieldDescription = (loadOptionsMethod) => {
    return {
        displayName: 'Custom Fields',
        name: 'custom_fields_values',
        placeholder: 'Add custom field',
        type: 'fixedCollection',
        default: {},
        typeOptions: {
            multipleValues: true,
        },
        options: [
            {
                displayName: 'Custom Field',
                name: 'custom_field',
                values: [
                    {
                        displayName: 'Name',
                        name: 'data',
                        type: 'options',
                        typeOptions: {
                            loadOptionsMethod,
                        },
                        default: '',
                        required: true,
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
    };
};
exports.addCustomFieldDescription = addCustomFieldDescription;
const makeCustomFieldReqObject = (customFieldsValues) => {
    var _a;
    return (_a = customFieldsValues.custom_field) === null || _a === void 0 ? void 0 : _a.reduce((acc, cf) => {
        let value, enum_id, enum_code;
        const data = JSON.parse(cf.data);
        if (typeof cf.value === 'object') {
            return [...acc, { field_id: data.id, values: cf.value }];
        }
        if (typeof cf.value === 'string' &&
            (0, isJson_1.isJson)(cf.value) &&
            !(0, isNumber_1.isNumber)(cf.value) &&
            typeof JSON.parse(cf.value) !== 'boolean') {
            return [...acc, { field_id: data.id, values: JSON.parse(cf.value) }];
        }
        if (typeof cf.value === 'string' &&
            ['multiselect', 'radiobutton', 'category'].includes(data.type) &&
            cf.value.split(',').length > 1) {
            return [
                ...acc,
                {
                    field_id: data.id,
                    values: (0, stringToArray_1.stringToArray)(cf.value).map((value) => typeof value === 'number' ? { enum_id: value } : { value }),
                },
            ];
        }
        switch (data.type) {
            case 'checkbox':
                if (typeof cf.value === 'string' &&
                    ['нет', 'no', 'false', 'off'].includes(cf.value.toLowerCase())) {
                    value = false;
                    break;
                }
                value = Boolean(cf.value);
                break;
            case 'date':
                value = Number(cf.value);
                break;
            case 'date_time':
                value = Number(cf.value);
                break;
            case 'birthday':
                value = Number(cf.value);
                break;
            case 'text':
                value = String(cf.value);
                break;
            case 'numeric':
                value = String(cf.value);
                break;
            case 'textarea':
                value = String(cf.value);
                break;
            case 'price':
                value = String(cf.value);
                break;
            case 'streetaddress':
                value = String(cf.value);
                break;
            case 'tracking_data':
                value = String(cf.value);
                break;
            case 'monetary':
                value = String(cf.value);
                break;
            case 'url':
                value = String(cf.value);
                break;
            case 'select':
                if ((0, isNumber_1.isNumber)(cf.value)) {
                    enum_id = Number(cf.value);
                }
                else {
                    value = String(cf.value);
                }
                break;
            case 'multiselect':
                if ((0, isNumber_1.isNumber)(cf.value)) {
                    enum_id = Number(cf.value);
                }
                else {
                    value = String(cf.value);
                }
                break;
            case 'radiobutton':
                if ((0, isNumber_1.isNumber)(cf.value)) {
                    enum_id = Number(cf.value);
                }
                else {
                    value = String(cf.value);
                }
                break;
            case 'category':
                if ((0, isNumber_1.isNumber)(cf.value)) {
                    enum_id = Number(cf.value);
                }
                else {
                    value = String(cf.value);
                }
                break;
            case 'multitext':
                value = String(cf.value);
                break;
            case 'smart_address':
                value = String(cf.value);
                break;
            case 'legal_entity':
                value = JSON.parse(cf.value);
                break;
            case 'items':
                value = JSON.parse(cf.value);
                break;
            case 'linked_entity':
                value = JSON.parse(cf.value);
                break;
            case 'chained_list':
                break;
            case 'file':
                value = JSON.parse(cf.value);
                break;
            case 'payer':
                value = JSON.parse(cf.value);
                break;
            case 'supplier':
                value = JSON.parse(cf.value);
                break;
            case 'tracking_data':
                value = JSON.parse(cf.value);
                break;
            default:
                break;
        }
        if (!enum_id && !enum_code) {
            if (typeof value === 'undefined')
                return acc;
            if (value === 'undefined')
                return acc;
            if (value === '')
                return acc;
        }
        const existRecord = acc.filter((el) => el.field_id === data.id);
        if (existRecord.length) {
            const values = [...existRecord[0].values, { value, enum_id, enum_code }];
            acc = [
                ...acc.filter((el) => el.field_id !== data.id),
                { field_id: existRecord[0].field_id, values },
            ];
        }
        else {
            acc.push({ field_id: data.id, values: [{ value, enum_id, enum_code }] });
        }
        return acc;
    }, []);
};
exports.makeCustomFieldReqObject = makeCustomFieldReqObject;
//# sourceMappingURL=CustomFieldsDescription.js.map