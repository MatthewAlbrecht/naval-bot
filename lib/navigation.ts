import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { IconNames } from 'components/Icon'

const dataDirectory = path.join(process.cwd(), 'data')

export type NavLink = {
  displayName: string
  slug: string
  showHeader: boolean
  showFooter: boolean
}

export type Social = {
  name: IconNames
  url: string
}

export type NavigationData = {
  links: NavLink[]
  socials: Social[]
  tagline: string
  linkListLabel: string
}

export function getNavigationData(): NavigationData {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, 'navigation.yaml'),
    'utf8'
  )
  const data = yaml.load(fileContents) as NavigationData
  return data
}
