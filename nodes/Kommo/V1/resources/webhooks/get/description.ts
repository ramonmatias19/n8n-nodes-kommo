import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Limite',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,

		},
		default: 50,
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['get'],
			},
		},
		description: 'Max number of results to return',
	},
]; 