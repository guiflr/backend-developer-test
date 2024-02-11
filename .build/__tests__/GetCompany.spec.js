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
const GetCompany_1 = require("../src/modules/companies/services/GetCompany");
const factory_1 = require("./factory");
describe("GetCompany", () => {
    const getCompany = new factory_1.CompanyRepositoryTest();
    const company = new GetCompany_1.GetCompany(getCompany);
    test("Should return companies", () => __awaiter(void 0, void 0, void 0, function* () {
        const companies = yield company.get();
        expect(Array.isArray(companies)).toBe(true);
        const [comp] = companies;
        expect(comp).toEqual(factory_1.companyData);
    }));
});
