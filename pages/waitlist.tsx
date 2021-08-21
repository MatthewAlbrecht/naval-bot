import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect, useState, useCallback } from 'react'
import FullPageIFrame from 'components/FullPageIFrame'

/* TODO (cancan101): consider finding a better solution here */
// adapted from: https://stackoverflow.com/a/56458070/13583365
declare const window: Window &
  typeof globalThis & {
    GoogleAnalyticsObject?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }

function isGaReady(): boolean {
  return (
    window.GoogleAnalyticsObject != null &&
    window[window.GoogleAnalyticsObject] != null
  )
}

export default function Waitlist(): React.ReactElement {
  const [typeformQs, setTypeformQs] = useState('')
  const [gaQs, setGaQs] = useState('')

  const attachGAInfoToIframeSrc = useCallback(
    function () {
      const gao = window.GoogleAnalyticsObject
      if (!gao) {
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const gobj: UniversalAnalytics.ga | undefined = window[gao]
      if (!gobj) {
        return
      }

      gobj(function () {
        try {
          // Do the checks again in case something got unloaded
          // https://developers.google.com/analytics/devguides/collection/analyticsjs/ga-object-methods-reference
          const gao = window.GoogleAnalyticsObject
          if (!gao) {
            return
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const gobj: UniversalAnalytics.ga | undefined = window[gao]
          if (gobj) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const tracker: UniversalAnalytics.Tracker | undefined = gobj.getAll()[0]

            if (tracker) {
              let iframeSrcCurrent = ''

              // See: https://developers.google.com/analytics/devguides/collection/analyticsjs/linker
              // and: https://developers.google.com/analytics/devguides/collection/analyticsjs/linker#linkerparam
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              const linkerParam: string | undefined = tracker.get('linkerParam')
              if (linkerParam) {
                iframeSrcCurrent = `${iframeSrcCurrent}&${linkerParam}`
              }

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              const clientId: string | undefined = tracker.get('clientId')
              if (clientId) {
                iframeSrcCurrent = `${iframeSrcCurrent}&ga=${clientId}`
              }

              setGaQs(iframeSrcCurrent)
            }
          }
        } catch (e) {
          //
        }
      })
    },
    [setGaQs]
  )

  useEffect(() => {
    if (typeformQs === '') {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (localStorage) {
        const utmSource = localStorage.getItem('utm_source')
        let newTypeFormQs = ''
        if (utmSource) newTypeFormQs = `${newTypeFormQs}&utm_source=${utmSource}`

        const gclid = localStorage.getItem('gclid')
        if (gclid) newTypeFormQs = `${newTypeFormQs}&gclid=${gclid}`

        setTypeformQs(newTypeFormQs)

        // If we are ready to go, just go
        // Do this here to minimize renders
        if (isGaReady() && gaQs === '') {
          attachGAInfoToIframeSrc()
        }
      }
    }
  }, [attachGAInfoToIframeSrc, gaQs, typeformQs])

  // Goal of this is to wait until GA is ready and then set up the iframe src
  useEffect(() => {
    window.gtagReady = attachGAInfoToIframeSrc

    // If we are ready to go, just go
    // Don't run this all again if we already ran
    if (isGaReady() && gaQs === '') {
      attachGAInfoToIframeSrc()
    }

    return function cleanupGtagReady() {
      window.gtagReady = undefined
    }
  }, [attachGAInfoToIframeSrc, gaQs])

  return (
    <FullPageIFrame>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Free Agency | Sign-up</title>
      </Head>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://joinfa.typeform.com/to/XU3KzF?landing=main-3&source=typeform-2${typeformQs}${gaQs}`}
      />
      <Script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </FullPageIFrame>
  )
}
