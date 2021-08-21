import styled from 'styled-components'
import { BaseProps, baseStyles } from 'styles/base'
import { buildResponsiveRules, ResponsiveRuleValue } from 'styles/breakpoint'
import { rhythm } from 'styles/theme'

type Direction = 'top' | 'bottom' | 'left' | 'right'

export type BoxProps = BaseProps & {
  top?: ResponsiveRuleValue<number>
  bottom?: ResponsiveRuleValue<number>
  left?: ResponsiveRuleValue<number>
  right?: ResponsiveRuleValue<number>
  horizontal?: ResponsiveRuleValue<number>
  vertical?: ResponsiveRuleValue<number>
  all?: ResponsiveRuleValue<number>
}

export const Box = styled.div<BoxProps>`
  ${baseStyles}
  ${({ all }) =>
    all &&
    buildPaddingDirectionResponsiveValues(['left', 'right', 'top', 'bottom'], all)}
  ${({ horizontal }) =>
    horizontal &&
    buildPaddingDirectionResponsiveValues(['left', 'right'], horizontal)}
  ${({ vertical }) =>
    vertical && buildPaddingDirectionResponsiveValues(['top', 'bottom'], vertical)}
  ${({ top }) => top && buildPaddingDirectionResponsiveValues(['top'], top)}
  ${({ bottom }) =>
    bottom && buildPaddingDirectionResponsiveValues(['bottom'], bottom)}
  ${({ left }) => left && buildPaddingDirectionResponsiveValues(['left'], left)}
  ${({ right }) => right && buildPaddingDirectionResponsiveValues(['right'], right)}
`

const buildPaddingDirectionResponsiveValues = (
  direction: Direction[],
  responsiveRuleValue: ResponsiveRuleValue<number>
) =>
  direction.map((direction) =>
    buildResponsiveRules<number>(
      `padding-${direction}`,
      responsiveRuleValue,
      (rhythmSize: number) => rhythm(rhythmSize)
    )
  )
