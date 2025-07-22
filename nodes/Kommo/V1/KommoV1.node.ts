/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import {
	IExecuteFunctions,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';
import * as loadOptions from './methods';
import { router } from './resources/router';

import * as account from './resources/account';
import * as contacts from './resources/contacts';
import * as leads from './resources/leads';
import * as tasks from './resources/tasks';
import * as companies from './resources/companies';
import * as notes from './resources/notes';
import * as lists from './resources/lists';
import * as webhooks from './resources/webhooks';

export class KommoV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			displayName: 'Kommo CRM',
			name: 'kommo',
			icon: 'file:kommo_logo.svg',
			group: ['output'],
			version: 1,
			subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
			description: 'Integração completa com Kommo CRM - gerencie leads, contatos, empresas, tarefas, notas, listas e webhooks',
			defaults: {
				name: 'Kommo CRM',
			},
			inputs: ['main'],
			outputs: ['main'],
			...(process.env.N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE === 'true' && { usableAsTool: true }),
			credentials: [
				{
					name: 'kommoOAuth2Api',
					required: true,
					displayOptions: {
						show: {
							authentication: ['oAuth2'],
						},
					},
				},
				{
					name: 'kommoLongLivedApi',
					required: true,
					displayOptions: {
						show: {
							authentication: ['longLivedToken'],
						},
					},
					testedBy: {
						request: {
							method: 'GET',
							url: 'account',
						},
					},
				},
			],
			properties: [
				{
					displayName: 'Autenticação',
					name: 'authentication',
					type: 'options',
					options: [
						{
							name: 'Token De Longa Duração',
							value: 'longLivedToken',
						},
						{
							name: 'OAuth2',
							value: 'oAuth2',
						},
					],
					default: 'oAuth2',
				},
				{
					displayName: 'Recurso',
					name: 'resource',
					type: 'options',
					noDataExpression: true,
					options: [
						{
							name: 'Conta',
							value: 'account',
						},
						{
							name: 'Contato',
							value: 'contacts',
						},
						{
							name: 'Empresa',
							value: 'companies',
						},
						{
							name: 'Lead',
							value: 'leads',
						},
						{
							name: 'Lista',
							value: 'lists',
						},
						{
							name: 'Nota',
							value: 'notes',
						},
						{
							name: 'Tarefa',
							value: 'tasks',
						},
						{
							name: 'Webhook',
							value: 'webhooks',
						},
					],
					default: 'account',
				},
				...account.descriptions,
				...companies.descriptions,
				...contacts.descriptions,
				...leads.descriptions,
				...tasks.descriptions,
				...notes.descriptions,
				...lists.descriptions,
				...webhooks.descriptions,
			],
		};
	}

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return router.call(this);
	}
}
