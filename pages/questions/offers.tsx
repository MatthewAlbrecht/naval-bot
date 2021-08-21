import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import FullPageIFrame from 'components/FullPageIFrame'

export default function Offers(): React.ReactElement {
  return (
    <FullPageIFrame>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>UpYourOffer</title>
      </Head>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://joinfa.typeform.com/to/eo1JT2"
      />
      <Script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </FullPageIFrame>
  )
}
