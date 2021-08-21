import { DefaultTheme } from 'styled-components'

const RHYTHM = 8

/* TODO (matthewalbrecht): make a padding function like padding(2, 3, 4, 3) */
export const toRems = (size: number): string => `${size / 10}rem`
export const rhythm = (mult: number): string => `${(mult * RHYTHM) / 10}rem`
export const aColor = (color: Colors, alpha: Alphas): string =>
  `${colors[color]}${hexAlpha[alpha]}`

const hexAlpha = {
  100: 'FF',
  99: 'FC',
  98: 'FA',
  97: 'F7',
  96: 'F5',
  95: 'F2',
  94: 'F0',
  93: 'ED',
  92: 'EB',
  91: 'E8',
  90: 'E6',
  89: 'E3',
  88: 'E0',
  87: 'DE',
  86: 'DB',
  85: 'D9',
  84: 'D6',
  83: 'D4',
  82: 'D1',
  81: 'CF',
  80: 'CC',
  79: 'C9',
  78: 'C7',
  77: 'C4',
  76: 'C2',
  75: 'BF',
  74: 'BD',
  73: 'BA',
  72: 'B8',
  71: 'B5',
  70: 'B3',
  69: 'B0',
  68: 'AD',
  67: 'AB',
  66: 'A8',
  65: 'A6',
  64: 'A3',
  63: 'A1',
  62: '9E',
  61: '9C',
  60: '99',
  59: '96',
  58: '94',
  57: '91',
  56: '8F',
  55: '8C',
  54: '8A',
  53: '87',
  52: '85',
  51: '82',
  50: '80',
  49: '7D',
  48: '7A',
  47: '78',
  46: '75',
  45: '73',
  44: '70',
  43: '6E',
  42: '6B',
  41: '69',
  40: '66',
  39: '63',
  38: '61',
  37: '5E',
  36: '5C',
  35: '59',
  34: '57',
  33: '54',
  32: '52',
  31: '4F',
  30: '4D',
  29: '4A',
  28: '47',
  27: '45',
  26: '42',
  25: '40',
  24: '3D',
  23: '3B',
  22: '38',
  21: '36',
  20: '33',
  19: '30',
  18: '2E',
  17: '2B',
  16: '29',
  15: '26',
  14: '24',
  13: '21',
  12: '1F',
  11: '1C',
  10: '1A',
  9: '17',
  8: '14',
  7: '12',
  6: '0F',
  5: '0D',
  4: '0A',
  3: '08',
  2: '05',
  1: '03',
  0: '00',
}

const colors = {
  faBlue: '#216EF2',
  faDarkBlue: '#212E45',
  faYellow: '#FFE870',
  faLightBlue: '#A3F2F2',
  faPink: '#FCD6D1',
  faGreen: '#66F2A8',
  faRed: '#FA8A8A',
  faGrey1: '#FAF7F5',
  faGrey2: '#CFD1D1',
  faGrey3: '#A3A8AD',
  faGrey4: '#78808A',
  faGrey5: '#4D5766',
  white: '#FFFFFF',
  lightest: '#F1F3FF',
  lightest60: `#ffffff${hexAlpha[60]}`,
  darkest: '#000534',
  primaryButton: '#8C57E4',
  emphasisDark: '#EB596B',
  emphasisLight: '#FF8A46',
  emphasis2Light: '#2E9FCC',
  emphasis2Dark: '#CE69E8',
  emphasis3: '#6EEFF1',
  backgroundGradientDark: '#7169E0',
  backgroundGradientLight: '#BD52DC',
  mediumPurple: '#382E75',
  darkPurple: '#21164F',
  lightOrange: '#E6A160',
  blurple: '#C06FE6',
  iconGrey: '#869AB8',
  sand: '#FCCB90',
  blurple2: '#D57EEB',
}

const fonts = {
  primary: 'Lato, Helvetica, sans-serif',
  display: 'WesFY, serif',
}

const borderRadius = {
  normal: toRems(5),
  lg: toRems(12),
  '100': '100%',
}

const zIndex = {
  nav: 10,
  foregroundContent: 5,
  bleedThroughMobileNav: 20,
  mobileNav: 15,
}

const opacity = {
  horizontalRule: 23,
}

const gradients = {
  sandToBlurple: 'linear-gradient(90deg, #fccb90, #d57eeb)',
  tealToBrightPurple: 'linear-gradient(90deg, #2e9fcc, #ce69e8)',
  sandToBrightPurpleToBlurple:
    'linear-gradient(125.5deg, #fccb90 -26%, #d57eeb 60.6%, #7e89eb)',
  aquaToAqua: 'linear-gradient(90deg, #6EEFF1, #6EEFF1);',
  tealToPurple: 'linear-gradient(90deg, #2e9fcc, #ce69e8);',
}

export type Colors = keyof typeof colors
export type Fonts = keyof typeof fonts
export type BorderRadius = keyof typeof borderRadius
export type ZIndex = keyof typeof zIndex
export type Alphas = keyof typeof hexAlpha
export type Opacities = keyof typeof opacity
export type Gradients = keyof typeof gradients

const theme: DefaultTheme = {
  color: colors,
  font: fonts,
  opacity,
  zIndex,
  borderRadius,
  gradients,
  toRems,
  rhythm,
  aColor,
}

export default theme
