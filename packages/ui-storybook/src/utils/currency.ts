type CurrencyFormatterFn = (value: number, locale?: string, withoutDecimals?: boolean) => string;

export const Locales: Record<string, { locale: string, currency: string }> = {
    'br': { locale: 'pt-BR', currency: 'BRL' },
    'co': { locale: 'es-CO', currency: 'COP' },
}

export const currencyFormatter: CurrencyFormatterFn = (value, location = 'co', withoutDecimals = false) => {
    const formatter: Intl.NumberFormat = new Intl.NumberFormat(Locales[location]?.locale, {
        style: 'currency', currency: Locales[location]?.currency,
    });
    const formattedValue = formatter.format(value);
    return withoutDecimals ? formattedValue.split(',')[0] : formattedValue;
};