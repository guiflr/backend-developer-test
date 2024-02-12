"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundResource = void 0;
const notFoundResource = (req, res) => {
    return res.status(404).json({ message: 'Not Found Resource' });
};
exports.notFoundResource = notFoundResource;
