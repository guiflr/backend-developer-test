"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    if (err) {
        if (err.status) {
            return res.status(err.status).json(err);
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    next();
};
exports.errorHandler = errorHandler;
