import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookId = this.getNodeParameter('webhookId', index) as string;

	await apiRequest.call(this, 'DELETE', `webhooks/${webhookId}`);
	
	return this.helpers.returnJsonArray([{ success: true, webhookId }]);
} 