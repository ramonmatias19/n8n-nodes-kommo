import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'ID Do Webhook',
		name: 'webhookId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID do webhook a ser excluído',
	},
]; 