import * as React from 'react'
import styled from 'styled-components'
import { convertRhythmToRems } from 'styles/base'
import { buildResponsiveRules, ResponsiveRuleValue } from 'styles/breakpoint'

type Props = {
  size?: ResponsiveRuleValue<number>
  as?: React.ElementType
  children?: React.ReactNode
}

export const VList = styled.ul<Props>`
  display: block;

  & > * + * {
    ${({ size = 1 }) =>
      buildResponsiveRules('margin-top', size, convertRhythmToRems)};
  }
`
