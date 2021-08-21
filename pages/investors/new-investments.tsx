import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
import FullPageIFrame from 'components/FullPageIFrame'

export default function NewInvestments(): React.ReactElement {
  const router = useRouter()
  const { query } = router
  /* TODO (matthewalbrecht): consider handling this differently */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = new URLSearchParams(query as any)
  return (
    <FullPageIFrame>
      <Head>
        <title>Free Agency | Onboarding</title>
      </Head>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src={`https://airtable.com/embed/shrwwW5ZI09RANKME?backgroundColor=yellow&${params.toString()}`}
        frameBorder="0"
        width="100%"
        height="2397"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
    </FullPageIFrame>
  )
}
