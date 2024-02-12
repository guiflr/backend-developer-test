"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
function notFound(error) {
    return { message: error, error: '', status: 404 };
}
exports.notFound = notFound;
