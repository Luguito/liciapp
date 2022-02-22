import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { TEXT_ALIGN } from './Input';
import { EmailInput } from './EmailInput';
import { TextInput } from './TextInput';
import { AutocompleteInput } from './AutocompleteInput';
import CurrencyInput from './CurrencyInput';
import { DateInput } from './DateInput';
import { StoryDiv } from './TextInput.styled';


storiesOf('Controls', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('Input Text', () => {

        // Inputs Knobs
        const defaultValue = text('Default value', '');
        const placeholder = text('Placeholder', 'Su nombre');
        const hintMessage = text('Hint', 'Hint message');
        const label = text('Label', 'Nombre');
        const errorMessage = text('Error Message', 'Opss error');
        const maxLength = number('Max length', 10);
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);
        const textAlign = select('Text Align', {
            Left: TEXT_ALIGN[TEXT_ALIGN.LEFT],
            Right: TEXT_ALIGN[TEXT_ALIGN.RIGHT],
            Center: TEXT_ALIGN[TEXT_ALIGN.CENTER]
        }, 'left');

        return (
            <StoryDiv>
                <TextInput
                    label={label}
                    error={error}
                    disabled={disabled}
                    maxLength={maxLength}
                    hint={hintMessage}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    textAlign={textAlign}
                    onChange={action('Change value => ')}
                    onBlur={action('blur =>')}
                />
            </StoryDiv>
        );
    }, {
        info: 'This is a custom input with different behaviors',
    }
    )
    .add('Input Prefix', () => {
        const defaultValue = text('Default value', '');
        const placeholder = text('Placeholder', 'Su prefijo');
        const hintMessage = text('Hint', 'Hint message');
        const label = text('Label', 'Nombre');
        const errorMessage = text('Error Message', 'Opss error');
        const maxLength = number('Max length', 10);
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);
        const prefix = text('Prefix', 'C.C.');

        return (
            <StoryDiv>
                <TextInput
                    prefix={prefix}
                    label={label}
                    error={error}
                    disabled={disabled}
                    maxLength={maxLength}
                    hint={hintMessage}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    onChange={action('Change value => ')}
                />
            </StoryDiv>
        );
    })
    .add('Input AutoComplete', () => {

        // Inputs Knobs
        const defaultValue = text('Default value', '');
        const placeholder = text('Placeholder', 'Write a Fruit');
        const label = text('Label', 'Fruts');
        const errorMessage = text('Error Message', 'Opss error');
        const maxLength = number('Max length', 30);
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);
        const textAlign = select('Text Align', {
            Left: TEXT_ALIGN[TEXT_ALIGN.LEFT],
            Right: TEXT_ALIGN[TEXT_ALIGN.RIGHT],
            Center: TEXT_ALIGN[TEXT_ALIGN.CENTER]
        }, 'left');
        const options = object('Autocomplete (Array+Object)', [
            { name: "Apricot", value: "0" },
            { name: "Avocado", value: "1" },
            { name: "Banana", value: "2" },
            { name: "Bilberry", value: "3" },
            { name: "Cherry", value: "4" },
            { name: "Feijoa", value: "5" },
            { name: "Grape", value: "6" },
            { name: "Guava", value: "7" },
            { name: "Lemon", value: "8" },
            { name: "Melon", value: "9" },
            { name: "Orange", value: "10" },
            { name: "Papaya", value: "11" },
            { name: "Pineapple", value: "12" },
            { name: "Pomelo", value: "13" },
            { name: "Tangelo", value: "14" }
        ]);
        const getAutocompleteValue = boolean('Autocomplete Value', true);
        const invalidOption = text('Invalid Option', 'Invalid Option');
        const arrowIcon = boolean('Arrow Icon', true);
        const suggestionsBoxHeight = text('Autocomplete Height', '300px');

        return (
            <StoryDiv>
                <AutocompleteInput
                    label={label}
                    error={error}
                    disabled={disabled}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    textAlign={textAlign}
                    onChange={action('Change value => ')}
                    onBlur={action('blur =>')}
                    options={options}
                    getAutocompleteValue={getAutocompleteValue}
                    invalidOption={invalidOption}
                    arrowIcon={arrowIcon}
                    suggestionsBoxHeight={suggestionsBoxHeight}
                />
            </StoryDiv>
        );
    }, {
        info: 'This is a custom input with different behaviors',
    }
    )
    .add('Input Currency', () => {
        const defaultValue = text('Default value', '');
        const placeholder = text('Placeholder', 'Valor del credito');
        const hintMessage = text('Hint', 'Hint message');
        const label = text('Label', 'Cantidad');
        const errorMessage = text('Error Message', 'Opss error');
        const maxLength = number('Max length', 10);
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);
        const withMask = text('Mask', '9.999.999');

        return (
            <StoryDiv>
                <TextInput
                    withMask={withMask}
                    label={label}
                    error={error}
                    disabled={disabled}
                    maxLength={maxLength}
                    hint={hintMessage}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    onChange={action('Change value => ')}
                />
            </StoryDiv>
        );
    })
    .add('Currency subfix', () => {
        const defaultValue = text('Default value', '');
        const placeholder = text('Placeholder', 'Valor del credito');
        const hintMessage = text('Hint', 'Hint message');
        const label = text('Label', 'Cantidad');
        const errorMessage = text('Error Message', 'Opss error');
        const maxLength = number('Max length', 10);
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);
        const withMask = text('Mask', '9.999.999');

        return (
            <StoryDiv>
                <TextInput
                    withMask={withMask}
                    label={label}
                    error={error}
                    disabled={disabled}
                    maxLength={maxLength}
                    hint={hintMessage}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    onChange={action('Change value => ')}
                />
            </StoryDiv>
        );
    })
    .add('Email', () => {
        const label = text('Label', 'Email');
        const disabled = boolean('Disabled', false);
        const placeholder = text('Placeholder', 'Email');
        const asyncValue = boolean('Async value result', true);
        const errorMessage = text('Error Message', 'Email invalido');
        const validateMessage = text('validate Message', 'Validando ...');
        const asyncErrorValidation = text('Async Error ', 'Este email no se encuentra en la base de datos');

        const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        async function emailAccesor() {
            await timeout(2000);
            return asyncValue;
        }

        return (
            <StoryDiv>
                <EmailInput
                    label={label}
                    disabled={disabled}
                    errorMsg={errorMessage}
                    placeholder={placeholder}
                    asyncValidator={emailAccesor}
                    validateMsg={validateMessage}
                    asyncErrorMsg={asyncErrorValidation}
                    onValidValue={action('Change value => ')}
                />
            </StoryDiv>
        );
    })
    .add('Input Currency (default)', () => {
        // Inputs Knobs
        const defaultValue = text('Default value', '1000');
        const placeholder = text('Placeholder', 'Total purchase');
        const hintMessage = text('Hint', 'Try to type k or m');
        const label = text('Label', 'Total');
        const errorMessage = text('Error Message', 'Opss error');
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);

        // currency specific props
        const allowDecimals = boolean('Allow decimals?', true);
        const allowNegativeValue = boolean('Allow negative?', false);
        const decimalsLimit = number('Decimal limit', 2);
        const disableGroupSeparators = boolean('Disable group separator', false);
        const disableAbbreviations = boolean('Disable abreviations', true);
        const suffix = text('Suffix', '');

        return (
            <StoryDiv>
                <CurrencyInput
                    label={label}
                    error={error}
                    disabled={disabled}
                    hint={hintMessage}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    onChange={(action(`Change value => `))}
                    allowDecimals={allowDecimals}
                    allowNegativeValue={allowNegativeValue}
                    decimalsLimit={decimalsLimit}
                    disableAbbreviations={disableAbbreviations}
                    disableGroupSeparators={disableGroupSeparators}
                    suffix={suffix}
                />
            </StoryDiv>
        );
    })
    .add('Input Currency (custom)', () => {
        // Inputs Knobs
        const defaultValue = text('Default value', '1000.99');
        const placeholder = text('Placeholder', 'Total purchase');
        const hintMessage = text('Hint', 'Try to type k or m');
        const label = text('Label', 'Total');
        const errorMessage = text('Error Message', 'Opss error');
        const disabled = boolean('Disabled', false);
        const error = boolean('Error', false);

        // currency specific props
        const allowDecimals = boolean('Allow decimals?', true);
        const allowNegativeValue = boolean('Allow negative?', false);
        const decimalsLimit = number('Decimal limit', 2);
        const disableGroupSeparators = boolean('Disable group separator', false);
        const disableAbbreviations = boolean('Disable abreviations', true);
        const prefix = text('Prefix', 'R$');
        const suffix = text('Suffix', '');

        return (
            <StoryDiv>
                <CurrencyInput
                    label={label}
                    error={error}
                    disabled={disabled}
                    hint={hintMessage}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    errorMessage={errorMessage}
                    onChange={(action(`Change value => `))}
                    allowDecimals={allowDecimals}
                    allowNegativeValue={allowNegativeValue}
                    decimalsLimit={decimalsLimit}
                    disableAbbreviations={disableAbbreviations}
                    disableGroupSeparators={disableGroupSeparators}
                    decimalSeparator=","
                    groupSeparator="."
                    suffix={suffix}
                    prefix={prefix}
                />
            </StoryDiv>
        );
    })
    .add('Input Date V2', () => {
        const label = text('Label', 'Date of Birth');
        const disabled = boolean('Disabled', false);
        const placeholder = text('Placeholder', 'DD/MM/AAAA');

        return (
            <StoryDiv>
                <DateInput
                    label={label}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={(action(`Change value => `))}
                />
            </StoryDiv>
        );
    });
