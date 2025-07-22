import * as get from './get';
import * as create from './create';
import * as deleteWebhook from './delete';

import { INodeProperties } from 'n8n-workflow';

export { get, create, deleteWebhook as delete };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
			},
		},
		options: [
			{
				name: 'Criar Webhook',
				value: 'create',
				description: 'Criar um novo webhook para receber notificações de eventos',
				action: 'Criar webhook',
			},
			{
				name: 'Listar Webhooks',
				value: 'get',
				description: 'Obter lista de webhooks configurados',
				action: 'Listar webhooks',
			},
			{
				name: 'Excluir Webhook',
				value: 'delete',
				description: 'Excluir um webhook existente',
				action: 'Excluir webhook',
			},
		],
		default: 'get',
	},
	...get.description,
	...create.description,
	...deleteWebhook.description,
]; 