import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class kommoLongLivedApi implements ICredentialType {
	name = 'kommoLongLivedApi';
	displayName = 'Kommo CRM Long-Lived Token API';
	documentationUrl = 'https://developers.kommo.com/docs/oauth/long-lived-token';
	icon = 'file:kommo_logo.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'Subdomínio',
			name: 'subdomain',
			type: 'string',
			default: '',
			placeholder: 'minhaempresa',
			description: 'Apenas o subdomínio da sua conta Kommo. Sem .kommo.com',
			required: true,
		},
		{
			displayName: 'Access Token (Long-lived)',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Token de acesso de longa duração gerado na sua conta Kommo para integrações privadas',
			required: true,
		},
	];
}
