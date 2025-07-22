import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { INumRange, IStringRange } from '../../Interface';
export declare const addDateRangeDescription: (displayName: string, name: string, displayOptions?: IDisplayOptions) => INodeProperties;
export declare const makeRangeProperty: (obj: IStringRange | undefined) => INumRange | undefined;
