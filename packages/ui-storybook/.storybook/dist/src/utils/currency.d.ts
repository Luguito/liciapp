declare type CurrencyFormatterFn = (value: number, locale?: string, withoutDecimals?: boolean) => string;
export declare const Locales: Record<string, {
    locale: string;
    currency: string;
}>;
export declare const currencyFormatter: CurrencyFormatterFn;
export {};
