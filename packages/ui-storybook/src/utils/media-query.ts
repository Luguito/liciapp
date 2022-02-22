/*import { css } from 'styled-components';
import { SCREEN_SIZE } from '../components/grid/constants/sizes';

// Generic responsive utils for styled components. Use as:
// const myComponent = styled.div`
//   property: value;
//   ${mobile`
//     property: value-for-mobile;
//   `}
//   ${tabletOrBigger`
//     property: value-for-tablets-and-biger-devices;
//   `}
// `

export function specificDeviceMediaQuery(minWidth: string, maxWidth: string) : typeof css {
  // @ts-ignore  The typings of styled.BaseThemedCssFunction is too long to copy it here
  const result : typeof css = (first, ...args) => css`
    @media (min-width: ${minWidth}) and (max-width: ${maxWidth}) {
      ${css(first, ...args)};
    }
  `;
  return result;
}

export const mobile = specificDeviceMediaQuery(SCREEN_SIZE.MOBILE.min, SCREEN_SIZE.MOBILE.max);
export const tablet = specificDeviceMediaQuery(SCREEN_SIZE.TABLET.min, SCREEN_SIZE.TABLET.max);
export const laptop = specificDeviceMediaQuery(SCREEN_SIZE.LAPTOP.min, SCREEN_SIZE.LAPTOP.max);
export const desktop = specificDeviceMediaQuery(SCREEN_SIZE.DESKTOP.min, SCREEN_SIZE.DESKTOP.max);
export const desktopHD = specificDeviceMediaQuery(SCREEN_SIZE.DESKTOP_HD.min, SCREEN_SIZE.DESKTOP_HD.max);

export const tabletOrBigger = specificDeviceMediaQuery(SCREEN_SIZE.TABLET.min, SCREEN_SIZE.DESKTOP_HD.max);
export const laptopOrBigger = specificDeviceMediaQuery(SCREEN_SIZE.LAPTOP.min, SCREEN_SIZE.DESKTOP_HD.max);
export const desktopOrBigger = specificDeviceMediaQuery(SCREEN_SIZE.DESKTOP.min, SCREEN_SIZE.DESKTOP_HD.max);

export const tabletOrSmaller = specificDeviceMediaQuery(SCREEN_SIZE.MOBILE.min, SCREEN_SIZE.TABLET.max);
export const laptopOrSmaller = specificDeviceMediaQuery(SCREEN_SIZE.MOBILE.min, SCREEN_SIZE.LAPTOP.max);
export const desktopOrSmaller = specificDeviceMediaQuery(SCREEN_SIZE.MOBILE.min, SCREEN_SIZE.DESKTOP.max);*/
export const data = {}
