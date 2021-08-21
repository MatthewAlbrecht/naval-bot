import styled, { css } from 'styled-components'
import { bp, breakpoints } from 'styles/breakpoint'
import { ImageNames } from 'utils/images'

type ImageHelperProps = {
  imageName: ImageNames
}

export const ImagePositioner = styled.div<ImageHelperProps>`
  ${({ imageName }) => imageName === 'Chart' && chartStyles.positioning}
  ${({ imageName }) => imageName === 'Ladder' && ladderStyles.positioning}
`

export const ImageSpacer = styled.div<ImageHelperProps>`
  ${({ imageName }) => imageName === 'Chart' && chartStyles.spacing}
  ${({ imageName }) => imageName === 'Ladder' && ladderStyles.spacing}
`

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const chartStyles = {
  positioning: css`
    transform: scale(1.1);
    transform-origin: 20% 50%;

    ${bp(550)} {
      margin: 0 auto;
      max-width: ${({ theme }) => theme.toRems(500)};
    }

    ${bp(breakpoints.md)} {
      bottom: ${({ theme }) => theme.toRems(-175)};
      margin: unset;
      max-width: none;
      position: absolute;
      right: 0;
      transform: none;
      width: 63%;
    }

    ${bp(925)} {
      bottom: ${({ theme }) => theme.toRems(-175)};
    }

    ${bp(breakpoints.lg)} {
      bottom: unset;
      margin: 0 auto;
      position: unset;
      right: unset;
      transform: scale(1.6);
      transform-origin: 35% 50%;
      width: 70%;
    }
  `,
  spacing: css`
    ${bp(breakpoints.md)} {
      height: ${({ theme }) => theme.toRems(140)};
    }

    ${bp(925)} {
      height: ${({ theme }) => theme.toRems(200)};
    }
    ${bp(1100)} {
      height: ${({ theme }) => theme.toRems(250)};
    }

    ${bp(breakpoints.lg)} {
      height: unset;
    }
  `,
}

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const ladderStyles = {
  positioning: css`
    transform: scale(1.05);

    ${bp(450)} {
      margin: 0 auto;
      max-width: ${({ theme }) => theme.toRems(400)};
    }

    ${bp(breakpoints.md)} {
      bottom: -10%;
      margin: unset;
      max-width: none;
      position: absolute;
      right: 10%;
      transform: none;
      width: 55%;
    }

    ${bp(925)} {
      bottom: -20%;
      width: 43%;
    }
    ${bp(breakpoints.lg)} {
      bottom: unset;
      position: unset;
      right: unset;
      transform: scale(1.3);
      transform-origin: 35% 50%;
      width: 70%;
    }
  `,
  spacing: css`
    ${bp(breakpoints.md)} {
      height: ${({ theme }) => theme.toRems(80)};
    }
    ${bp(breakpoints.lg)} {
      height: 0;
    }
  `,
}
