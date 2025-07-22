"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskTypes = exports.getTags = exports.getLossReasons = exports.getCatalogCustomFields = exports.getCustomerSegmentCustomFields = exports.getCustomerCustomFields = exports.getCompanyCustomFields = exports.getContactCustomFields = exports.getLeadCustomFields = exports.getActiveUsersWithRobot = exports.getActiveUsers = exports.getCatalogElements = exports.getCatalogs = exports.getStatusesWithoutUnsorted = exports.getStatuses = exports.loadPipelinesOptions = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const transport_1 = require("../transport");
const statusPropertyOptions_1 = require("../helpers/statusPropertyOptions");
const cacheRequest_1 = require("../helpers/cacheRequest");
async function loadPipelinesOptions() {
    const responseData = await transport_1.apiRequest.call(this, 'GET', 'leads/pipelines', {});
    const embedded = responseData._embedded;
    if (!(embedded === null || embedded === void 0 ? void 0 : embedded.pipelines)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return (embedded.pipelines.map((pipeline) => ({
        name: `${pipeline.name} ${pipeline.is_main ? '(main)' : ''}`,
        value: pipeline.id,
    })) || []);
}
exports.loadPipelinesOptions = loadPipelinesOptions;
async function getAllStatuses() {
    const pipelinesResponseData = await loadPipelinesOptions.call(this);
    if (!pipelinesResponseData.length) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    const resultArray = [];
    for (const pipeline of pipelinesResponseData) {
        const responseData = await transport_1.apiRequest.call(this, 'GET', `leads/pipelines/${pipeline.value}/statuses`, {});
        const embedded = responseData._embedded;
        const statuses = (embedded === null || embedded === void 0 ? void 0 : embedded.statuses) ? embedded.statuses.map((s) => ({
            ...s,
            pipeline_name: pipeline.name,
        })) : [];
        if (statuses.length)
            resultArray.push(...statuses);
    }
    return resultArray;
}
exports.getStatuses = (0, cacheRequest_1.cacheOptionsRequest)(async function getStatuses() {
    const statuses = await getAllStatuses.call(this);
    if (statuses)
        return statuses.map(statusPropertyOptions_1.statusPropertyOptions);
    return [];
});
exports.getStatusesWithoutUnsorted = (0, cacheRequest_1.cacheOptionsRequest)(async function getStatusesWithoutUnsorted() {
    const statuses = await getAllStatuses.call(this);
    return [
        { name: 'Not Selected', value: 0 },
        ...statuses.filter((s) => !s.type).map(statusPropertyOptions_1.statusPropertyOptions),
    ];
});
exports.getCatalogs = (0, cacheRequest_1.cacheOptionsRequest)(async function getCatalogs() {
    const catalogsResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', 'catalogs', {});
    return catalogsResponseData.flatMap((data) => {
        var _a;
        if (!((_a = data === null || data === void 0 ? void 0 : data._embedded) === null || _a === void 0 ? void 0 : _a.catalogs))
            return [];
        return data._embedded.catalogs.map((catalog) => ({
            name: catalog.name,
            value: catalog.id,
        }));
    });
});
exports.getCatalogElements = (0, cacheRequest_1.cacheOptionsRequest)(async function getCatalogElements() {
    const catalogId = await this.getNodeParameter('catalog_id', 0);
    const elementsResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `catalogs/${catalogId}/elements`, {});
    return elementsResponseData.flatMap((data) => {
        var _a;
        if (!((_a = data === null || data === void 0 ? void 0 : data._embedded) === null || _a === void 0 ? void 0 : _a.elements))
            return [];
        return data._embedded.elements.map((el) => ({
            name: el.name,
            value: el.id,
        }));
    });
});
exports.getActiveUsers = (0, cacheRequest_1.cacheOptionsRequest)(async function getActiveUsers() {
    const usersResponseDatas = await transport_1.apiRequestAllItems.call(this, 'GET', 'users', {});
    const users = usersResponseDatas.reduce((acc, response) => {
        acc.push(...response._embedded.users);
        return acc;
    }, []);
    if (!(users === null || users === void 0 ? void 0 : users.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return users
        .filter((user) => user.rights.is_active)
        .map((user) => ({
        name: user.name,
        value: user.id,
    }));
});
exports.getActiveUsersWithRobot = (0, cacheRequest_1.cacheOptionsRequest)(async function getActiveUsersWithRobot() {
    const users = await exports.getActiveUsers.call(this);
    return [{ name: 'Not Selected', value: 0 }, ...users];
});
exports.getLeadCustomFields = (0, cacheRequest_1.cacheOptionsRequest)(async function () {
    const cfResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `leads/custom_fields`, {});
    const customFields = cfResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.custom_fields);
        return acc;
    }, []);
    if (!(customFields === null || customFields === void 0 ? void 0 : customFields.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return customFields.map((field) => ({
        name: `${field.name} (${field.type})`,
        value: JSON.stringify({ id: field.id, type: field.type }),
    }));
});
exports.getContactCustomFields = (0, cacheRequest_1.cacheOptionsRequest)(async function getContactCustomFields() {
    const cfResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `contacts/custom_fields`, {});
    const customFields = cfResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.custom_fields);
        return acc;
    }, []);
    if (!(customFields === null || customFields === void 0 ? void 0 : customFields.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return customFields.map((field) => ({
        name: `${field.name} (${field.type})`,
        value: JSON.stringify({ id: field.id, type: field.type }),
    }));
});
exports.getCompanyCustomFields = (0, cacheRequest_1.cacheOptionsRequest)(async function getCompanyCustomFields() {
    const cfResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `companies/custom_fields`, {});
    const customFields = cfResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.custom_fields);
        return acc;
    }, []);
    if (!(customFields === null || customFields === void 0 ? void 0 : customFields.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return customFields.map((field) => ({
        name: `${field.name} (${field.type})`,
        value: JSON.stringify({ id: field.id, type: field.type }),
    }));
});
exports.getCustomerCustomFields = (0, cacheRequest_1.cacheOptionsRequest)(async function getCustomerCustomFields() {
    const cfResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `customers/custom_fields`, {});
    const customFields = cfResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.custom_fields);
        return acc;
    }, []);
    if (!(customFields === null || customFields === void 0 ? void 0 : customFields.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return customFields.map((field) => ({
        name: `${field.name} (${field.type})`,
        value: JSON.stringify({ id: field.id, type: field.type }),
    }));
});
exports.getCustomerSegmentCustomFields = (0, cacheRequest_1.cacheOptionsRequest)(async function getCustomerSegmentCustomFields() {
    const cfResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `customers/segments/custom_fields`, {});
    const customFields = cfResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.custom_fields);
        return acc;
    }, []);
    if (!(customFields === null || customFields === void 0 ? void 0 : customFields.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return customFields.map((field) => ({
        name: `${field.name} (${field.type})`,
        value: JSON.stringify({ id: field.id, type: field.type }),
    }));
});
exports.getCatalogCustomFields = (0, cacheRequest_1.cacheOptionsRequest)(async function getCatalogCustomFields() {
    const catalog_id = await this.getNodeParameter('catalog_id', 0);
    if (!catalog_id) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    const cfResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `catalogs/${catalog_id}/custom_fields`, {});
    const customFields = cfResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.custom_fields);
        return acc;
    }, []);
    if (!(customFields === null || customFields === void 0 ? void 0 : customFields.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return customFields.map((field) => ({
        name: `${field.name} (${field.type})`,
        value: JSON.stringify({ id: field.id, type: field.type }),
    }));
});
exports.getLossReasons = (0, cacheRequest_1.cacheOptionsRequest)(async function getLossReasons() {
    const accSettingsData = await transport_1.apiRequest.call(this, 'GET', 'account', {});
    if (!accSettingsData.is_loss_reason_enabled)
        return [];
    const lrResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', 'leads/loss_reasons', {});
    const lossReasons = lrResponseData.reduce((acc, response) => {
        acc.push(...response._embedded.loss_reasons);
        return acc;
    }, []);
    if (!(lossReasons === null || lossReasons === void 0 ? void 0 : lossReasons.length)) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return lossReasons.map((field) => ({
        name: field.name,
        value: field.id,
    }));
});
exports.getTags = (0, cacheRequest_1.cacheOptionsRequest)(async function getTags() {
    const resource = await this.getNodeParameter('resource', 0);
    if (!resource) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    const tagsResponseData = await transport_1.apiRequestAllItems.call(this, 'GET', `${resource}/tags`, {});
    const tags = tagsResponseData.reduce((acc, response) => {
        var _a;
        if (!(response === null || response === void 0 ? void 0 : response._embedded))
            return acc;
        acc.push(...(_a = response._embedded) === null || _a === void 0 ? void 0 : _a.tags);
        return acc;
    }, []);
    if (!(tags === null || tags === void 0 ? void 0 : tags.length)) {
        return [];
    }
    return tags.map((field) => ({
        name: field.name.length > 30 ? `${field.name.slice(0, 30)}...` : field.name,
        value: field.id,
    }));
});
exports.getTaskTypes = (0, cacheRequest_1.cacheOptionsRequest)(async function getTaskTypes() {
    const accountInfo = await transport_1.apiRequest.call(this, 'GET', `account`, {}, { with: 'task_types' });
    const embedded = accountInfo._embedded;
    const taskTypes = (embedded === null || embedded === void 0 ? void 0 : embedded.task_types) || [];
    return taskTypes.map((field) => ({
        name: field.name.length > 30 ? `${field.name.slice(0, 30)}...` : field.name,
        value: field.id,
    }));
});
//# sourceMappingURL=index.js.map