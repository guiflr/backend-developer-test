import { CompanyDTO } from "./types";

export interface Companies {
  get(): Promise<CompanyDTO[]>
}
