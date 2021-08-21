import styled from 'styled-components'
import { bp, breakpoints } from 'styles/breakpoint'

/* TODO (matthewalbrecht): use calc function to better scale size/position of hero image */
export const HeroImageContainer = styled.div`
  bottom: 0;
  height: auto;
  position: absolute;
  right: -30%;
  width: 80%;

  ${bp(550)} {
    right: -20%;
    width: 70%;
  }

  ${bp(675)} {
    bottom: -5%;
    right: -7%;
    width: 57%;
  }

  ${bp(breakpoints.md)} {
    bottom: -25%;
    right: -15%;
    width: 60%;
  }

  ${bp(925)} {
    right: -5%;
    width: 54%;
  }

  ${bp(1050)} {
    right: 0;
    width: 47%;
  }

  ${bp(breakpoints.lg)} {
    bottom: -30%;
    right: -10%;
    width: 52%;
  }

  ${bp(breakpoints.xl)} {
    right: 0;
    width: 47%;
  }
`
