import React from 'react'
import styled from 'styled-components'
import { Txt, Box, Flex, Icon } from 'components'

const BookmarkBox = styled(Box)`
  background: linear-gradient(65.13deg, #2e9fcc -76.65%, #b069e8 74.55%);
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  display: inline-block;
`

type Props = {
  label: string
}

export function Bookmark({ label }: Props): React.ReactElement {
  return (
    <BookmarkBox vertical={[0.75, { md: 1 }]} horizontal={[1, { md: 2 }]}>
      <Flex align="center">
        <Box right={1.5}>
          <Icon
            name="RadioBroadcast"
            width={[18, { md: 30 }]}
            primaryFill="lightest"
          />
        </Box>
        <Txt size={[14, { md: 20 }]} $color="lightest" weight="900">
          {label}
        </Txt>
      </Flex>
    </BookmarkBox>
  )
}
