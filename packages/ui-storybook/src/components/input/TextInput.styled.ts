import {
  ColorLiciFontStrong,
  ColorLiciFontHint,
  ColorLiciGrayLighten3,
  ColorLiciFontSecondary,
  ColorLiciFontError,
  ColorLiciFontPrimary,
  ColorLiciCompFiveBase,
} from '../../../../ui-foundation/dist/web/colors';
import {
  FontLiciFamilySecondaryName,
  FontLiciWeightBold,
  FontLiciWeightMedium,
  FontLiciWeightSemiBold,
} from '../../../../ui-foundation/dist/web/fonts';
import { SizeLiciFontSmall } from '../../../../ui-foundation/dist/web/sizes';
import styled, { css } from 'styled-components';
import ReactInputMask from 'react-input-mask';
import { Label } from '../typographies';

// fix for TS2742 error
const ReactCurrencyInputField = require('react-currency-input-field').default;

export enum TEXT_ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export const LabelTxt = styled.span`
  position: relative;
`;

export const Prefix = styled.span`
  color: ${ColorLiciFontPrimary};
  display: inline-block;
  position: absolute;
  z-index: 100;
  top: 5px;
  left: 0;
  width: 1.2rem;
`;

export const TxtPrefix = styled(Prefix)`
  font-size: ${SizeLiciFontSmall};
  line-height: 1.8rem;
  text-align: center;
  font-family: ${FontLiciFamilySecondaryName};
  font-weight: ${FontLiciWeightBold};
  color: ${ColorLiciFontSecondary};
  top: 0.43rem;
  margin: 0;
  height: 1.4rem;
`;

export const IconPrefix = styled(Prefix)`
  height: 1.3rem;
  margin: 0.3rem 0.1rem;
  text-align: center;
  font-weight: ${FontLiciWeightBold};
  & > svg {
    height: 1.2rem;
    color: ${ColorLiciFontSecondary};
  }
`;

export const IconSubfix = styled(Prefix)`
  height: 1.3rem;
  margin: 0.3rem 0.1rem;
  text-align: center;
  font-weight: ${FontLiciWeightBold};
  right: 0;
  left: initial;
  & > svg {
    height: 1.2rem;
    color: ${ColorLiciFontSecondary};
  }
`;

export const InputLabel = styled(Label)<{ showed: boolean }>`
  position: absolute;
  left: 0;
  top: -10px;
  padding: 0;
  pointer-events: none;
  letter-spacing: 0.02rem;
  line-height: 17px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 10px;
    left: 0;
    z-index: 0;
  }
`;

export const input = css`
  width: 100%;
  height: 100%;
  padding: 1.2rem 0 0.8rem;
  border: none;
  border-bottom: solid 1px ${ColorLiciGrayLighten3};
  background: transparent;
  box-sizing: border-box;
  color: ${ColorLiciFontPrimary};
  letter-spacing: 0.02rem;
  font-size: ${SizeLiciFontSmall};
  line-height: 21px;
  font-family: ${FontLiciFamilySecondaryName};
  font-weight: ${FontLiciWeightSemiBold};

  &:disabled {
    color: ${ColorLiciFontSecondary};

    & + ${Label} {
      color: ${ColorLiciFontStrong};
    }
  }

  &:focus {
    outline: none;
    border-width: 1px;
    border-color: ${ColorLiciCompFiveBase};

    &::before {
      border-width: 1px;
    }
  }

  &::placeholder {
    color: ${ColorLiciFontHint};
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Input = styled.input<{
  $withPrefix: boolean;
  $withIconPrefix: boolean;
  $textAlign?: TEXT_ALIGN;
}>`
  ${input}
  padding-left: ${(props) => (props.$withPrefix && 2.2) || (props.$withIconPrefix && 1.5) || 0}rem;
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : 'left')};
`;

export const InputWithMask = styled(ReactInputMask)<{
  $withPrefix: boolean;
  $textAlign?: TEXT_ALIGN;
}>`
  ${input}
  padding-left: ${(props) => (props.$withPrefix ? 1.4 : 0)}rem;
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : 'left')};
`;

export const CurrencyInputField = styled(ReactCurrencyInputField)<{
  withPrefix: boolean;
  withIconPrefix: boolean;
}>`
  ${input};
  padding-left: ${(props) => (props.withPrefix && 2.2) || (props.withIconPrefix && 1.5) || 0}rem;
`;

export const TextArea = styled.textarea<{ textAlign?: TEXT_ALIGN }>`
  ${input}
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  min-height: 220px;
`;

export const InputContainer = styled.div<{ error: boolean | undefined | null }>`
  width: 100%;
  height: 2.2rem;
  position: relative;

  ${(props) =>
    props.error &&
    css`
      ${Input} {
        border-bottom-color: ${ColorLiciFontError};
      }

      ${InputWithMask} {
        border-bottom-color: ${ColorLiciFontError};
      }
    `}
`;

export const Container = styled.div<{ width: string | undefined | null }>`
  display: inline-block;
  width: ${(props) => (props.width ? props.width : '220px')};
  font-family: ${FontLiciFamilySecondaryName};
  font-size: ${SizeLiciFontSmall};
  line-height: 21px;
  font-weight: ${FontLiciWeightMedium};
  padding-top: 6px;
`;

export const Helpers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

export const Hint = styled(Label)`
  line-height: 14px;
  padding: 5px 0;
  margin: 0;
  color: ${ColorLiciFontHint};
  width: 100%;
  padding: 0;
`;

export const Error = styled(Hint)`
  color: ${ColorLiciFontError};
`;

export const StoryDiv = styled.div`
  margin: 30px;
`;
