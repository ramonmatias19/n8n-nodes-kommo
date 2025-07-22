import { IExecuteFunctions, INodeType, INodeTypeBaseDescription, INodeTypeDescription } from 'n8n-workflow';
import * as loadOptions from './methods';
export declare class KommoV1 implements INodeType {
    description: INodeTypeDescription;
    constructor(baseDescription: INodeTypeBaseDescription);
    methods: {
        loadOptions: typeof loadOptions;
    };
    execute(this: IExecuteFunctions): Promise<import("n8n-workflow").INodeExecutionData[][]>;
}
