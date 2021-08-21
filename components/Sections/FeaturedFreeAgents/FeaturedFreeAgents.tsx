import Link from 'next/link'
import React from 'react'
import {
  Container,
  Grid,
  Cell,
  Headline3,
  Headline5,
  Box,
  BodyParagraph,
  BodyParagraph2,
  Flex,
  Icon,
} from 'components'
import { CircularIconButton } from 'components/Buttons'
import HeadlineText from 'components/HeaderText'
import { CircularImage } from 'components/MiscStyles'
import { VisuallyHidden } from 'components/VisuallyHidden'
import { Div } from 'styles/base'
import { FeaturedFreeAgentSection } from 'types'
import { Images } from 'utils/images'
import { getCurrentWeeksMonday } from './FeaturedFreeAgents.helpers'
import { FeaturedAvatar, CTA } from './FeaturedFreeAgents.style'

type Props = FeaturedFreeAgentSection
export default function FeaturedFreeAgents({
  headline,
  body,
  freeAgentCTA,
  freeAgents,
}: Props): React.ReactElement {
  const currentWeekMonday = getCurrentWeeksMonday(new Date())
  return (
    <Container>
      <Grid columns={[1, { md: 12 }]}>
        <Cell $width={[1, { md: 10, lg: 6, xl: 5 }]} elementHeight="auto">
          <Box bottom={0.5}>
            <BodyParagraph $color="darkest" opacity={0.7}>
              Week of {currentWeekMonday}
            </BodyParagraph>
          </Box>

          <Headline3 $color="darkest">
            <HeadlineText
              emphasisProps={{ gradient: 'tealToBrightPurple' }}
              headlineCopyRaw={headline}
            />
          </Headline3>
        </Cell>
        <Cell $width={[1, { md: 10, lg: 7, xl: 6 }]} top={2} elementHeight="auto">
          <Box top={[2, { md: 3 }]}>
            <BodyParagraph $color="darkest">{body}</BodyParagraph>
          </Box>
        </Cell>
      </Grid>
      <Box top={6}>
        <Grid columnGap={3} rowGap={[4, { md: 3 }]}>
          {freeAgents.map((freeAgent, index) => (
            <Cell $width={[12, { md: 6, lg: 3 }]} key={index} position="relative">
              <Box
                backgroundColor="darkPurple"
                top={[3, { md: 4, lg: 5 }]}
                bottom={3}
                horizontal={[2, { md: 4, lg: 3.5 }]}
                borderRadius="lg"
                height100
              >
                <Flex
                  direction={['row', { md: 'column' }]}
                  justify="flex-start"
                  align={['center', { md: 'flex-start' }]}
                  height100
                >
                  <FeaturedAvatar>
                    <CircularImage
                      src={Images[freeAgent.avatar.name].src}
                      alt={freeAgent.avatar.alt}
                      width={90}
                      height={90}
                    />
                  </FeaturedAvatar>

                  <Box
                    top={[0, { md: 3 }]}
                    left={[2, { md: 0 }]}
                    right={[7, { md: 0 }]}
                  >
                    <Headline5 $color="lightest">{freeAgent.description}</Headline5>
                  </Box>
                  <Box top={1.5} display={['none', { md: 'block' }]}>
                    <Div display={['none', { md: 'block' }]}>
                      <BodyParagraph2 $color="lightest" opacity={0.8}>
                        {freeAgent.lookingFor}
                      </BodyParagraph2>
                    </Div>
                  </Box>
                  <CTA>
                    <Flex justify="flex-end">
                      <Box top={2}>
                        {/* TODO (matthewalbrecht): use proper QS library for this */}
                        <Link
                          href={`${freeAgentCTA.to}?prefill_Talent+Requested=${freeAgent.prefillId}`}
                        >
                          <a target="_blank" rel="noopener noreferrer">
                            <VisuallyHidden>{freeAgentCTA.label}</VisuallyHidden>
                            <CircularIconButton as="span" size={[6, { md: 7 }]}>
                              <Icon
                                name="Message"
                                primaryFill="lightest"
                                height={24}
                              />
                            </CircularIconButton>
                          </a>
                        </Link>
                      </Box>
                    </Flex>
                  </CTA>
                </Flex>
              </Box>
            </Cell>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
