import { css } from 'styled-components';
import {
    ColorLiciPrimaryActive,
    ColorLiciPrimaryHover,
    ColorLiciPrimaryInactive,
    ColorLiciGrayLighten3,
    ColorLiciFontOverDark
} from "../../../../../ui-foundation/dist/web/colors";

export const PrimaryButtonStyles = css`
    border: none;
    color: ${ColorLiciFontOverDark};
    background-color: ${ColorLiciPrimaryActive};

    &:hover {
        background-color: ${ColorLiciPrimaryHover};
    }

    &:active {
        background-color: ${ColorLiciPrimaryActive};
    }

    &:focus {
        border: 2px solid ${ColorLiciGrayLighten3};
        background-color: ${ColorLiciPrimaryHover};
    }

    &[disabled] {
        cursor: default;
        pointer-events: none;
        background-color: ${ColorLiciPrimaryInactive};
    }
`;
