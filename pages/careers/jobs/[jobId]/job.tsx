import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import GreenhouseIFrame, { GreenhouseMeta } from 'components/GreenhouseIFrame'
import Layout from 'components/Layout'
import { getNavigationData, NavigationData } from 'lib/navigation'
import { Div } from 'styles/base'

type Props = {
  navigationData: NavigationData
}

export default function Job({ navigationData }: Props): React.ReactElement {
  return (
    <Layout background="light" navigationData={navigationData}>
      <Head>
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

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
