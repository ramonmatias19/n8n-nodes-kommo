"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kommoOAuth2Api = void 0;
class kommoOAuth2Api {
    constructor() {
        this.name = 'kommoOAuth2Api';
        this.extends = ['oAuth2Api'];
        this.displayName = 'Kommo CRM OAuth2 API';
        this.documentationUrl = 'https://developers.kommo.com/docs';
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
                displayName: 'Grant Type',
                name: 'grantType',
                type: 'hidden',
                default: 'authorizationCode',
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://www.kommo.com/oauth',
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: '=https://{{$self["subdomain"]}}.kommo.com/oauth2/access_token',
            },
            {
                displayName: 'Client ID (Integration ID)',
                name: 'clientId',
                type: 'string',
                default: '',
                placeholder: '********-****-****-****-************',
                description: 'ID da integração obtido na sua conta Kommo em Configurações > Integrações',
                required: true,
            },
            {
                displayName: 'Client Secret (Secret Key)',
                name: 'clientSecret',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                placeholder: '****************************************',
                description: 'Chave secreta da integração obtida na sua conta Kommo',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: '',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                default: 'grant_type=authorization_code',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'header',
            },
        ];
    }
}
exports.kommoOAuth2Api = kommoOAuth2Api;
//# sourceMappingURL=kommoOAuth2Api.credentials.js.map