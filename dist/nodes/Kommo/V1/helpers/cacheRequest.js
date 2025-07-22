"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheOptionsRequest = void 0;
const node_timers_1 = require("node:timers");
const WAIT_TIME = 300;
const CACHE_TIME = 5 * 1000;
const cache = {};
const cacheOptionsRequest = (fnc) => {
    const key = JSON.stringify(fnc.name);
    return async function () {
        var _a;
        if ((_a = cache[key]) === null || _a === void 0 ? void 0 : _a.loading) {
            await new Promise((resolve) => (0, node_timers_1.setTimeout)(resolve, WAIT_TIME));
            return (0, exports.cacheOptionsRequest)(fnc).call(this);
        }
        const cachedData = cache[key];
        if (cachedData && Date.now() < cachedData.lastUpdate + CACHE_TIME) {
            return cachedData.data;
        }
        cache[key] = cache[key] || { lastUpdate: Date.now(), data: [], loading: true };
        cache[key].loading = true;
        try {
            const data = await fnc.call(this);
            cache[key] = { lastUpdate: Date.now(), data, loading: false };
            return data;
        }
        catch (e) {
            cache[key].loading = false;
            throw e;
        }
    };
};
exports.cacheOptionsRequest = cacheOptionsRequest;
//# sourceMappingURL=cacheRequest.js.map