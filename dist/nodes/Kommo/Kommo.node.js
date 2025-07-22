"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kommo = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const KommoV1_node_1 = require("./V1/KommoV1.node");
class Kommo extends n8n_workflow_1.VersionedNodeType {
    constructor() {
        const baseDescription = {
            displayName: 'Kommo',
            name: 'kommo',
            icon: 'file:kommo_logo.svg',
            group: ['tool'],
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Sends data to Kommo',
            defaultVersion: 1,
        };
        const nodeVersions = {
            1: new KommoV1_node_1.KommoV1(baseDescription),
        };
        super(nodeVersions, baseDescription);
    }
}
exports.Kommo = Kommo;
//# sourceMappingURL=Kommo.node.js.map