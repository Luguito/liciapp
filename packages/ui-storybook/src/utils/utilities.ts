interface Range {
    min: number;
    max: number;
}

export const rangeValidator = (range: Range) => (props: number, propName: string, componentName: string | null) => {
    componentName = componentName || 'ANONYMOUS';

    if (props[propName]) {
        let value = props[propName];
        if (typeof value === 'number') {
            return (value >= 1 && value <= 100)
                ? null
                : new Error(propName + ' in ' + componentName + ` is not between ${range.min} to ${range.max}`);
        }
    }

    return null;
};

export type ValueOf<T> = T[keyof T];
