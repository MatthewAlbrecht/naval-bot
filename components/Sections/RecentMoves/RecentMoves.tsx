import React, { useState } from 'react'
import {
  BodyParagraph,
  Box,
  Cell,
  Container,
  Grid,
  Headline3,
  Headline4,
  Flex,
  SecondaryButtonAlt,
} from 'components'
import { Bookmark } from 'components/Bookmark'
import HeadlineText from 'components/HeaderText'
import { CircularImage } from 'components/MiscStyles'
import { Div } from 'styles/base'
import { RecentMovesSection } from 'types'
import { ArrayElement } from 'utils/types'
import {
  Overlay,
  RecentMoveCell,
  CompanyLogoBox,
  CompanyLogoInnerBox,
} from './RecentMoves.styles'

type Props = RecentMovesSection
export default function RecentMoves({
  headline,
  bookmarkText,
  moves,
}: Props): React.ReactElement {
  const [showAllMovesMobile, setShowAllMovesMobile] = useState(false)

  return (
    <Box position="relative">
      <Container>
        <Box bottom={[2, { md: 3, lg: 4 }]}>
          <Bookmark label={bookmarkText} />
        </Box>
        <Grid>
          <Cell $width={[10, { md: 8, xl: 5 }]} left={1}>
            <Headline3 $color="darkest">
              <HeadlineText
                emphasisProps={{ gradient: 'tealToBrightPurple' }}
                headlineCopyRaw={headline}
              />
            </Headline3>
          </Cell>
        </Grid>
        <Box top={[4, { md: 6, lg: 4 }]}>
          <Div position="relative">
            <Grid
              columnGap={6}
              columns={[1, { lg: 2 }]}
              rowGap={3}
              gridAutoRows="1fr"
            >
              {moves.map((move, index) => (
                <RecentMove
                  move={move}
                  key={move.description}
                  index={index}
                  showAllMovesMobile={showAllMovesMobile}
                />
              ))}
            </Grid>
            {!showAllMovesMobile && <Overlay />}
          </Div>
        </Box>
        {!showAllMovesMobile && (
          <Div display={['block', { lg: 'none' }]}>
            <Box top={[3, { md: 5 }]}>
              <Flex justify="center">
                <SecondaryButtonAlt onClick={() => setShowAllMovesMobile(true)}>
                  Load More
                </SecondaryButtonAlt>
              </Flex>
            </Box>
          </Div>
        )}
      </Container>
    </Box>
  )
}

type RecentMoveProps = {
  move: ArrayElement<RecentMovesSection['moves']>
  index: number
  showAllMovesMobile: boolean
}

const NUM_MOVES_TO_SHOW_MOBILE = 5

function RecentMove({
  move,
  index,
  showAllMovesMobile,
}: RecentMoveProps): React.ReactElement {
  const showMove = showAllMovesMobile || index < NUM_MOVES_TO_SHOW_MOBILE
  return (
    <RecentMoveCell
      left={[1, { lg: index < 5 ? 1 : 2 }]}
      top={[index + 1, { lg: (index % 5) + 1 }]}
      key={move.description}
      display={[showMove ? 'initial' : 'none', { lg: 'initial' }]}
      backgroundColor="white"
      borderRadius="lg"
    >
      {/* TODO (matthewalbrecht): build responsive rule creator for boolean - on/off rule-setting */}
      <Box vertical={3} horizontal={3} height100>
        <Grid
          columns="max-content auto"
          rows="max-content min-content"
          columnGap={4}
        >
          <Cell
            $height={2}
            top={1}
            elementHeight="auto"
            align={['center', { md: 'start' }]}
          >
            <CompanyLogoBox borderRadius="100" backgroundColor="white">
              <CompanyLogoInnerBox borderRadius="100" position="relative">
                <CircularImage
                  src={move.imageUrl}
                  alt="company logo"
                  layout="fill"
                  objectFit="contain"
                />
              </CompanyLogoInnerBox>
            </CompanyLogoBox>
          </Cell>
          <Cell top={1}>
            <Headline4 $color="darkest">{`0${index + 1}`.slice(-2)}.</Headline4>
          </Cell>
          <Cell top={2} $width={[2, { md: 1 }]}>
            <BodyParagraph $color="darkest">{move.description}</BodyParagraph>
          </Cell>
        </Grid>
      </Box>
    </RecentMoveCell>
  )
}
