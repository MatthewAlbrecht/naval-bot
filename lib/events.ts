import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export type EventType = {
  slug: string
  title: string
  description: string
  imageUrl: string
  typeFormId: string
}

export type EventParam = {
  params: {
    slug: string
  }
}
const dataDirectory = path.join(process.cwd(), 'data')

export function getAllEventSlugs(): EventParam[] {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, 'events.yaml'),
    'utf8'
  )
  const data = yaml.load(fileContents) as EventType[]
  return data.map((event) => ({ params: { slug: event.slug } }))
}

export function getEventData(slug: string): EventType {
  const fileContents = fs.readFileSync(
    path.join(dataDirectory, 'events.yaml'),
    'utf8'
  )
  const data = yaml.load(fileContents) as EventType[]
  // this must exist because we pull the list of possible slugs from the same property
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return data.find((event) => event.slug === slug)!
}
