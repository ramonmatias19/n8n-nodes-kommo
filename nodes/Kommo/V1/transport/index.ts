import {
	GenericValue,
	IDataObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	NodeOperationError,
} from 'n8n-workflow';

export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
) {
	const authenticationMethod = this.getNodeParameter('authentication', 0) as string;
	const credentialType = authenticationMethod === 'oAuth2' ? 'kommoOAuth2Api' : 'kommoLongLivedApi';
	const credentials = await this.getCredentials(credentialType);

	const options: IHttpRequestOptions = {
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
	} catch (e) {
		const concreteErrorsDescription = (e as any).cause?.response?.data?.['validation-errors'];
		if (concreteErrorsDescription)
			throw new NodeOperationError(this.getNode(), 'Incorrect fields', {
				description: JSON.stringify(concreteErrorsDescription, null, 2),
			});
		throw e;
	}
}

export async function apiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
) {
	const returnData: any[] = [];

	let responseData: any;
	query.page = 1;
	query.limit = query.limit ? query.limit : 250;

	do {
		responseData = await apiRequest.call(this, method, endpoint, body, query);
		query.page++;
		returnData.push(responseData);
		// Simplificado: para quando não há mais dados
	} while (responseData && responseData._embedded && Object.keys(responseData._embedded).length > 0);

	return returnData;
}
