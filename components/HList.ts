import styled from 'styled-components'
import { baseStyles, convertRhythmToRems } from 'styles/base'
import { buildResponsiveRules, ResponsiveRuleValue } from 'styles/breakpoint'

type Props = {
  size: ResponsiveRuleValue<number>
  rowGapSize?: ResponsiveRuleValue<number>
  as?: React.ElementType
  children?: React.ReactNode
}

export const HList = styled.ul<Props>`
  ${baseStyles}

  display: flex;
  flex-wrap: wrap;

  & > * + * {
    ${({ size }) => buildResponsiveRules('margin-left', size, convertRhythmToRems)};
  }
  ${({ rowGapSize = 1 }) =>
    buildResponsiveRules('row-gap', rowGapSize, convertRhythmToRems)};

  & > * {
    display: inline-block;
  }
`
