import styled, { css } from 'styled-components'
import {
  convertPixelsToRems,
  convertRhythmToRems,
  getBorderRadiusFromKey,
  getColorFromKey,
} from 'styles/base'
import { buildResponsiveRules, ResponsiveRuleValue } from 'styles/breakpoint'
import { Alphas, BorderRadius, Colors } from 'styles/theme'

type ButtonProps = {
  boxShadow?: [Colors, Alphas]
  borderColor?: Colors
  backgroundColor?: ResponsiveRuleValue<Colors>
  borderRadius?: ResponsiveRuleValue<BorderRadius>
  $color?: ResponsiveRuleValue<Colors>
  minWidth?: ResponsiveRuleValue<string>
  paddingHorizontal?: ResponsiveRuleValue<number>
  paddingVertical?: ResponsiveRuleValue<number>
  fontSize?: ResponsiveRuleValue<number>
  width?: ResponsiveRuleValue<string>
  size?: ResponsiveRuleValue<number>
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  ${({ boxShadow, theme }) =>
    boxShadow &&
    css`
      box-shadow: 0 0 70px ${theme.aColor(boxShadow[0], boxShadow[1])};
    `}

  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 900;
  line-height: 1.33;
  text-align: center;
  white-space: nowrap;

  ${({ borderRadius }) =>
    borderRadius &&
    buildResponsiveRules<BorderRadius>(
      'border-radius',
      borderRadius,
      getBorderRadiusFromKey
    )}
  ${({ backgroundColor }) =>
    backgroundColor &&
    buildResponsiveRules<Colors>(
      'background-color',
      backgroundColor,
      getColorFromKey
    )}
  ${({ $color }) =>
    $color && buildResponsiveRules<Colors>('color', $color, getColorFromKey)}
  ${({ paddingVertical }) =>
    paddingVertical &&
    buildResponsiveRules<number>(
      'padding-top',
      paddingVertical,
      convertRhythmToRems
    )}
  ${({ paddingVertical }) =>
    paddingVertical &&
    buildResponsiveRules<number>(
      'padding-bottom',
      paddingVertical,
      convertRhythmToRems
    )}
  ${({ paddingHorizontal }) =>
    paddingHorizontal &&
    buildResponsiveRules<number>(
      'padding-left',
      paddingHorizontal,
      convertRhythmToRems
    )}
  ${({ paddingHorizontal }) =>
    paddingHorizontal &&
    buildResponsiveRules<number>(
      'padding-right',
      paddingHorizontal,
      convertRhythmToRems
    )}
  ${({ fontSize = 18 }) =>
    buildResponsiveRules<number>('font-size', fontSize, convertPixelsToRems)}
    ${({ minWidth = ['none', { md: '24.8rem' }] }) =>
    minWidth && buildResponsiveRules<string>('min-width', minWidth)}
    ${({ width = ['100%', { md: 'auto' }] }) =>
    width && buildResponsiveRules<string>('width', width)}
    ${({ theme, borderColor }) =>
    borderColor &&
    css`
      border: ${theme.toRems(1)} solid ${theme.color[borderColor]};
    `};
`

export const PrimaryButton = styled(Button).attrs<ButtonProps>((props) => ({
  backgroundColor: 'primaryButton',
  borderRadius: 'normal',
  boxShadow: ['primaryButton', 100],
  $color: 'lightest',
  paddingHorizontal: [1.5, { md: 3.5 }],
  paddingVertical: [1.5, { md: 2 }],
  ...props,
}))``

export const PrimaryButtonAlt = styled(Button).attrs<ButtonProps>((props) => ({
  backgroundColor: 'lightest',
  borderRadius: 'normal',
  boxShadow: ['primaryButton', 100],
  $color: 'primaryButton',
  paddingHorizontal: [1.5, { md: 2.5 }],
  paddingVertical: [1.5, { md: 2 }],
  ...props,
}))``

export const SecondaryButton = styled(Button).attrs<ButtonProps>((props) => ({
  borderRadius: 'normal',
  $color: 'lightest',
  paddingHorizontal: 4,
  paddingVertical: 2,
  borderColor: 'lightest',
  ...props,
}))``

export const SecondaryButtonAlt = styled(Button).attrs<ButtonProps>((props) => ({
  borderRadius: 'normal',
  $color: 'primaryButton',
  paddingHorizontal: 4,
  paddingVertical: 2,
  borderColor: 'primaryButton',
  ...props,
}))``

export const CircularIconButton = styled(Button).attrs<ButtonProps>((props) => ({
  backgroundColor: 'primaryButton',
  borderRadius: '100',
  boxShadow: ['primaryButton', 45],
  minWidth: 'none',
  ...props,
}))`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.rhythm(5)};
  justify-content: center;
  width: ${({ theme }) => theme.rhythm(5)};
  ${({ size = 5 }) => [
    buildResponsiveRules<number>('width', size, convertRhythmToRems),
    buildResponsiveRules<number>('height', size, convertRhythmToRems),
  ]}

  ${({ boxShadow, theme }) =>
    boxShadow &&
    css`
      box-shadow: 0 0 36px 6px ${theme.aColor(boxShadow[0], boxShadow[1])};
    `}
`
