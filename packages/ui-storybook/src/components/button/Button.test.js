import React from 'react';
import { shallow, mount } from 'enzyme';

import { Blue, White } from "../../colors";
import { StyledButton } from './components/button.styled';
import { StyledIconButton } from './components/icon-button.styled';
import { PrimaryButton } from './PrimaryButton/primary-button.styled';
import { TertiaryButton } from './TertiaryButton/tertiary-button.styled';
import { SecondaryButton } from './SecondaryButton/secondary-button.styled';

describe('Button Base', () => {
  it ('Call a callback when user click it', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<StyledButton onClick={mockCallBack}>Ok!</StyledButton>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it ('IconButton should change border radio to 50% when prop iconButton is equal true', () => {
    const button = mount(
        <StyledIconButton iconButton>Text</StyledIconButton>
    );
    expect(button).toHaveStyleRule('border-radius', '50%');
  });
});

describe('Button HOC', () => {
  it ('Button should to haveBarlow font family', () => {
      const primaryButton = shallow(<PrimaryButton>Test HOC</PrimaryButton>);
      expect(primaryButton).toHaveStyleRule('font-family', 'Barlow');
  });
});

describe('Primary Button', () => {
  let button;

  beforeEach(() => {
    button = mount(<PrimaryButton>Text</PrimaryButton>);
  });

  it ('Border should be none', () => {
      expect(button).toHaveStyleRule('border', 'none');
  });

  it (`Background color should be ${Blue[2]}`, () => {
      expect(button).toHaveStyleRule('background-color', Blue[2]);
  });

  it (`Font color should should be ${White['normal']}`, () => {
      expect(button).toHaveStyleRule('color', White['normal']);
  });
});

describe('Secondary Button', () => {
  let button;

  beforeEach(() => {
    button = mount(<SecondaryButton>Text</SecondaryButton>);
  });

  it (`Border should be solid 2px ${Blue[2]}`, () => {
      expect(button).toHaveStyleRule('border', `solid 2px ${Blue[2]}`);
  });

  it (`Background color should be ${White['normal']}`, () => {
      expect(button).toHaveStyleRule('background-color', White['normal']);
  });

  it (`Font color should should be ${Blue[2]}`, () => {
      expect(button).toHaveStyleRule('color', Blue[2]);
  });
});

describe('Tertiary Button', () => {
  let button;

  beforeEach(() => {
    button = mount(<TertiaryButton>Text</TertiaryButton>);
  });

  it ('Border should be none', () => {
      expect(button).toHaveStyleRule('border', 'none');
  });

  it (`Background color should be ${White['normal']}`, () => {
      expect(button).toHaveStyleRule('background-color', White['normal']);
  });

  it (`Font color should should be ${Blue[2]}`, () => {
      expect(button).toHaveStyleRule('color', Blue[2]);
  });
});
