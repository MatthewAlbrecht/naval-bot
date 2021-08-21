import { IconNames } from 'components/Icon'
import { SectionType } from 'components/Sections'
import { ResponsiveRuleValue } from 'styles/breakpoint'
import { ImageNames } from 'utils/images'

export type BackgroundOptions =
  | 'TOP_LIGHT_BOTTOM_DARK'
  | 'LIGHT'
  | 'DARK'
  | 'TOP_DARK_BOTTOM_LIGHT'

type Image = {
  name: ImageNames
  alt: string
}

export type HeadlineCopy = [string, boolean][]

export type MetaTagData = {
  title: string
  description: string
  keywords: string
}

type FeaturedFreeAgentCard = {
  avatar: Image
  description: string
  lookingFor: string
  prefillId: string
}

type Move = {
  imageUrl: string
  description: string
}

type FeatureListItem = {
  title: string
  description: string
  iconName: IconNames
}

type BulletList = {
  iconName: IconNames
  items: string[]
}

type CTA = {
  label: string
  to: string
}

export type Employee = {
  name: string
  title: string
  image: Image
}

type IconWithTitle = {
  iconName: IconNames
  title: string
  description: string
}

export interface BaseSection {
  background?: ResponsiveRuleValue<BackgroundOptions>
}

export interface HeroSection extends BaseSection {
  sectionType: SectionType.HERO
  headline: HeadlineCopy
  cta: CTA
  image: Image
}

export interface HeroSecondarySection extends BaseSection {
  sectionType: SectionType.HERO_SECONDARY
  headline: HeadlineCopy
  cta: CTA
  image: Image
}

export interface LogoBoxSection extends BaseSection {
  sectionType: SectionType.LOGO_BOX
  headline: HeadlineCopy
  headline2: HeadlineCopy
  body: string
}

export interface FeaturedFreeAgentSection extends BaseSection {
  sectionType: SectionType.FEATURED_FREE_AGENTS
  headline: HeadlineCopy
  body: string
  freeAgentCTA: CTA
  freeAgents: FeaturedFreeAgentCard[]
}

export interface FeaturedContentSection extends BaseSection {
  sectionType: SectionType.FEATURED_CONTENT
  contentSide: 'LEFT' | 'RIGHT'
  contentSideMobile: 'TOP' | 'BOTTOM'
  contentColumns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  variant: 'DEFAULT' | 'GRADIENT_BACKGROUND'
  spacing: 'DEFAULT' | 'COMPACT'
  headline: HeadlineCopy
  image: Image
  cta?: CTA
  bulletList?: BulletList
  featureList?: FeatureListItem[]
  body?: string
}

export interface RecentMovesSection extends BaseSection {
  sectionType: SectionType.RECENT_MOVES
  headline: HeadlineCopy
  bookmarkText: string
  moves: Move[]
}

export interface InvestorsSection extends BaseSection {
  sectionType: SectionType.INVESTORS
  headline: HeadlineCopy
  main: { image: Image }[]
  others: string[]
}

export interface IconListSection extends BaseSection {
  sectionType: SectionType.ICON_LIST
  headline: HeadlineCopy
  items: IconWithTitle[]
}

export interface GreenhouseSection extends BaseSection {
  sectionType: SectionType.GREENHOUSE
  id: string
}

export interface OurTeamSection extends BaseSection {
  sectionType: SectionType.OUR_TEAM
  headline: HeadlineCopy
  ctaBox: {
    title: string
    subTitle: string
    to: string
    ctaLabel: string
  }
  employees: Employee[]
}

export type PossibleSections =
  | HeroSection
  | LogoBoxSection
  | FeaturedFreeAgentSection
  | FeaturedContentSection
  | RecentMovesSection
  | InvestorsSection
  | IconListSection
  | HeroSecondarySection
  | GreenhouseSection
  | OurTeamSection

export type PageData = {
  meta: MetaTagData
  sections: PossibleSections[]
}
