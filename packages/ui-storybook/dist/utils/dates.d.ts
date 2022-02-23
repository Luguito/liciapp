export declare const LEAP_YEAR_MONTH = 2;
export declare const LEAP_YEAR_DAY = 29;
export declare const MONTHS_30_DAYS: number[];
export declare const MAX_MONTHS_DAYS = 31;
export declare const reverseDate: (value: string, split?: string, join?: string) => string;
export declare const validateDate: (value: string, reverse?: boolean | undefined) => boolean;
export declare const validateYearRange: (value: string, minYear?: number | null | undefined, maxYear?: number | null | undefined) => boolean;
