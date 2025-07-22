"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.createCompanyModel = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['companies'],
        operation: ['createCompany'],
    },
};
exports.createCompanyModel = [
    ...(0, model_1.makeCompanyModelDescription)().filter((el) => el.name !== 'id'),
    (0, RequestId_1.addRequestId)(),
];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Companies',
        name: 'collection',
        placeholder: 'Add Company',
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
                displayName: 'Company',
                name: 'company',
                values: exports.createCompanyModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map