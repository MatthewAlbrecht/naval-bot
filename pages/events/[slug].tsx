import { GetStaticPaths, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import FullPageIFrame from 'components/FullPageIFrame'
import { EventParam, EventType, getAllEventSlugs, getEventData } from 'lib/events'

type Props = {
  eventData: EventType
}

export default function Event({ eventData }: Props): React.ReactElement {
  return (
    <FullPageIFrame>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta content={eventData.description} name="description" />
        <meta content="website" property="og:type" />
        <meta
          content={`https://www.freeagency.com/events/${eventData.slug}`}
          property="og:url"
        />
        <meta content={eventData.title} property="og:title" />
        <meta content={eventData.description} property="og:description" />
        <meta content={eventData.imageUrl} property="og:image" />
        <link
          href={`https://www.freeagency.com/events/${eventData.slug}`}
          rel="canonical"
        />

        <title>{eventData.title} </title>
      </Head>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://joinfa.typeform.com/to/${eventData.typeFormId}`}
      />
      <Script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </FullPageIFrame>
  )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllEventSlugs()
  return {
    paths,
    fallback: false,
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticProps({
  params,
}: EventParam): Promise<GetStaticPropsResult<{ eventData: EventType }>> {
  const eventData = getEventData(params.slug)
  return {
    props: {
      eventData,
    },
  }
}
