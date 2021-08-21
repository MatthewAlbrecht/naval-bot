import BackgroundCapital from 'public/img/background-capital.svg'
import BloombergBeta from 'public/img/bloomberg-beta.svg'
import Building from 'public/img/building.svg'
import Chart from 'public/img/chart.svg'
import AlexR from 'public/img/employees/alex-rothberg.jpeg'
import Bernadette from 'public/img/employees/bernadette.jpeg'
import Dan from 'public/img/employees/dan.jpeg'
import Jamie from 'public/img/employees/jamie.jpeg'
import Jenn from 'public/img/employees/jenn.jpeg'
import Katie from 'public/img/employees/katie.jpeg'
import Kerry from 'public/img/employees/kerry.jpeg'
import Matt from 'public/img/employees/matt.jpeg'
import Maurice from 'public/img/employees/maurice.jpeg'
import Nathan from 'public/img/employees/nathan.jpeg'
import Sherveen from 'public/img/employees/sherveen.jpeg'
import Female1 from 'public/img/female1.svg'
import Female2 from 'public/img/female2.svg'
import Ladder from 'public/img/ladder.svg'
import LATSmall from 'public/img/latimes-sm.svg'
import LAT from 'public/img/latimes.svg'
import Lightbulbs from 'public/img/lightbulbs.svg'
import Lighting from 'public/img/lighting.svg'
import LogoBackground from 'public/img/logo-background-desktop.svg'
import LogoBackgroundMobile from 'public/img/logo-background-mobile.svg'
import LudlowVentures from 'public/img/ludlow-ventures.svg'
import Male1 from 'public/img/male1.svg'
import Male2 from 'public/img/male2.svg'
import Maze from 'public/img/maze.svg'
import Mirror from 'public/img/mirror.svg'
import NYT from 'public/img/nyt.svg'
import Planets from 'public/img/planets.svg'
import ResoluteVentures from 'public/img/resolute-ventures.svg'
import Takeoff from 'public/img/takeoff.svg'
import TechcrunchSmall from 'public/img/techcrunch-sm.svg'
import Techcrunch from 'public/img/techcrunch.svg'
import WSJSmall from 'public/img/wsj-sm.svg'
import WSJ from 'public/img/wsj.svg'

export type ImageType = {
  src: StaticImageData
  width: number
  height: number
  nudgeRightInvestorSection?: boolean
}

export const Images = {
  LogoBackground: {
    src: LogoBackground,
    width: 1200,
    height: 704,
  },
  /* TODO (matthewalbrecht): this should probably be nested under LogoBackground somehow */
  LogoBackgroundMobile: {
    src: LogoBackgroundMobile,
    width: 328,
    height: 290,
  },
  Sherveen: {
    src: Sherveen,
    width: 2255,
    height: 2255,
  },
  AlexR: {
    src: AlexR,
    width: 2255,
    height: 2255,
  },
  Kerry: {
    src: Kerry,
    width: 750,
    height: 750,
  },
  Bernadette: {
    src: Bernadette,
    width: 2255,
    height: 2255,
  },
  Nathan: {
    src: Nathan,
    width: 2255,
    height: 2255,
  },
  Katie: {
    src: Katie,
    width: 2255,
    height: 2255,
  },
  Maurice: {
    src: Maurice,
    width: 2255,
    height: 2255,
  },
  Jenn: {
    src: Jenn,
    width: 2255,
    height: 2255,
  },
  Matt: {
    src: Matt,
    width: 2255,
    height: 2255,
  },
  Dan: {
    src: Dan,
    width: 2255,
    height: 2255,
  },
  Jamie: {
    src: Jamie,
    width: 750,
    height: 750,
  },
  Lighting: {
    src: Lighting,
    width: 717,
    height: 783,
  },
  Building: {
    src: Building,
    width: 465,
    height: 642,
  },
  Ladder: {
    src: Ladder,
    width: 528,
    height: 495,
  },
  LudlowVentures: {
    src: LudlowVentures,
    width: 85,
    height: 116,
  },
  ResoluteVentures: {
    src: ResoluteVentures,
    width: 197,
    height: 104,
  },
  BloombergBeta: {
    src: BloombergBeta,
    width: 188,
    height: 64,
    nudgeRightInvestorSection: true,
  },
  BackgroundCapital: {
    src: BackgroundCapital,
    width: 122,
    height: 39,
  },
  Takeoff: {
    src: Takeoff,
    width: 821,
    height: 542,
  },
  Maze: {
    src: Maze,
    width: 753,
    height: 643,
  },
  Chart: {
    src: Chart,
    width: 654,
    height: 598,
  },
  NYT: {
    src: NYT,
    width: 227,
    height: 42,
  },
  WSJ: {
    src: WSJ,
    width: 227,
    height: 42,
  },
  TechcrunchSmall: {
    src: TechcrunchSmall,
    width: 79,
    height: 57,
  },
  Techcrunch: {
    src: Techcrunch,
    width: 227,
    height: 42,
  },
  LATSmall: {
    src: LATSmall,
    width: 62,
    height: 57,
  },
  LAT: {
    src: LAT,
    width: 227,
    height: 42,
  },
  WSJSmall: {
    src: WSJSmall,
    width: 71,
    height: 52,
  },
  Lightbulbs: {
    src: Lightbulbs,
    width: 730,
    height: 869,
  },
  Mirror: {
    src: Mirror,
    width: 907,
    height: 624,
  },
  Planets: {
    src: Planets,
    width: 553,
    height: 697,
  },
  Male1: {
    src: Male1,
    width: 90,
    height: 90,
  },
  Female1: {
    src: Female1,
    width: 90,
    height: 90,
  },
  Male2: {
    src: Male2,
    width: 90,
    height: 90,
  },
  Female2: {
    src: Female2,
    width: 90,
    height: 90,
  },
}

export type ImageNames = keyof typeof Images
