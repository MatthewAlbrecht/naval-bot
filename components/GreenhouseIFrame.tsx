import React, { useEffect } from 'react'

declare const window: Window &
  typeof globalThis & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Grnhse: any
  }

export default function GreenhouseIFrame(): React.ReactElement {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://boards.greenhouse.io/embed/job_board/js?for=freeagency'

    // becuase this is a single page app when we change routes the window's `load` event is not triggered
    // and on the `load` event this script will know to run.  So we, instead, manually trigger the script
    // to load when this component mounts with `Grnhse.Iframe.load()`
    script.onload = function () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (window.Grnhse?.Iframe?.load) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        window.Grnhse.Iframe.load()
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <div id="grnhse_app" />
    </>
  )
}

export function GreenhouseMeta(): React.ReactElement {
  return (
    <>
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Build the careers of the future at Free Agency."
      />
      <meta property="og:site_name" content="Free Agency" />
      <meta
        property="og:description"
        content="Entertainers and athletes have Talent Agents. Shouldn't everyone else? We manage and represent talent in tech. Join us in changing career trajectories!"
      />

      <meta property="og:image" content="/img/free-agency-careers.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
    </>
  )
}
