import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const destination = this.getNodeParameter('destination', index) as string;
	const events = this.getNodeParameter('events', index) as string[];

	const body: IDataObject = {
		destination,
		events,
	};

	const responseData = await apiRequest.call(this, 'POST', 'webhooks', body) as IDataObject;
	
	return this.helpers.returnJsonArray([responseData]);
} 