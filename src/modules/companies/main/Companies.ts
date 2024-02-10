import { Company } from "./types";

export interface Companies {
  get(): Promise<Company[]>
}
