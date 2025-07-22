"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptions = exports.updateCompany = exports.createCompany = exports.getCompany = void 0;
const getCompany = __importStar(require("./get"));
exports.getCompany = getCompany;
const createCompany = __importStar(require("./create"));
exports.createCompany = createCompany;
const updateCompany = __importStar(require("./update"));
exports.updateCompany = updateCompany;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['companies'],
            },
        },
        options: [
            {
                name: 'Get Companies List',
                value: 'getCompany',
                description: 'Get list of companies',
                action: 'Get list of companies',
            },
            {
                name: 'Create',
                value: 'createCompany',
                description: 'Create new companies',
                action: 'Create new companies',
            },
            {
                name: 'Update',
                value: 'updateCompany',
                description: 'Update companies',
                action: 'Update companies',
            },
        ],
        default: 'getCompany',
    },
    ...getCompany.description,
    ...createCompany.description,
    ...updateCompany.description,
];
//# sourceMappingURL=index.js.map