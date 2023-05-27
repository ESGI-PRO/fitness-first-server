import { IToken } from './token.interface';

export interface ITokenResponse {
  status: number;
  token: IToken;
  message: string;
}
