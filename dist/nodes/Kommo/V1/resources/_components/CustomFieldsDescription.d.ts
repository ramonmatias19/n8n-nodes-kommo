import { INodeProperties } from 'n8n-workflow';
import { ICustomFieldValuesForm } from '../../Interface';
export declare const addCustomFieldDescription: (loadOptionsMethod: string) => INodeProperties;
export declare const makeCustomFieldReqObject: (customFieldsValues: ICustomFieldValuesForm) => {
    field_id: number;
    values: Array<{
        value?: number | boolean | string;
        enum_id?: number;
        enum_code?: string;
    }>;
}[];
