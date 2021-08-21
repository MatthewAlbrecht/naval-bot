export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''

declare const window: Window &
  typeof globalThis & {
    gtagReady?: () => void
  }

// From: https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
export const pageview = (url: string): void => {
  // This page_view logic also exists in _document
  window.gtag('event', 'page_view', {
    page_path: url,
    event_callback: function () {
      // gtagReady is the optional function a page may declare to be called when gtag is ready
      if (window.gtagReady) {
        window.gtagReady()
      }
    },
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value: string
}): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
