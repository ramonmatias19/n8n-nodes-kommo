"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const transport_1 = require("../../../transport");
const getTimestampFromDateString_1 = require("../../../helpers/getTimestampFromDateString");
const clearNullableProps_1 = require("../../../helpers/clearNullableProps");
async function execute(index) {
    const requestMethod = 'PATCH';
    const endpoint = (await this.getNodeParameter('entity_type', 0)) + '/notes';
    const jsonParams = (await this.getNodeParameter('json', 0));
    if (jsonParams) {
        const jsonString = (await this.getNodeParameter('jsonString', 0));
        const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, JSON.parse(jsonString));
        return this.helpers.returnJsonArray(responseData);
    }
    const formNotes = (await this.getNodeParameter('notes', 0));
    const noteTypes = Object.keys(formNotes);
    const body = noteTypes
        .flatMap((noteType) => {
        var _a;
        return (_a = formNotes[noteType]) === null || _a === void 0 ? void 0 : _a.map((el) => {
            let params, element;
            switch (noteType) {
                case 'attachment':
                    element = el;
                    params = {
                        file_uuid: element.file_uuid,
                        file_name: element.file_name,
                        version_uuid: element.version_uuid,
                    };
                    break;
                case 'call_in':
                    element = el;
                    params = {
                        uniq: element.uniq,
                        duration: element.duration,
                        source: element.source,
                        link: element.link,
                        phone: element.phone,
                        call_responsible: element.call_responsible,
                    };
                    break;
                case 'call_out':
                    element = el;
                    params = {
                        uniq: element.uniq,
                        duration: element.duration,
                        source: element.source,
                        link: element.link,
                        phone: element.phone,
                        call_responsible: element.call_responsible,
                    };
                    break;
                case 'common':
                    element = el;
                    params = {
                        text: element.text,
                    };
                    break;
                case 'extended_service_message':
                    element = el;
                    params = {
                        text: element.text,
                        service: element.service,
                    };
                    break;
                case 'geolocation':
                    element = el;
                    params = {
                        text: element.text,
                        address: element.address,
                        longitude: element.longitude,
                        latitude: element.latitude,
                    };
                    break;
                case 'message_cashier':
                    element = el;
                    params = {
                        status: element.status,
                        text: element.text,
                    };
                    break;
                case 'service_message':
                    element = el;
                    params = {
                        text: element.text,
                        service: element.service,
                    };
                    break;
                case 'sms_in':
                    element = el;
                    params = {
                        text: element.text,
                        phone: element.phone,
                    };
                    break;
                case 'sms_out':
                    element = el;
                    params = {
                        text: element.text,
                        phone: element.phone,
                    };
                    break;
                default:
                    break;
            }
            return params
                ? {
                    id: Number(el.id),
                    entity_id: el.entity_id,
                    created_by: el.created_by,
                    created_at: (0, getTimestampFromDateString_1.getTimestampFromDateString)(el.created_at),
                    is_need_to_trigger_digital_pipeline: el.is_need_to_trigger_digital_pipeline,
                    request_id: el.request_id,
                    note_type: noteType,
                    params,
                }
                : undefined;
        });
    })
        .map(clearNullableProps_1.clearNullableProps);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map