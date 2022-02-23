var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import { reverseDate } from '../../utils/dates';
import { TextInput } from './TextInput';
export const DateInput = (_a) => {
    var { label, width, disabled, placeholder = 'DD/MM/AAAA', name = 'date-input', defaultValue, id = '', mask = '99/99/9999', onChange, onBlur, error, errorMessage } = _a, props = __rest(_a, ["label", "width", "disabled", "placeholder", "name", "defaultValue", "id", "mask", "onChange", "onBlur", "error", "errorMessage"]);
    const [dateValue, setDateValue] = useState(defaultValue);
    const handleChange = (value) => {
        setDateValue(value);
        onChange && onChange(reverseDate(value));
    };
    const handleBlur = (value) => {
        onBlur && onBlur(reverseDate(value));
    };
    return (React.createElement(TextInput, Object.assign({ defaultValue: dateValue, label: label, type: "text", name: name, width: width || '100%', onChange: handleChange, onBlur: handleBlur, placeholder: placeholder, disabled: disabled, id: id, withMask: mask, inputMode: "numeric", error: error, errorMessage: errorMessage }, props)));
};
//# sourceMappingURL=DateInput.js.map