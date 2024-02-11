"use strict";
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
    preset: 'ts-jest',
};
exports.default = config;
