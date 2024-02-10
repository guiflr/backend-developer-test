import { Company } from "../main/Companies";

export interface CompanyRepository {
    getAll(): Promise<Company[]>
}