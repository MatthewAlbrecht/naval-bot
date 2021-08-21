import React from 'react'
import styled, { css } from 'styled-components'
import { convertPixelsToRems, getColorFromKey } from 'styles/base'
import { buildResponsiveRules, ResponsiveRuleValue } from 'styles/breakpoint'
import { Colors } from 'styles/theme'
import AccountAvatar from './Icons/AccountAvatar'
import Ampersand from './Icons/Ampersand'
import AngelList from './Icons/AngelList'
import Arrow from './Icons/Arrow'
import CheckCircle from './Icons/CheckCircle'
import Checklist from './Icons/Checklist'
import Close from './Icons/Close'
import FreeAgency from './Icons/FreeAgency'
import Hamburger from './Icons/Hamburger'
import Instagram from './Icons/Instagram'
import LinkedIn from './Icons/LinkedIn'
import Message from './Icons/Message'
import Money from './Icons/Money'
import OctoStarCheck from './Icons/OctoStarCheck'
import People from './Icons/People'
import Plus from './Icons/Plus'
import RadioBroadcast from './Icons/RadioBroadcast'
import RocketShip from './Icons/RocketShip'
import Star from './Icons/Star'
import Twitter from './Icons/Twitter'
import Wink from './Icons/Wink'

export type IconNames =
  | 'AccountAvatar'
  | 'AngelList'
  | 'Arrow'
  | 'CheckCircle'
  | 'Checklist'
  | 'Close'
  | 'FreeAgency'
  | 'Hamburger'
  | 'Instagram'
  | 'LinkedIn'
  | 'Message'
  | 'People'
  | 'Ampersand'
  | 'Star'
  | 'Checklist'
  | 'CheckCircle'
  | 'AccountAvatar'
  | 'Money'
  | 'OctoStarCheck'
  | 'People'
  | 'Plus'
  | 'RadioBroadcast'
  | 'RocketShip'
  | 'Star'
  | 'Twitter'
  | 'Wink'

interface IconProps extends StyleProps {
  name: IconNames
}

type StyleProps = {
  height?: ResponsiveRuleValue<number>
  width?: ResponsiveRuleValue<number>
  display?: 'inline-block' | 'block'
  primaryFill?: ResponsiveRuleValue<Colors>
  primaryFillHover?: ResponsiveRuleValue<Colors>
  primaryStroke?: ResponsiveRuleValue<Colors>
  gradient?: [Colors, Colors]
}

type HiddenStyleProps = {
  aspectRatio: number
}

const IconBox = styled.i<StyleProps & HiddenStyleProps>`
  display: ${({ display = 'block' }) => display};
  position: relative;

  /* Force constrained layout to ensure predictable svg rendering */
  > * {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
  }

  ${({ height, aspectRatio }) => {
    if (height) {
      return [
        buildResponsiveRules<number>('height', height, convertPixelsToRems),
        buildResponsiveRules<number>('width', height, (height: number) =>
          convertPixelsToRems(getWidthFromHeight(height, aspectRatio))
        ),
      ].flat()
    }
  }}
  ${({ width, aspectRatio }) => {
    if (width) {
      return [
        buildResponsiveRules<number>('width', width, convertPixelsToRems),
        buildResponsiveRules<number>('height', width, (width: number) =>
          convertPixelsToRems(getHeightFromWidth(width, aspectRatio))
        ),
      ].flat()
    }
  }}
  .primaryFill {
    ${({ primaryFill }) =>
      primaryFill &&
      buildResponsiveRules<Colors>('fill', primaryFill, getColorFromKey)}
    ${({ gradient }) =>
      gradient &&
      css`
        fill: url(#gradient-fill);
      `}
  }

  .primaryStroke {
    ${({ primaryStroke }) =>
      primaryStroke &&
      buildResponsiveRules<Colors>('stroke', primaryStroke, getColorFromKey)}
  }

  ${({ theme, gradient }) =>
    gradient &&
    css`
      #gradient-fill {
        --color-left: ${theme.color[gradient[0]]};
        --color-right: ${theme.color[gradient[1]]};
      }
    `}

  ${({ primaryFillHover }) =>
    primaryFillHover &&
    css`
      &:hover .primaryFill {
        ${buildResponsiveRules<Colors>('fill', primaryFillHover, getColorFromKey)}
      }
    `}
`

export function Icon({ name, ...rest }: IconProps): React.ReactElement {
  const selectedIcon = iconMap[name]
  return (
    <IconBox {...rest} aspectRatio={selectedIcon.aspectRatio}>
      {selectedIcon.component}
    </IconBox>
  )
}

const iconMap: Record<
  IconNames,
  { component: React.ReactElement; aspectRatio: number }
> = {
  AccountAvatar: {
    component: <AccountAvatar />,
    aspectRatio: AccountAvatar.aspectRatio,
  },
  Ampersand: { component: <Ampersand />, aspectRatio: Ampersand.aspectRatio },
  AngelList: { component: <AngelList />, aspectRatio: AngelList.aspectRatio },
  Arrow: { component: <Arrow />, aspectRatio: Arrow.aspectRatio },
  CheckCircle: { component: <CheckCircle />, aspectRatio: CheckCircle.aspectRatio },
  Checklist: { component: <Checklist />, aspectRatio: Checklist.aspectRatio },
  Close: { component: <Close />, aspectRatio: Close.aspectRatio },
  FreeAgency: { component: <FreeAgency />, aspectRatio: FreeAgency.aspectRatio },
  Hamburger: { component: <Hamburger />, aspectRatio: Hamburger.aspectRatio },
  Instagram: { component: <Instagram />, aspectRatio: Instagram.aspectRatio },
  LinkedIn: { component: <LinkedIn />, aspectRatio: LinkedIn.aspectRatio },
  Message: { component: <Message />, aspectRatio: Message.aspectRatio },
  Money: { component: <Money />, aspectRatio: Money.aspectRatio },
  Plus: { component: <Plus />, aspectRatio: Plus.aspectRatio },
  Wink: { component: <Wink />, aspectRatio: Wink.aspectRatio },
  RocketShip: { component: <RocketShip />, aspectRatio: RocketShip.aspectRatio },
  OctoStarCheck: {
    component: <OctoStarCheck />,
    aspectRatio: OctoStarCheck.aspectRatio,
  },
  People: { component: <People />, aspectRatio: People.aspectRatio },
  RadioBroadcast: {
    component: <RadioBroadcast />,
    aspectRatio: RadioBroadcast.aspectRatio,
  },
  Star: { component: <Star />, aspectRatio: Star.aspectRatio },
  Twitter: { component: <Twitter />, aspectRatio: Twitter.aspectRatio },
}

export const getHeightFromWidth = (width: number, aspectRatio: number): number =>
  width / aspectRatio
export const getWidthFromHeight = (height: number, aspectRatio: number): number =>
  height * aspectRatio
