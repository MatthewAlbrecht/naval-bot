import React from 'react'
import GreenhouseIFrame from 'components/GreenhouseIFrame'
import { GreenhouseSection } from 'types'

type Props = GreenhouseSection

export default function Greenhouse({ id }: Props): React.ReactElement {
  return (
    <div id={id}>
      <GreenhouseIFrame />
    </div>
  )
}
