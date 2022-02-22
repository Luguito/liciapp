import React from 'react';
import { InputProps, TextAreaProps } from './input.d';
import { TextInput } from './TextInput';
import { TextAreaInput } from './TextAreaInput';

export { TEXT_ALIGN } from './TextInput.styled';

export default (props: InputProps | TextAreaProps) => {
    return (
        <>
            {props.multiline ? <TextAreaInput {...props} /> : <TextInput {...props} />}
        </>
    )
};
