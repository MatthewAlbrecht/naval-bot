import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { Box } from 'components'
import Layout from 'components/Layout'
import { PageBuilder } from 'components/Sections'
import { getAboutPageData } from 'lib/copy'
import { getNavigationData, NavigationData } from 'lib/navigation'
import { PageData } from 'types'

type Props = PageData & { navigationData: NavigationData }
export default function About({
  sections,
  meta,
  navigationData,
}: Props): React.ReactElement {
  return (
    <Layout background="light" navigationData={navigationData}>
      <Head>
        <title>{meta.title}</title>

        {/* Primary Meta Tags */}
        <link rel="canonical" href="https://www.freeagency.com/about" />
        <meta property="og:site_name" content="Free Agency" />
        <meta property="og:url" content="https://www.freeagency.com/about" />
      </Head>
      <Box backgroundColor="lightest" top={[5, { md: 12, lg: 14 }]}>
        <PageBuilder sections={sections} />
      </Box>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const { sections, meta } = getAboutPageData()
  const navigationData = getNavigationData()
  return {
    props: {
      sections,
      meta,
      navigationData,
    },
  }
}
