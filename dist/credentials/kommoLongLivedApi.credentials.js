"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kommoLongLivedApi = void 0;
class kommoLongLivedApi {
    constructor() {
        this.name = 'kommoLongLivedApi';
        this.displayName = 'Kommo Long Lived Token API';
        this.documentationUrl = 'https://kommo.com/developers';
        this.icon = `file:kommo_logo.svg`;
        this.properties = [
            {
                displayName: 'Subdomain',
                name: 'subdomain',
                type: 'string',
                default: '',
                placeholder: 'mycompany',
                description: 'Just subdomain. Without .kommo.com.',
                required: true,
            },
            {
                displayName: 'Long term API key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
        ];
        this.test = {
            request: {
                baseURL: `=https://{{$credentials.subdomain}}.kommo.com/api/v4/`,
                url: 'account',
            },
        };
    }
    async authenticate(credentials, requestOptions) {
        requestOptions.headers = { authorization: `Bearer ${credentials.apiKey}` };
        return requestOptions;
    }
}
exports.kommoLongLivedApi = kommoLongLivedApi;
//# sourceMappingURL=kommoLongLivedApi.credentials.js.map