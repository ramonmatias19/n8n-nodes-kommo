"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kommoLongLivedApi = void 0;
class kommoLongLivedApi {
    constructor() {
        this.name = 'kommoLongLivedApi';
        this.displayName = 'Kommo CRM Long-Lived Token API';
        this.documentationUrl = 'https://developers.kommo.com/docs/oauth/long-lived-token';
        this.icon = 'file:kommo_logo.svg';
        this.properties = [
            {
                displayName: 'Subdomínio',
                name: 'subdomain',
                type: 'string',
                default: '',
                placeholder: 'minhaempresa',
                description: 'Apenas o subdomínio da sua conta Kommo. Sem .kommo.com',
                required: true,
            },
            {
                displayName: 'Access Token (Long-lived)',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Token de acesso de longa duração gerado na sua conta Kommo para integrações privadas',
                required: true,
            },
        ];
    }
}
exports.kommoLongLivedApi = kommoLongLivedApi;
//# sourceMappingURL=kommoLongLivedApi.credentials.js.map