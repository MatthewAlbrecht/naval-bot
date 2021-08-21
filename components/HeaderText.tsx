import React from 'react'
import { Emphasis } from 'components'
import { HeadlineCopy } from 'types'
import { EmphasisProps } from './Txt'

type Props = {
  headlineCopyRaw: HeadlineCopy
  emphasisProps: EmphasisProps
}

export default function HeadlineText({
  headlineCopyRaw,
  emphasisProps,
}: Props): React.ReactElement {
  return (
    <>
      {headlineCopyRaw.map(([text, isEmphasized]) =>
        isEmphasized ? (
          <React.Fragment key={text}>
            {' '}
            <Emphasis {...emphasisProps}>{text}</Emphasis>{' '}
          </React.Fragment>
        ) : (
          text
        )
      )}
    </>
  )
}
