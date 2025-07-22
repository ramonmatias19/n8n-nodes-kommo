import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'URL de Destino',
		name: 'destination',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['create'],
			},
		},
		default: '',
		placeholder: 'https://exemplo.com/webhook',
		description: 'URL para onde os eventos do webhook serão enviados',
	},
	{
		displayName: 'Eventos',
		name: 'events',
		type: 'multiOptions',
		required: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['create'],
			},
		},
		default: [],
		options: [
			{
				name: 'Lead Adicionado',
				value: 'add_lead',
				description: 'Evento disparado quando um lead é adicionado',
			},
			{
				name: 'Lead Atualizado',
				value: 'update_lead',
				description: 'Evento disparado quando um lead é atualizado',
			},
			{
				name: 'Lead Deletado',
				value: 'delete_lead',
				description: 'Evento disparado quando um lead é deletado',
			},
			{
				name: 'Contato Adicionado',
				value: 'add_contact',
				description: 'Evento disparado quando um contato é adicionado',
			},
			{
				name: 'Contato Atualizado',
				value: 'update_contact',
				description: 'Evento disparado quando um contato é atualizado',
			},
			{
				name: 'Contato Deletado',
				value: 'delete_contact',
				description: 'Evento disparado quando um contato é deletado',
			},
			{
				name: 'Empresa Adicionada',
				value: 'add_company',
				description: 'Evento disparado quando uma empresa é adicionada',
			},
			{
				name: 'Empresa Atualizada',
				value: 'update_company',
				description: 'Evento disparado quando uma empresa é atualizada',
			},
			{
				name: 'Empresa Deletada',
				value: 'delete_company',
				description: 'Evento disparado quando uma empresa é deletada',
			},
		],
		description: 'Eventos que dispararão o webhook',
	},
]; 