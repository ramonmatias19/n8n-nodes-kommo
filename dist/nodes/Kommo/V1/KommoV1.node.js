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
exports.KommoV1 = void 0;
const loadOptions = __importStar(require("./methods"));
const router_1 = require("./resources/router");
const account = __importStar(require("./resources/account"));
const contacts = __importStar(require("./resources/contacts"));
const leads = __importStar(require("./resources/leads"));
const tasks = __importStar(require("./resources/tasks"));
const companies = __importStar(require("./resources/companies"));
const notes = __importStar(require("./resources/notes"));
const lists = __importStar(require("./resources/lists"));
const webhooks = __importStar(require("./resources/webhooks"));
class KommoV1 {
    constructor(baseDescription) {
        this.methods = { loadOptions };
        this.description = {
            ...baseDescription,
            displayName: 'Kommo CRM',
            name: 'kommo',
            icon: 'file:kommo_logo.svg',
            group: ['tool'],
            version: 1,
            subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
            description: 'Integração completa com Kommo CRM - gerencie leads, contatos, empresas, tarefas, notas, listas e webhooks',
            defaults: {
                name: 'Kommo CRM',
            },
            inputs: ['main'],
            outputs: ['main'],
            usableAsTool: true,
            credentials: [
                {
                    name: 'kommoOAuth2Api',
                    required: true,
                    displayOptions: {
                        show: {
                            authentication: ['oAuth2'],
                        },
                    },
                },
                {
                    name: 'kommoLongLivedApi',
                    required: true,
                    displayOptions: {
                        show: {
                            authentication: ['longLivedToken'],
                        },
                    },
                    testedBy: {
                        request: {
                            method: 'GET',
                            url: 'account',
                        },
                    },
                },
            ],
            properties: [
                {
                    displayName: 'Autenticação',
                    name: 'authentication',
                    type: 'options',
                    options: [
                        {
                            name: 'Token De Longa Duração',
                            value: 'longLivedToken',
                        },
                        {
                            name: 'OAuth2',
                            value: 'oAuth2',
                        },
                    ],
                    default: 'oAuth2',
                },
                {
                    displayName: 'Recurso',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Conta',
                            value: 'account',
                        },
                        {
                            name: 'Contato',
                            value: 'contacts',
                        },
                        {
                            name: 'Empresa',
                            value: 'companies',
                        },
                        {
                            name: 'Lead',
                            value: 'leads',
                        },
                        {
                            name: 'Lista',
                            value: 'lists',
                        },
                        {
                            name: 'Nota',
                            value: 'notes',
                        },
                        {
                            name: 'Tarefa',
                            value: 'tasks',
                        },
                        {
                            name: 'Webhook',
                            value: 'webhooks',
                        },
                    ],
                    default: 'account',
                },
                ...account.descriptions,
                ...companies.descriptions,
                ...contacts.descriptions,
                ...leads.descriptions,
                ...tasks.descriptions,
                ...notes.descriptions,
                ...lists.descriptions,
                ...webhooks.descriptions,
            ],
        };
    }
    async execute() {
        return router_1.router.call(this);
    }
}
exports.KommoV1 = KommoV1;
//# sourceMappingURL=KommoV1.node.js.map