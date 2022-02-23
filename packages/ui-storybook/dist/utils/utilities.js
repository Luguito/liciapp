export const rangeValidator = (range) => (props, propName, componentName) => {
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
//# sourceMappingURL=utilities.js.map