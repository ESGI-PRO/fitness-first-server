import { IToken } from './token.interface';
export interface IServiveTokenCreateResponse {
  status: number;
  token: IToken;
  message: string;
  errors: { [key: string]: any };
}
