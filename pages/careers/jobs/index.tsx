import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import GreenhouseIFrame, { GreenhouseMeta } from 'components/GreenhouseIFrame'
import Layout from 'components/Layout'
import { getNavigationData, NavigationData } from 'lib/navigation'
import { Div } from 'styles/base'

type Props = {
  navigationData: NavigationData
}

export default function Jobs({ navigationData }: Props): React.ReactElement {
  return (
    <Layout background="light" navigationData={navigationData}>
      <Head>
        {/* Primary Meta Tags */}
        <link rel="canonical" href="https://www.freeagency.com/careers/jobs" />

        {/* Open Graph */}
        <meta property="og:url" content="https://www.freeagency.com/careers/jobs" />
        <GreenhouseMeta />
      </Head>
      <Div backgroundColor="lightest">
        <GreenhouseIFrame />
      </Div>
    </Layout>
  )
}
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const navigationData = getNavigationData()
  return {
    props: {
      navigationData,
    },
  }
}
