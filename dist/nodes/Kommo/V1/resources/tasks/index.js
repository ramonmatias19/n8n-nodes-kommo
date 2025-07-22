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
exports.descriptions = exports.updateTasks = exports.createTasks = exports.getTasks = void 0;
const getTasks = __importStar(require("./get"));
exports.getTasks = getTasks;
const createTasks = __importStar(require("./create"));
exports.createTasks = createTasks;
const updateTasks = __importStar(require("./update"));
exports.updateTasks = updateTasks;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['tasks'],
            },
        },
        options: [
            {
                name: 'Get Task List',
                value: 'getTasks',
                description: 'Get list of tasks',
                action: 'Get list of tasks',
            },
            {
                name: 'Create Tasks',
                value: 'createTasks',
                description: 'Create new tasks',
                action: 'Create new tasks',
            },
            {
                name: 'Update Tasks',
                value: 'updateTasks',
                action: 'Update tasks',
                description: 'Update tasks by ID',
            },
        ],
        default: 'getTasks',
    },
    ...getTasks.description,
    ...updateTasks.description,
    ...createTasks.description,
];
//# sourceMappingURL=index.js.map