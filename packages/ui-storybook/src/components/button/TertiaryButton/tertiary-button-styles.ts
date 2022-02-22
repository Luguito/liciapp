import { css } from 'styled-components';
import {
    ColorLiciPrimaryActive,
    ColorLiciPrimaryInactive,
    ColorLiciPrimaryHover
} from "../../../../../ui-foundation/dist/web/colors";

export const TertiaryButtonStyles = css`
    border: none;
    color: ${ColorLiciPrimaryActive};
    background-color: transparent;

    &:hover, &:focus {
        color: ${ColorLiciPrimaryHover};

        svg {
            color: ${ColorLiciPrimaryHover};
        }
    }

    &:active {
        color: ${ColorLiciPrimaryHover};

        svg {
            color: ${ColorLiciPrimaryHover};
        }
    }


    &[disabled] {
        cursor: default;
        pointer-events: none;
        color: ${ColorLiciPrimaryInactive};
        border-color: ${ColorLiciPrimaryInactive};

        svg {
            color: ${ColorLiciPrimaryInactive};
        }
    }

    svg {
        color: ${ColorLiciPrimaryActive};
    }
`;
