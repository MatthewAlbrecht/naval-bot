import styled from 'styled-components'
import { Box } from 'components'

export const LogoSectionGradient = styled(Box)`
  background: ${({ theme }) => theme.gradients.sandToBrightPurpleToBlurple};
  position: relative;
`

export const LogoBackground = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`
