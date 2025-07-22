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
exports.descriptions = exports.updateContacts = exports.createContacts = exports.getContacts = void 0;
const getContacts = __importStar(require("./get"));
exports.getContacts = getContacts;
const createContacts = __importStar(require("./create"));
exports.createContacts = createContacts;
const updateContacts = __importStar(require("./update"));
exports.updateContacts = updateContacts;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['contacts'],
            },
        },
        options: [
            {
                name: 'Get Contacts List',
                value: 'getContacts',
                description: 'Get list of contacts',
                action: 'Get list of contacts',
            },
            {
                name: 'Create Contacts',
                value: 'createContacts',
                description: 'Create new contacts',
                action: 'Create new contacts',
            },
            {
                name: 'Update Contacts',
                value: 'updateContacts',
                description: 'Update contacts by ID',
                action: 'Update contacts',
            },
        ],
        default: 'getContacts',
    },
    ...getContacts.description,
    ...createContacts.description,
    ...updateContacts.description,
];
//# sourceMappingURL=index.js.map