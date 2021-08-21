import React from 'react'
import styled from 'styled-components'
import { Box } from 'components'
import { buildResponsiveRules, ResponsiveRuleValue } from 'styles/breakpoint'
import theme from 'styles/theme'
import { BackgroundOptions, PossibleSections } from 'types'
import FeaturedContent from './FeaturedContent'
import FeaturedFreeAgents from './FeaturedFreeAgents'
import Greenhouse from './Greenhouse'
import Hero from './Hero/Hero'
import HeroSecondary from './HeroSecondary'
import IconList from './IconList'
import Investors from './Investors'
import LogoBox from './LogoBox'
import OurTeam from './OurTeam'
import RecentMoves from './RecentMoves'

export enum SectionType {
  HERO = 'HERO',
  LOGO_BOX = 'LOGO_BOX',
  FEATURED_FREE_AGENTS = 'FEATURED_FREE_AGENTS',
  RECENT_MOVES = 'RECENT_MOVES',
  FEATURED_CONTENT = 'FEATURED_CONTENT',
  INVESTORS = 'INVESTORS',
  ICON_LIST = 'ICON_LIST',
  HERO_SECONDARY = 'HERO_SECONDARY',
  GREENHOUSE = 'GREENHOUSE',
  OUR_TEAM = 'OUR_TEAM',
}

type Props = {
  sections: PossibleSections[]
}

export function PageBuilder({ sections }: Props): React.ReactElement {
  return (
    <>
      {sections.map((section, index) => (
        <Background
          background={section.background}
          key={`${section.sectionType}-${index}`}
        >
          <Box
            top={index === 0 ? 0 : [5, { md: 9, lg: 10 }]}
            bottom={[5, { md: 9, lg: 10 }]}
          >
            <Section section={section} index={index} />
          </Box>
        </Background>
      ))}
    </>
  )
}

const Background = styled.div<{
  background?: ResponsiveRuleValue<BackgroundOptions>
}>`
  ${({ background = 'DARK' }) =>
    buildResponsiveRules('background-color', background, getBackground)}
`

function Section({
  section,
  index,
}: {
  section: PossibleSections
  index: number
}): React.ReactElement {
  const sectionKey = `${section.sectionType}${index}`
  switch (section.sectionType) {
    case SectionType.HERO:
      return <Hero key={sectionKey} {...section} />
    case SectionType.LOGO_BOX:
      return <LogoBox key={sectionKey} {...section} />
    case SectionType.FEATURED_FREE_AGENTS:
      return <FeaturedFreeAgents key={sectionKey} {...section} />
    case SectionType.RECENT_MOVES:
      return <RecentMoves key={sectionKey} {...section} />
    case SectionType.FEATURED_CONTENT:
      return <FeaturedContent key={sectionKey} {...section} />
    case SectionType.INVESTORS:
      return <Investors key={sectionKey} {...section} />
    case SectionType.ICON_LIST:
      return <IconList key={sectionKey} {...section} />
    case SectionType.HERO_SECONDARY:
      return <HeroSecondary key={sectionKey} {...section} />
    case SectionType.GREENHOUSE:
      return <Greenhouse key={sectionKey} {...section} />
    case SectionType.OUR_TEAM:
      return <OurTeam key={sectionKey} {...section} />
  }
}

function getBackground(backgroundOption: BackgroundOptions): string {
  switch (backgroundOption) {
    case 'DARK':
      return theme.color.darkest
    case 'LIGHT':
      return theme.color.lightest
    case 'TOP_LIGHT_BOTTOM_DARK':
      return `linear-gradient(to bottom, ${theme.color.lightest} 0%, ${theme.color.lightest} 50%, ${theme.color.darkest} 50%, ${theme.color.darkest} 100%)`
    case 'TOP_DARK_BOTTOM_LIGHT':
      return `linear-gradient(to top, ${theme.color.lightest} 0%, ${theme.color.lightest} 50%, ${theme.color.darkest} 50%, ${theme.color.darkest} 100%)`
    default:
      return theme.color.darkest
  }
}
