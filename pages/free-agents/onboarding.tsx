import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import FullPageIFrame from 'components/FullPageIFrame'

export default function Onboarding(): React.ReactElement {
  return (
    <FullPageIFrame>
      <Head>
        <title>Free Agency | Onboarding</title>
      </Head>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrUrU1pSRe903OMV?backgroundColor=blue"
        frameBorder="0"
        width="100%"
        height="2397"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
    </FullPageIFrame>
  )
}
