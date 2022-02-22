export const LEAP_YEAR_MONTH = 2;
export const LEAP_YEAR_DAY = 29;
export const MONTHS_30_DAYS = [4, 6, 9, 11];
export const MAX_MONTHS_DAYS = 31;

export const reverseDate = (value: string, split: string = '/', join: string = '-') => {
    return value?.split(split).reverse().join(join);
}

const checkLeapYear = (year: number) => {
    const FEBRUARY_INDEX_MONTH = 1;

    return new Date(year, FEBRUARY_INDEX_MONTH, LEAP_YEAR_DAY).getMonth() === 1;
}

export const validateDate = (value: string, reverse?: boolean) => {
    if (!value) return false;

    const date = reverse ? reverseDate(value) : value;
    const isValidate = Date.parse(date);

    if (isNaN(isValidate)) return false;

    const [year, month, day] = date.split('-').map(s => Number.parseInt(s));
    if (isNaN(year) || isNaN(month) || isNaN(day)) return false;

    const isLeapYear = checkLeapYear(year);

    if (!isLeapYear && month === LEAP_YEAR_MONTH && day >= LEAP_YEAR_DAY) return false;
    if (isLeapYear && month === LEAP_YEAR_MONTH && day > LEAP_YEAR_DAY) return false;
    if (MONTHS_30_DAYS.indexOf(month) !== -1 && day === MAX_MONTHS_DAYS) return false;

    return true;
};

export const validateYearRange = (value: string, minYear?: number | null, maxYear?: number | null) => {
    const year = new Date(value).getFullYear();
    const validMinYear = !minYear || year >= minYear;
    const validMaxYear = !maxYear || year <= maxYear;

    return validMinYear && validMaxYear;
};
