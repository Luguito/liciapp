import { css } from 'styled-components';
import { ColorLiciPrimaryActive, ColorLiciPrimaryHover, ColorLiciPrimaryInactive } from "../../../../../ui-foundation/dist/web/colors";
export const SecondaryButtonStyles = css `
    color: ${ColorLiciPrimaryActive};
    border: solid 2px ${ColorLiciPrimaryActive};
    background-color: transparent;

    &:hover {
        color: ${ColorLiciPrimaryHover};
        border-color: ${ColorLiciPrimaryHover};

        svg {
            color: ${ColorLiciPrimaryHover};
        }
    }

    &:active {
        color: ${ColorLiciPrimaryHover};
    }

    &:focus {
        color: ${ColorLiciPrimaryHover};
        border-color: ${ColorLiciPrimaryHover};
        background-color: ${ColorLiciPrimaryInactive};

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
//# sourceMappingURL=secondary-button-styles.js.map