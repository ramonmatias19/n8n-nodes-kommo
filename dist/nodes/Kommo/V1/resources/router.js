"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const account = __importStar(require("./account"));
const contacts = __importStar(require("./contacts"));
const leads = __importStar(require("./leads"));
const tasks = __importStar(require("./tasks"));
const companies = __importStar(require("./companies"));
const notes = __importStar(require("./notes"));
const lists = __importStar(require("./lists"));
const webhooks = __importStar(require("./webhooks"));
async function router() {
    const items = this.getInputData();
    const operationResult = [];
    let responseData = [];
    for (let i = 0; i < items.length; i++) {
        const resource = this.getNodeParameter('resource', i);
        const operation = this.getNodeParameter('operation', i);
        const kommo = {
            resource,
            operation,
        };
        try {
            if (kommo.resource === 'account') {
                responseData = await account[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'contacts') {
                responseData = await contacts[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'leads') {
                responseData = await leads[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'tasks') {
                responseData = await tasks[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'companies') {
                responseData = await companies[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'notes') {
                responseData = await notes[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'lists') {
                responseData = await lists[kommo.operation].execute.call(this, i);
            }
            else if (kommo.resource === 'webhooks') {
                responseData = await webhooks[kommo.operation].execute.call(this, i);
            }
            const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
            operationResult.push(...executionData);
        }
        catch (err) {
            if (this.continueOnFail()) {
                operationResult.push({ json: this.getInputData(i)[0].json, error: err });
            }
            else {
                if (err.context)
                    err.context.itemIndex = i;
                throw err;
            }
        }
    }
    return [operationResult];
}
exports.router = router;
//# sourceMappingURL=router.js.map