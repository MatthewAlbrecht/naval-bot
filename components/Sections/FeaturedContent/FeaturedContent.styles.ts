import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { Box, BoxProps } from 'components/Box'
import { bp, breakpoints } from 'styles/breakpoint'
import { ImageNames } from 'utils/images'

export const ContentStyle = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.foregroundContent};
`

export const BulletIconWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius[100]};
  box-shadow: 0 0 12px rgba(140, 87, 228, 0.5);
`

type ImageHelperProps = {
  imageName: ImageNames
}

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const lightbulbStyles: {
  positioning: FlattenInterpolation<ThemeProps<DefaultTheme>>
  sectionSpacing: BoxProps
} = {
  positioning: css`
    transform: scale(1.3);
    ${bp(breakpoints.md)} {
      transform: scale(1.6);
      transform-origin: 80% 50%;
    }
    ${bp(1000)} {
      margin-left: auto;
      width: 90%;
    }
    ${bp(1100)} {
      width: 80%;
    }
    ${bp(breakpoints.lg)} {
      position: relative;
      top: ${({ theme }) => theme.rhythm(3)};
      transform: scale(1.5);
      width: 100%;
    }
    ${bp(breakpoints.xl)} {
      left: -9%;
      position: absolute;
      top: ${({ theme }) => theme.rhythm(-16)};
      transform: none;
      width: 58%;
    }
  `,

  sectionSpacing: {
    top: [0, { lg: 2, xl: 2 }],
    bottom: [0, { xl: 1 }],
  },
}

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const mirrorStyles: {
  positioning: FlattenInterpolation<ThemeProps<DefaultTheme>>
  sectionSpacing: BoxProps
} = {
  positioning: css`
    bottom: 0;
    left: -60%;
    padding-top: ${({ theme }) => theme.rhythm(3)};
    position: relative;
    right: 0;
    width: 160%;
    ${bp(breakpoints.md)} {
      bottom: ${({ theme }) => theme.rhythm(2.5)};
      height: auto;
      left: auto;
      padding-top: 0;
      position: absolute;
      right: 0;
      width: 90%;
    }
    ${bp(975)} {
      width: 75%;
    }
    ${bp(1125)} {
      width: 70%;
    }
    ${bp(breakpoints.lg)} {
      bottom: ${({ theme }) => theme.rhythm(-2)};
      right: ${({ theme }) => theme.rhythm(-2)};
      width: 78%;
    }
    ${bp(breakpoints.xl)} {
      width: 68%;
    }
  `,
  sectionSpacing: {
    top: [0, { lg: 5, xl: 10 }],
    bottom: [0, { xl: 3 }],
  },
}

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const mazeStyles = css`
  position: absolute;
  right: -15%;
  top: -10%;
  width: 70%;
  ${bp(breakpoints.md)} {
    right: -17%;
    top: -10%;
    width: 60%;
  }
  ${bp(breakpoints.lg)} {
    right: -15%;
    top: -30%;
    width: 70%;
  }
`

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const lightingStyles = {
  positioning: css`
    position: absolute;
    right: -10%;
    top: -5%;
    width: 70%;

    ${bp(600)} {
      width: 50%;
    }

    ${bp(breakpoints.md)} {
      right: -20%;
      top: -5%;
      width: 65%;
    }

    ${bp(1000)} {
      right: -5%;
      width: 50%;
    }
    ${bp(1175)} {
      right: -5%;
      top: -20%;
      width: 50%;
    }
    ${bp(breakpoints.lg)} {
      right: -5%;
      top: -20%;
      width: 55%;
    }
    ${bp(breakpoints.xl)} {
      top: -40%;
    }
  `,

  imageSpacing: css`
    height: 40vw;

    ${bp(600)} {
      height: 30vw;
    }
    ${bp(breakpoints.md)} {
      height: auto;
    }
  `,
}

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const buildingStyles: {
  positioning: FlattenInterpolation<ThemeProps<DefaultTheme>>
  sectionSpacing: BoxProps
} = {
  positioning: css`
    display: none;

    ${bp(breakpoints.md)} {
      bottom: 0;
      display: block;
      left: 5%;
      position: absolute;
      transform: scaleY(1.4);
      transform-origin: bottom center;
      width: 38%;
    }

    ${bp(850)} {
      bottom: 0;
      left: 7%;
      width: 34%;
    }

    ${bp(900)} {
      left: 5%;
      transform: none;
      width: 41%;
    }

    ${bp(1000)} {
      left: 8%;
      width: 35%;
    }

    ${bp(1100)} {
      left: 11%;
      width: 30%;
    }

    ${bp(breakpoints.lg)} {
      left: 6%;
      transform: scaleY(1.2);
      width: 37%;
    }

    ${bp(breakpoints.xl)} {
      left: 7%;
      transform: none;
      width: 33%;
    }
  `,
  sectionSpacing: {
    top: [0, { md: 6, lg: 11, xl: 14 }],
  },
}

/* TODO (matthewalbrecht): use calc function to better scale size/position of image */
const takeoffStyles: {
  positioning: FlattenInterpolation<ThemeProps<DefaultTheme>>
  sectionSpacing: BoxProps
} = {
  positioning: css`
    left: ${({ theme }) => theme.rhythm(-4)};
    position: relative;
    transform: scale(1.6);
    transform-origin: 0% 100%;
    width: 90%;

    ${bp(450)} {
      transform: scale(1.5);
      width: 80%;
    }

    ${bp(575)} {
      width: 65%;
    }

    ${bp(breakpoints.md)} {
      left: 0;
      position: absolute;
      top: -10%;
      transform: none;
      transform-origin: initial;
      width: 60%;
    }
    ${bp(breakpoints.lg)} {
      bottom: 10%;
      top: unset;
      width: 57%;
    }
    ${bp(breakpoints.xl)} {
      bottom: 0;
      width: 53%;
    }
  `,
  sectionSpacing: {
    top: [7, { md: 5, lg: 6, xl: 12 }],
  },
}

export const ImagePositioningContainer = styled.div<ImageHelperProps>`
  ${({ imageName }) => imageName === 'Lightbulbs' && lightbulbStyles.positioning}
  ${({ imageName }) => imageName === 'Mirror' && mirrorStyles.positioning}
  ${({ imageName }) => imageName === 'Maze' && mazeStyles}
  ${({ imageName }) => imageName === 'Takeoff' && takeoffStyles.positioning}
  ${({ imageName }) => imageName === 'Lighting' && lightingStyles.positioning}
  ${({ imageName }) => imageName === 'Building' && buildingStyles.positioning}
`

export const ImageSpacer = styled.div<ImageHelperProps>`
  ${({ imageName }) => imageName === 'Lighting' && lightingStyles.imageSpacing}
`

export const SectionSpacer = styled(Box).attrs<ImageHelperProps & BoxProps>(
  ({ imageName, ...props }) => {
    let boxProps: BoxProps = {}
    switch (imageName) {
      case 'Lightbulbs':
        boxProps = lightbulbStyles.sectionSpacing
        break
      case 'Mirror':
        boxProps = mirrorStyles.sectionSpacing
        break
      case 'Building':
        boxProps = buildingStyles.sectionSpacing
        break
      case 'Takeoff':
        boxProps = takeoffStyles.sectionSpacing
        break
      default:
        break
    }

    return {
      ...boxProps,
      ...props,
    }
  }
)<ImageHelperProps & BoxProps>``
