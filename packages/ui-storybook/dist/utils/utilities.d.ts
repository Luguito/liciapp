interface Range {
    min: number;
    max: number;
}
export declare const rangeValidator: (range: Range) => (props: number, propName: string, componentName: string | null) => Error | null;
export declare type ValueOf<T> = T[keyof T];
export {};
