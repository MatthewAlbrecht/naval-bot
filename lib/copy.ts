import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { SectionType } from 'components/Sections'
import { InvestorsSection, PageData } from 'types'

const dataDirectory = path.join(process.cwd(), 'data')

export function getHomePageData(): PageData {
  const fileContents = fs.readFileSync(path.join(dataDirectory, 'home.yaml'), 'utf8')
  const data = yaml.load(fileContents) as PageData
  maybeAttachInvestorSection(data)

  return data
}

export function getCareerPageData(): PageData {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, 'careers.yaml'),
    'utf8'
  )
  const data = yaml.load(fileContents) as PageData
  maybeAttachInvestorSection(data)

  return data
}

export function getAboutPageData(): PageData {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, 'about.yaml'),
    'utf8'
  )
  const data = yaml.load(fileContents) as PageData
  maybeAttachInvestorSection(data)

  return data
}

function maybeAttachInvestorSection(data: PageData): void {
  const investorSectionIndex = data.sections.findIndex(
    (section) => section.sectionType === SectionType.INVESTORS
  )

  if (investorSectionIndex >= 0) {
    const investorSectionData = getInvestorSectionData()
    data.sections[investorSectionIndex] = investorSectionData
  }
}

function getInvestorSectionData(): InvestorsSection {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, 'investors.yaml'),
    'utf8'
  )
  const data = yaml.load(fileContents) as InvestorsSection

  return data
}
