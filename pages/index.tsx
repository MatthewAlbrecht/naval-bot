import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { Box } from 'components'
import { PageBuilder } from 'components/Sections'
import { getHomePageData } from 'lib/copy'
import { getNavigationData, NavigationData } from 'lib/navigation'
import { PageData } from 'types'
import Layout from '../components/Layout'

type Props = PageData & { navigationData: NavigationData }

export default function Home({
  sections,
  meta,
  navigationData,
}: Props): React.ReactElement {
  return (
    <Layout background="dark" navigationData={navigationData}>
      <Head>
        <title>{meta.title}</title>

        {/* Primary Meta Tags */}
        <link rel="canonical" href="https://www.freeagency.com/" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.freeagency.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Free Agency" />

        <meta property="og:image" content="/img/freeagencyogimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta property="og:image" content="/img/fa-icon-fs.png" />
        <meta property="og:image:width" content="3000" />
        <meta property="og:image:height" content="3000" />

        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Free Agency" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.freeagency.com/" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content="/img/freeagencyogimage.png" />
      </Head>
      <Box backgroundColor="darkest" top={[5, { md: 12, lg: 14 }]}>
        <PageBuilder sections={sections} />
      </Box>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const { sections, meta } = getHomePageData()
  const navigationData = getNavigationData()

  return {
    props: {
      sections,
      meta,
      navigationData,
    },
  }
}
