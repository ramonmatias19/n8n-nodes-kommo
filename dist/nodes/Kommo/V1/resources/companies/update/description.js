"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = void 0;
const JsonParametersDescription_1 = require("../../_components/JsonParametersDescription");
const model_1 = require("../model");
const RequestId_1 = require("../../_components/RequestId");
const displayOptions = {
    show: {
        resource: ['companies'],
        operation: ['updateCompany'],
    },
};
const updateCompanyModel = [...(0, model_1.makeCompanyModelDescription)(), (0, RequestId_1.addRequestId)()];
exports.description = [
    ...(0, JsonParametersDescription_1.addJsonParametersDescription)(displayOptions),
    {
        displayName: 'Companies',
        name: 'collection',
        placeholder: 'Edit company',
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
                values: updateCompanyModel,
            },
        ],
    },
];
//# sourceMappingURL=description.js.map