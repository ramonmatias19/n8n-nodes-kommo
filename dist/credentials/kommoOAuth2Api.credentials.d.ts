import { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class kommoOAuth2Api implements ICredentialType {
    name: string;
    extends: string[];
    displayName: string;
    documentationUrl: string;
    icon: string;
    properties: INodeProperties[];
}
