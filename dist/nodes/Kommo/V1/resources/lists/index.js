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
exports.descriptions = exports.updateListElements = exports.updateLists = exports.addListElements = exports.addLists = exports.getListElements = exports.getLists = void 0;
const getLists = __importStar(require("./get"));
exports.getLists = getLists;
const addLists = __importStar(require("./create"));
exports.addLists = addLists;
const updateLists = __importStar(require("./update"));
exports.updateLists = updateLists;
const getListElements = __importStar(require("./getElements"));
exports.getListElements = getListElements;
const addListElements = __importStar(require("./createElement"));
exports.addListElements = addListElements;
const updateListElements = __importStar(require("./updateElements"));
exports.updateListElements = updateListElements;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['lists'],
            },
        },
        options: [
            {
                name: 'Create List Elements',
                value: 'addListElements',
                action: 'Add multiple list elements into the account',
                description: 'Add multiple list elements into the account',
            },
            {
                name: 'Create Lists',
                value: 'addLists',
                description: 'Add multiple lists',
                action: 'Add multiple lists',
            },
            {
                name: 'Editing List Elements',
                value: 'updateListElements',
                action: 'Editing multiple list elements',
                description: 'Editing multiple list elements',
            },
            {
                name: 'Editing Lists',
                value: 'updateLists',
                action: 'Editing multiple lists',
                description: 'Editing multiple lists',
            },
            {
                name: 'Get List Elements',
                value: 'getListElements',
                action: 'Get available list elements on the account',
                description: 'Get available list elements on the account',
            },
            {
                name: 'Get Lists',
                value: 'getLists',
                description: 'Get all account lists',
                action: 'Get available lists',
            },
        ],
        default: 'getLists',
    },
    ...getLists.description,
    ...addLists.description,
    ...updateLists.description,
    ...getListElements.description,
    ...addListElements.description,
    ...updateListElements.description,
];
//# sourceMappingURL=index.js.map