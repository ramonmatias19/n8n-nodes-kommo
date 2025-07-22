import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
export declare const generalOptions: INodeProperties[];
export declare const entityType: (displayOptions: IDisplayOptions) => INodeProperties[];
export declare const getNotesDescription: (displayOptions: IDisplayOptions, nodeProperties?: INodeProperties[]) => INodeProperties[];
