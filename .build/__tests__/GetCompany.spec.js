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
const factory_1 = require("./factory");
const GetCompany_1 = require("../src/modules/companies/services/GetCompany");
describe('GetCompany', () => {
    const companyRepo = new factory_1.CompanyRepositoryTest();
    const getCompany = new GetCompany_1.GetCompany(companyRepo);
    test('Should return error when param is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = null;
        const errorData = {
            message: 'Invalid or missing param',
            error: 'company "id" is invalid',
            status: 400
        };
        yield expect(() => getCompany.get(id)).rejects.toEqual(errorData);
    }));
    test('Should call company repository', () => __awaiter(void 0, void 0, void 0, function* () {
        const spyCompanyRepo = jest.spyOn(getCompany, 'get');
        const id = 'my-id';
        yield getCompany.get(id);
        expect(spyCompanyRepo).toHaveBeenCalledWith(id);
    }));
    test('Should return error when not found company', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = 'id';
        jest
            .spyOn(companyRepo, 'get')
            .mockImplementationOnce(() => __awaiter(void 0, void 0, void 0, function* () { return null; }));
        const errorData = {
            message: 'company not found',
            error: '',
            status: 404
        };
        yield expect(() => getCompany.get(id)).rejects.toEqual(errorData);
    }));
    test('Should return company', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = 'id';
        const company = yield getCompany.get(id);
        expect(company).toEqual(factory_1.companyData);
    }));
});
