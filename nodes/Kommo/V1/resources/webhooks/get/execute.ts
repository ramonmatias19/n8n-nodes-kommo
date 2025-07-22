import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs: IDataObject = {};
	const limit = this.getNodeParameter('limit', index) as number;

	if (limit) {
		qs.limit = limit;
	}

	const responseData = await apiRequest.call(this, 'GET', 'webhooks', {}, qs) as IDataObject;
	
	const webhooks = (responseData._embedded as IDataObject)?.webhooks || responseData.webhooks || [];
	
	return this.helpers.returnJsonArray(webhooks as IDataObject[]);
} 