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
exports.descriptions = exports.updateNotes = exports.createNotes = exports.getNotes = void 0;
const getNotes = __importStar(require("./get"));
exports.getNotes = getNotes;
const createNotes = __importStar(require("./create"));
exports.createNotes = createNotes;
const updateNotes = __importStar(require("./update"));
exports.updateNotes = updateNotes;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['notes'],
            },
        },
        options: [
            {
                name: 'Get Notes List',
                value: 'getNotes',
                description: 'Get list of notes',
                action: 'Get list of notes',
            },
            {
                name: 'Create Notes',
                value: 'createNotes',
                description: 'Create new notes',
                action: 'Create new notes',
            },
            {
                name: 'Update Notes',
                value: 'updateNotes',
                action: 'Update notes',
                description: 'Update notes by ID',
            },
        ],
        default: 'getNotes',
    },
    ...getNotes.description,
    ...createNotes.description,
    ...updateNotes.description,
];
//# sourceMappingURL=index.js.map