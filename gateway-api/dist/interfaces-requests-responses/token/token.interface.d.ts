export interface IToken {
    access: {
        token: string;
        exp: number;
    };
    refresh: {
        token: string;
        exp: number;
    };
}
