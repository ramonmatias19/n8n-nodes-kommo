"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequestAllItems = exports.apiRequest = void 0;
const n8n_workflow_1 = require("n8n-workflow");
async function apiRequest(method, endpoint, body = {}, qs = {}) {
    var _a, _b, _c;
    const authenticationMethod = this.getNodeParameter('authentication', 0);
    const credentialType = authenticationMethod === 'oAuth2' ? 'kommoOAuth2Api' : 'kommoLongLivedApi';
    const credentials = await this.getCredentials(credentialType);
    const options = {
        method,
        body,
        qs,
        url: `https://${credentials.subdomain}.kommo.com/api/v4/${endpoint}`,
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
    };
    try {
        return await this.helpers.httpRequestWithAuthentication.call(this, credentialType, options);
    }
    catch (e) {
        const concreteErrorsDescription = (_c = (_b = (_a = e.cause) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c['validation-errors'];
        if (concreteErrorsDescription)
            throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'Incorrect fields', {
                description: JSON.stringify(concreteErrorsDescription, null, 2),
            });
        throw e;
    }
}
exports.apiRequest = apiRequest;
async function apiRequestAllItems(method, endpoint, body = {}, query = {}) {
    const returnData = [];
    let responseData;
    query.page = 1;
    query.limit = query.limit ? query.limit : 250;
    do {
        responseData = await apiRequest.call(this, method, endpoint, body, query);
        query.page++;
        returnData.push(responseData);
    } while (responseData && responseData._embedded && Object.keys(responseData._embedded).length > 0);
    return returnData;
}
exports.apiRequestAllItems = apiRequestAllItems;
//# sourceMappingURL=index.js.map