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
exports.descriptions = exports.delete = exports.create = exports.get = void 0;
const get = __importStar(require("./get"));
exports.get = get;
const create = __importStar(require("./create"));
exports.create = create;
const deleteWebhook = __importStar(require("./delete"));
exports.delete = deleteWebhook;
exports.descriptions = [
    {
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['webhooks'],
            },
        },
        options: [
            {
                name: 'Criar Webhook',
                value: 'create',
                description: 'Criar um novo webhook para receber notificações de eventos',
                action: 'Criar webhook',
            },
            {
                name: 'Listar Webhooks',
                value: 'get',
                description: 'Obter lista de webhooks configurados',
                action: 'Listar webhooks',
            },
            {
                name: 'Excluir Webhook',
                value: 'delete',
                description: 'Excluir um webhook existente',
                action: 'Excluir webhook',
            },
        ],
        default: 'get',
    },
    ...get.description,
    ...create.description,
    ...deleteWebhook.description,
];
//# sourceMappingURL=index.js.map