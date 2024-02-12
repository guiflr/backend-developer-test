"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRoutes = void 0;
const express_1 = require("express");
const makeGetCompanies_1 = require("../../../factory/makeGetCompanies");
const makeGetCompany_1 = require("../../../factory/makeGetCompany");
const companyRoutes = (0, express_1.Router)();
exports.companyRoutes = companyRoutes;
companyRoutes.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield (0, makeGetCompanies_1.makeGetCompanies)();
        return res.send(companies);
    }
    catch (err) {
        next(err);
    }
}));
companyRoutes.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, makeGetCompany_1.makeGetCompany)(req.params.id);
        return res.send(company);
    }
    catch (err) {
        next(err);
    }
}));
