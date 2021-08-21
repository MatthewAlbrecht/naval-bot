import styled from 'styled-components'
import { baseStyles } from 'styles/base'
import { bp, breakpoints } from 'styles/breakpoint'

export const Container = styled.div`
  ${baseStyles}

  padding: 0 var(--container-padding);

  ${bp(breakpoints.lg)} {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.toRems(1056)};
    padding: 0;
  }
  ${bp(breakpoints.xl)} {
    max-width: ${({ theme }) => theme.toRems(1290)};
  }
`
