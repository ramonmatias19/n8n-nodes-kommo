"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCatalogSelector = void 0;
const addCatalogSelector = (displayOptions) => {
    return {
        displayName: 'Catalog Name or ID',
        name: 'catalog_id',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        default: '',
        typeOptions: {
            loadOptionsMethod: 'getCatalogs',
        },
        required: true,
        displayOptions,
    };
};
exports.addCatalogSelector = addCatalogSelector;
//# sourceMappingURL=CatalogSelector.js.map