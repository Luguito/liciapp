import styled, { css } from 'styled-components';
import { TextStylesProps, FontProps, ParagraphProps } from './Typpographies.types';
import {
    FontLiciFamilyDefaultName,
    FontLiciWeightExtraBold,
    FontLiciWeightRegular,
    FontLiciWeightMedium,
    FontLiciWeightBold,
} from '@common';


import {
    ColorLiciFontPrimary,
    ColorLiciFontAction,
    ColorLiciFontError,
    ColorLiciFontHint,
    ColorLiciFontSecondary,
    ColorLiciFontSuccess,
    ColorLiciFontOverDark,
} from '@common';
import {
    SizeLiciFontXxxLarge,
    SizeLiciFontXxLarge,
    SizeLiciFontXLarge,
    SizeLiciFontLarge,
    SizeLiciFontBase,
    SizeLiciFontSmall,
    SizeLiciFontXSmall,
    SizeLiciFontXxSmall,
    SizeLiciFontXxxSmall,
} from '@common';

const ParagraphColors = {
    primary: ColorLiciFontPrimary,
    secondary: ColorLiciFontSecondary,
    hint: ColorLiciFontHint,
    error: ColorLiciFontError,
    success: ColorLiciFontSuccess,
    action: ColorLiciFontAction,
    overDark: ColorLiciFontOverDark,
}

const FontStyle = css<FontProps>`
    font-style: ${({ fontStyle }) => fontStyle ? fontStyle : 'normal'};
`;

export const PrimaryFont = css`
    font-family: ${FontLiciFamilyDefaultName};
    ${FontStyle}
`;

export const SecondaryFont = css`
    font-family: ${FontLiciFamilyDefaultName};
    ${FontStyle}
`;

export const Header1 = styled.h1`
    ${PrimaryFont}
    font-weight: ${FontLiciWeightExtraBold};
    font-size: ${SizeLiciFontXxxLarge};
    color: ${ColorLiciFontPrimary};
`;

export const Header2 = styled.h2`
    ${PrimaryFont}
    font-weight: ${FontLiciWeightExtraBold};
    font-size: ${SizeLiciFontXxLarge};
    color: ${ColorLiciFontPrimary};
`;

export const Header3 = styled.h3`
    ${PrimaryFont}
    font-weight: ${FontLiciWeightExtraBold};
    font-size: ${SizeLiciFontXLarge};
    color: ${ColorLiciFontPrimary};
`;

export const Title = styled.h4`
    ${PrimaryFont}
    font-weight: ${FontLiciWeightExtraBold};
    font-size: ${SizeLiciFontLarge};
    color: ${ColorLiciFontPrimary};
`;

export const Subtitle = styled.h5<TextStylesProps>`
    ${PrimaryFont}
    font-weight: ${({ strong }) => strong ? FontLiciWeightExtraBold : FontLiciWeightRegular};
    font-size: ${SizeLiciFontBase};
    color: ${ColorLiciFontPrimary};
`;

export const Paragraph = styled.p<ParagraphProps>`
    ${SecondaryFont}
    font-weight: ${({ strong }) => strong ? FontLiciWeightBold : FontLiciWeightMedium};
    font-size: ${({ small }) => small ? SizeLiciFontXSmall : SizeLiciFontSmall};
    color: ${({ fontColor }) => fontColor ? ParagraphColors[fontColor] : ColorLiciFontPrimary};
`;

export const Caption = styled.span<TextStylesProps>`
    ${SecondaryFont}
    font-weight: ${({ strong }) => strong ? FontLiciWeightExtraBold : FontLiciWeightMedium};
    font-size: ${SizeLiciFontXxSmall};
    color: ${ColorLiciFontPrimary};
`;

export const Pretitle = styled.span`
    ${SecondaryFont}
    font-weight: ${FontLiciWeightExtraBold};
    font-size: ${SizeLiciFontXxxSmall};
    color: ${ColorLiciFontPrimary};
`;

export const Label = styled.label<TextStylesProps>`
    ${SecondaryFont}
    font-weight: ${({ strong }) => strong ? FontLiciWeightExtraBold : FontLiciWeightMedium};
    font-size: ${SizeLiciFontXxSmall};
    color: ${ColorLiciFontPrimary};
`;

export const ButtonTextLarge = css<TextStylesProps>`
    ${PrimaryFont}
    font-weight: ${FontLiciWeightBold};
    font-size: ${SizeLiciFontBase};
`;

export const ButtonTextMedium = css<TextStylesProps>`
    ${SecondaryFont}
    font-weight: ${FontLiciWeightBold};
    font-size: ${SizeLiciFontSmall};
`;

export const ButtonTextSmall = css<TextStylesProps>`
    ${PrimaryFont}
    font-weight: ${FontLiciWeightBold};
    font-size: ${SizeLiciFontXSmall};
`;

export const Link = styled.a<TextStylesProps>`
    ${SecondaryFont}
    font-weight: ${FontLiciWeightMedium};
    font-size: ${SizeLiciFontXxSmall};
    color: ${ColorLiciFontAction};
    cursor: pointer;
    text-decoration: none;
`;
