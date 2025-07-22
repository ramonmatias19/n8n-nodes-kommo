import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
type MyFunction = (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]>;
export declare const cacheOptionsRequest: (fnc: MyFunction) => (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]>;
export {};
