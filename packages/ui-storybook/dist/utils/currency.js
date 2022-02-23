export const Locales = {
    'br': { locale: 'pt-BR', currency: 'BRL' },
    'co': { locale: 'es-CO', currency: 'COP' },
};
export const currencyFormatter = (value, location = 'co', withoutDecimals = false) => {
    var _a, _b;
    const formatter = new Intl.NumberFormat((_a = Locales[location]) === null || _a === void 0 ? void 0 : _a.locale, {
        style: 'currency', currency: (_b = Locales[location]) === null || _b === void 0 ? void 0 : _b.currency,
    });
    const formattedValue = formatter.format(value);
    return withoutDecimals ? formattedValue.split(',')[0] : formattedValue;
};
//# sourceMappingURL=currency.js.map