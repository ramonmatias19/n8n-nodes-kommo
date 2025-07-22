import { ICredentialDataDecryptedObject, ICredentialTestRequest, ICredentialType, IHttpRequestOptions, INodeProperties } from 'n8n-workflow';
export declare class kommoLongLivedApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    icon: IconFile;
    properties: INodeProperties[];
    test: ICredentialTestRequest;
    authenticate(credentials: ICredentialDataDecryptedObject, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions>;
}
