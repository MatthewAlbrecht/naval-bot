import styled, { css } from 'styled-components'
import { BaseProps, convertPixelsToRems, getColorFromKey } from 'styles/base'
import {
  bp,
  breakpoints,
  buildResponsiveRules,
  ResponsiveRuleValue,
} from 'styles/breakpoint'
import { Colors, Fonts, Gradients } from 'styles/theme'

type WeightValues =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 'initial'
  | 'inherit'

type TextAlignValues =
  | 'center'
  | 'left'
  | 'right'
  | 'end'
  | 'start'
  | 'inital'
  | 'inherit'
  | 'unset'

const FONT_SIZE_BASE = 16

export type TxtProps = BaseProps & {
  size?: ResponsiveRuleValue<number>
  weight?: ResponsiveRuleValue<WeightValues>
  spacing?: ResponsiveRuleValue<number>
  lineHeight?: ResponsiveRuleValue<number>
  textAlign?: ResponsiveRuleValue<TextAlignValues>
  opacity?: ResponsiveRuleValue<number>
  /**
   * "color" clashes with a default react prop so we must prepend with $
   */
  $color?: ResponsiveRuleValue<Colors>
  hoverColor?: ResponsiveRuleValue<Colors>
  uppercase?: boolean
  bold?: boolean
  semibold?: boolean
  light?: boolean
  italic?: boolean
  underline?: boolean
  noWrap?: boolean
  link?: boolean
  inheritStyles?: boolean
  hoverUnderline?: boolean
  family?: Fonts
  children?: React.ReactNode
  as?: React.ElementType
}

export type EmphasisProps = {
  gradient: Gradients
  display?: 'block' | 'inline' | 'inline-block'
}

export const Emphasis = styled.em<EmphasisProps>`
  background: ${({ theme, gradient }) => theme.gradients[gradient]};
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  background-clip: text;
  display: ${({ display = 'inline' }) => display};
  -webkit-text-fill-color: transparent;

  /* adapted from: https://www.browserstack.com/guide/create-browser-specific-css 
    This will scope these rules to Safari v11.0+
    Safari has trouble w/ multi line text gradients
  */
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    box-decoration-break: clone;
  }
`

export const Bold = styled.strong`
  font-weight: 700;
`

/**
 * @param size defaults to `16`
 * @param family defaults to `primary`
 * @param $color defaults to `text`
 * @param weight defaults to `400`
 */
export const Txt = styled.p<TxtProps>`
  /* RESPONSIVE STYLES */
  ${({ size = FONT_SIZE_BASE }) =>
    size && buildResponsiveRules<number>('font-size', size, convertPixelsToRems)}
  ${({ weight = '400' }) =>
    buildResponsiveRules<WeightValues>('font-weight', weight)}
  ${({ spacing }) =>
    spacing &&
    buildResponsiveRules<number>('letter-spacing', spacing, convertPixelsToRems)}
  ${({ lineHeight = 1.33 }) =>
    lineHeight && buildResponsiveRules<number>('line-height', lineHeight)}
  ${({ textAlign }) =>
    textAlign && buildResponsiveRules<TextAlignValues>('text-align', textAlign)}
  ${({ $color }) =>
    $color && buildResponsiveRules<Colors>('color', $color, getColorFromKey)}
  ${({ hoverColor }) =>
    hoverColor &&
    css`
      &:hover {
        ${buildResponsiveRules<Colors>('color', hoverColor, getColorFromKey)}
      }
    `}
  ${({ opacity }) => opacity && buildResponsiveRules<number>('opacity', opacity)}

  
  ${({ theme, family = 'primary' }) =>
    css`
      font-family: ${theme.font[family]};
    `};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
  ${({ italic }) => italic && 'font-style: italic;'}
  ${({ underline }) => underline && 'text-decoration: underline;'}
  ${({ hoverUnderline }) =>
    hoverUnderline &&
    css`
      ${bp(breakpoints.md)} {
        &:hover {
          text-decoration: underline;
        }
      }
    `}
  ${({ bold }) => bold && 'font-weight: 700;'}
  ${({ semibold }) => semibold && 'font-weight: 500;'}
  ${({ light }) => light && 'font-weight: 300;'} 
  ${({ noWrap }) => noWrap && 'white-space: nowrap;'}
  
  ${({ inheritStyles }) =>
    inheritStyles &&
    css`
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      font-weight: inherit;
      letter-spacing: inherit;
      line-height: inherit;
      text-align: inherit;
    `}
`

export const Headline2 = styled(Txt).attrs((props) => ({
  as: 'h2',
  size: [32, { sm: 40, lg: 48 }],
  weight: '900',
  lineHeight: [1.25, { sm: 1.4, lg: 1.17 }],
  $color: 'lightest',
  family: 'display',
  spacing: 1,
  ...props,
}))``

export const Headline3 = styled(Txt).attrs((props) => ({
  as: 'h3',
  size: [24, { md: 32, lg: 48 }],
  weight: '900',
  lineHeight: [1.33, { md: 1.25, lg: 1.17 }],
  $color: 'lightest',
  family: 'display',
  spacing: 1,
  ...props,
}))``

export const Headline4 = styled(Txt).attrs((props) => ({
  as: 'h4',
  size: [20, { lg: 24 }],
  weight: '900',
  lineHeight: [1.6, { lg: 1.33 }],
  $color: 'lightest',
  ...props,
}))``

export const Headline5 = styled(Txt).attrs((props) => ({
  as: 'h5',
  size: [14, { md: 18, lg: 20 }],
  weight: '900',
  lineHeight: [1.43, { md: 1.33 }],
  $color: 'lightest',
  ...props,
}))``

export const BodyParagraph = styled(Txt).attrs((props) => ({
  as: 'p',
  size: [16, { lg: 20 }],
  lineHeight: [1.6, { md: 1.5 }],
  $color: 'lightest',
  ...props,
}))``

export const BodyParagraph2 = styled(Txt).attrs((props) => ({
  as: 'p',
  size: [14, { lg: 16 }],
  lineHeight: [1.4, { lg: 1.5 }],
  $color: 'lightest',
  ...props,
}))``
