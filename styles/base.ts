import styled, { css } from 'styled-components'
import { buildResponsiveRules, ResponsiveRuleValue } from './breakpoint'
import theme, {
  BorderRadius,
  Colors,
  Gradients,
  rhythm,
  toRems,
  ZIndex,
} from './theme'

export type BaseProps = {
  backgroundColor?: ResponsiveRuleValue<Colors>
  backgroundGradient?: ResponsiveRuleValue<Gradients>
  display?: ResponsiveRuleValue<DisplayValues>
  position?: ResponsiveRuleValue<PositionValues>
  flex?: ResponsiveRuleValue<string>
  borderRadius?: ResponsiveRuleValue<BorderRadius>
  height100?: boolean
  zIndex?: ResponsiveRuleValue<ZIndex>
}

export const baseStyles = css<BaseProps>`
  ${({ backgroundColor }) =>
    backgroundColor &&
    buildResponsiveRules<Colors>(
      'background-color',
      backgroundColor,
      getColorFromKey
    )}
  ${({ display }) =>
    display && buildResponsiveRules<DisplayValues>('display', display)}
  ${({ position }) =>
    position && buildResponsiveRules<PositionValues>('position', position)}
  ${({ flex }) => flex && buildResponsiveRules<string>('flex', flex)}
  ${({ borderRadius }) =>
    borderRadius &&
    buildResponsiveRules('border-radius', borderRadius, getBorderRadiusFromKey)}
  ${({ zIndex }) =>
    zIndex && buildResponsiveRules<ZIndex>('z-index', zIndex, getZIndexFromKey)}
  ${({ height100 }) =>
    height100 &&
    css`
      height: 100%;
    `}
  ${({ backgroundGradient }) =>
    backgroundGradient && buildResponsiveRules('background', backgroundGradient)};
`

export const Div = styled.div<BaseProps>`
  ${baseStyles}
`

type DisplayValues =
  | 'none'
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inherit'
  | 'initial'
  | 'unset'

type PositionValues =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'
  | 'grid'
  | 'inherit'
  | 'initial'
  | 'unset'

export const convertPixelsToRems = (sizeInPixels: number): string =>
  toRems(sizeInPixels)

export const convertRhythmToRems = (sizeInRhythm: number): string =>
  rhythm(sizeInRhythm)

export const getColorFromKey = (colorKey: Colors): string => theme.color[colorKey]
export const getBorderRadiusFromKey = (borderRadiusKey: BorderRadius): string =>
  theme.borderRadius[borderRadiusKey]
export const getZIndexFromKey = (zIndexKey: ZIndex): string =>
  String(theme.zIndex[zIndexKey])
