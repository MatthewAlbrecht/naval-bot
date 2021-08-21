import styled from 'styled-components'

export const FakeBoxShadow = styled.div`
  background-color: ${({ theme }) => theme.color.darkPurple};
  box-shadow: 0 6px 25px 13px ${({ theme }) => theme.aColor('primaryButton', 60)};
  height: 0.1rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 0.1rem;
`
