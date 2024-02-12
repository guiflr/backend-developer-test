"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRequest = void 0;
function invalidRequest(error) {
    return { message: 'Invalid or missing param', error, status: 400 };
}
exports.invalidRequest = invalidRequest;
