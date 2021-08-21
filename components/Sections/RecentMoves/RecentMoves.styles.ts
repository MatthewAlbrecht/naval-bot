import styled from 'styled-components'
import { Box, Cell } from 'components'
import { bp, breakpoints } from 'styles/breakpoint'

export const CompanyLogoBox = styled(Box)`
  height: ${({ theme }) => theme.toRems(77)};
  width: ${({ theme }) => theme.toRems(77)};
`

export const CompanyLogoInnerBox = styled(Box)`
  height: 100%;
  width: 100%;
`

export const RecentMoveCell = styled(Cell)`
  box-shadow: 4px 4px 30px #002e8719;
`

export const Overlay = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.aColor('lightest', 0)},
    ${({ theme }) => theme.aColor('lightest', 100)}
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 50%;
  ${bp(breakpoints.md)} {
    display: none;
  }
`
