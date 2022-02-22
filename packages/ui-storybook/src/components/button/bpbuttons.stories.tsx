import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { faGrin } from '@fortawesome/free-solid-svg-icons/faGrin';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons/faChessKnight';


import { ButtonSizeEnum, IconPositionEnum } from './enums';
import { PrimaryButton } from './PrimaryButton/primary-button.styled';
import { TertiaryButton } from './TertiaryButton/tertiary-button.styled';
import { SecondaryButton } from './SecondaryButton/secondary-button.styled';
import { IconPrimaryButton } from './PrimaryButton/icon-primary-button.styled';
import { IconTertiaryButton } from './TertiaryButton/icon-tertiary-button.styled';
import { IconSecondaryButton } from './SecondaryButton/icon-secondary-button.styled';
//import { GlobalFonts } from '../global-styles';
const loadingIcon = require('../../assets/loading.svg');

storiesOf('Controls', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('Button Primary Large', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const withIcon = boolean('With Icon', false);
        const loading = boolean('Loading', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <PrimaryButton
                    size={ButtonSizeEnum.Large}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={withIcon && faGrin}
                    isLoading={loading}
                    loadingIcon={loading && loadingIcon}
                >
                    {textButton}
                </PrimaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9d02a7d8f8e4457de75b80'
        },
        info: 'Button Primary Large!'
    })
    .add('Button Primary Large Icon+Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <PrimaryButton
                    size={ButtonSizeEnum.Large}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faGrin}
                >
                    {textButton}
                </PrimaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9ba752620ec2e645d9ca62'
        },
        info: 'Button Primary Large Icon+Text'
    })
    .add('Button Primary Medium Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <PrimaryButton
                    size={ButtonSizeEnum.Medium}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                >
                    {textButton}
                </PrimaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9d0583d8f8e4e6e5e75e10'
        },
        info: 'Button Primary Large Icon+Text'
    })
    .add('Button Primary Medium Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <PrimaryButton
                    size={ButtonSizeEnum.Medium}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faGrin}
                >
                    {textButton}
                </PrimaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9ba8a0d8f8e449e0e67540'
        },
        info: 'Button Primary Medium Icon+Text'
    })
    .add('Button Primary Small Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <PrimaryButton
                    size={ButtonSizeEnum.Small}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                >
                    {textButton}
                </PrimaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9d085c2c8f198d6a56798a'
        },
        info: 'Button Primary Small Text'
    })
    .add('Button Primary Small Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <PrimaryButton
                    size={ButtonSizeEnum.Small}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faGrin}
                >
                    {textButton}
                </PrimaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9ba8a4e668d80ecc2d65d1'
        },
        info: 'Button Primary Small Text'
    })
    .add('Button Secondary Large Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const withIcon = boolean('With Icon', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Large);

        return (
            <>
                {'<GlobalFonts />'}
                <SecondaryButton
                    size={size}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={withIcon && faGrin}
                >
                    {textButton}
                </SecondaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9e034db6bf53654893634b'
        },
        info: 'Button Secondary Small Text'
    })
    .add('Button Secondary Large Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Large);

        return (
            <>
                {'<GlobalFonts />'}
                <SecondaryButton
                    size={size}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faGrin}
                >
                    {textButton}
                </SecondaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9dfb4ee5d9ac29fcddcd69'
        },
        info: 'Button Secondary Small Text+Icon'
    })
    .add('Button Secondary Medium Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Medium);

        return (
            <>
                {'<GlobalFonts />'}
                <SecondaryButton
                    size={size}
                    onClick={callback}
                    disabled={disabled}
                >
                    {textButton}
                </SecondaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9e08a82c8f193df35709bd'
        },
        info: 'Button Secondary Small Text'
    })
    .add('Button Secondary Medium Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Medium);

        return (
            <>
                {'<GlobalFonts />'}
                <SecondaryButton
                    size={size}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faGrin}
                >
                    {textButton}
                </SecondaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9dfc2e620ec262ecdb580a'
        },
        info: 'Button Secondary Small Text+Icon'
    })
    .add('Button Secondary Small Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Small);

        return (
            <>
                {'<GlobalFonts />'}
                <SecondaryButton
                    size={size}
                    onClick={callback}
                    disabled={disabled}>
                    {textButton}
                </SecondaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9e093c81360447b171e60f'
        },
        info: 'Button Secondary Small Text'
    })
    .add('Button Secondary Small Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Small);

        return (
            <>
                {'<GlobalFonts />'}
                <SecondaryButton
                    size={size}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faGrin}>
                    {textButton}
                </SecondaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9dfe56620ec21226db5c92'
        },
        info: 'Button Secondary Small Text+Icon'
    })
    .add('Button Tertiary Large Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);

        return (
            <>
                {'<GlobalFonts />'}
                <TertiaryButton
                    size={ButtonSizeEnum.Large}
                    onClick={callback}
                    disabled={disabled}
                >
                    {textButton}
                </TertiaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9f5890620ec24e47dc42d2'
        },
        info: 'Button Tertiary Large Text'
    })
    .add('Button Tertiary Large Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <TertiaryButton
                    size={ButtonSizeEnum.Large}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faChessKnight}
                >
                    {textButton}
                </TertiaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9f5919e0d2e07aed901756'
        },
        info: 'Button Tertiary Large Text+Icon'
    })
    .add('Button Tertiary Medium Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);

        return (
            <>
                {'<GlobalFonts />'}
                <TertiaryButton
                    size={ButtonSizeEnum.Medium}
                    onClick={callback}
                    disabled={disabled}
                >
                    {textButton}
                </TertiaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9f59e4c6c0a536dffa83ad'
        },
        info: 'Button Tertiary Medium Text'
    })
    .add('Button Tertiary Medium Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <TertiaryButton
                    size={ButtonSizeEnum.Medium}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faChessKnight}
                >
                    {textButton}
                </TertiaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9f5a08e0d2e0b8809017f6'
        },
        info: 'Button Tertiary Medium Text+Icon'
    })
    .add('Button Tertiary Small Text', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);

        return (
            <>
                {'<GlobalFonts />'}
                <TertiaryButton
                    size={ButtonSizeEnum.Small}
                    onClick={callback}
                    disabled={disabled}
                >
                    {textButton}
                </TertiaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9f5b5e6b656e8cec8f3b39'
        },
        info: 'Button Tertiary Small Text'
    })
    .add('Button Tertiary Small Text+Icon', () => {
        const callback = action('Clicked button');
        const textButton = text('Text', 'Default');
        const disabled = boolean('disabled', false);
        const iconPosition = select('Icon Position', IconPositionEnum, IconPositionEnum.Left);

        return (
            <>
                {'<GlobalFonts />'}
                <TertiaryButton
                    size={ButtonSizeEnum.Small}
                    onClick={callback}
                    disabled={disabled}
                    iconPosition={iconPosition}
                    icon={faChessKnight}
                >
                    {textButton}
                </TertiaryButton>
            </>
        );
    }, {
        'in-dsm': {
            id: '5d9f5b682c8f19ed2657fb27'
        },
        info: 'Button Tertiary Small Text+Icon'
    })
    .add('Icon Button Primary Large', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Medium);

        return (
            <IconPrimaryButton
                size={size}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9d0a162cb2278eee03ff75'
        },
        info: 'Button Icon Primary Large'
    })
    .add('Icon Button Pimary Medium', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Medium);

        return (
            <IconPrimaryButton
                size={size}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9d0a1ad8f8e433eae76082'
        },
        info: 'Button Icon Primary Large'
    })
    .add('Icon Button Primary Small', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);
        const size = select('Size', ButtonSizeEnum, ButtonSizeEnum.Medium);

        return (
            <IconPrimaryButton
                size={size}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9d0a27d8f8e471f9e7608f'
        },
        info: 'Button Icon Primary Large'
    })
    .add('Icon Button Secondary Large', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);

        return (
            <IconSecondaryButton
                size={ButtonSizeEnum.Large}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9e09aeb6bf536c7b936689'
        },
        info: 'Button Icon Primary Large'
    })
    .add('Icon Button Secondary Medium', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);

        return (
            <IconSecondaryButton
                size={ButtonSizeEnum.Medium}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9e0a0e2c8f196f37570a7c'
        },
        info: 'Secondary Button Icon Medium'
    })
    .add('Icon Button Secondary Small', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);

        return (
            <IconSecondaryButton
                size={ButtonSizeEnum.Small}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9e0a60b6bf538886936728'
        },
        info: 'Secondary Button Icon Small'
    })
    .add('Icon Button Tertiary', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);

        return (
            <IconTertiaryButton
                size={ButtonSizeEnum.Large}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9f597de0d2e0cd719017bb'
        },
        info: 'Tertiary Button Icon Large'
    })
    .add('Icon Button Tertiary Medium', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);

        return (
            <IconTertiaryButton
                size={ButtonSizeEnum.Medium}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9f5b23d61cf35bd6d090d0'
        },
        info: 'Tertiary Button Icon Medium'
    })
    .add('Icon Button Tertiary Small', () => {
        const callback = action('Clicked button');
        const disabled = boolean('disabled', false);

        return (
            <IconTertiaryButton
                size={ButtonSizeEnum.Small}
                onClick={callback}
                disabled={disabled}
                icon={faChessKnight}
            />
        );
    }, {
        'in-dsm': {
            id: '5d9f5b74d8f8e405f1e8b9f7'
        },
        info: 'Tertiary Button Icon Small'
    });
