import React from 'react';
import { TextInput } from './TextInput';
import { TextAreaInput } from './TextAreaInput';
export { TEXT_ALIGN } from './TextInput.styled';
export default (props) => {
    return (React.createElement(React.Fragment, null, props.multiline ? React.createElement(TextAreaInput, Object.assign({}, props)) : React.createElement(TextInput, Object.assign({}, props))));
};
//# sourceMappingURL=Input.js.map