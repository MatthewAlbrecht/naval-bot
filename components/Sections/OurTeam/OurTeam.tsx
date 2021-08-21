import Link from 'next/link'
import React from 'react'
import { Box, Cell, Container, Flex, Grid, Headline3, Icon, Txt } from 'components'
import { CircularIconButton } from 'components/Buttons'
import HeadlineText from 'components/HeaderText'
import { CircularImage } from 'components/MiscStyles'
import { OurTeamSection } from 'types'
import { Images } from 'utils/images'

type Props = OurTeamSection
export default function OurTeam({
  headline,
  ctaBox,
  employees,
}: Props): React.ReactElement {
  return (
    <Container>
      <Headline3>
        <HeadlineText
          headlineCopyRaw={headline}
          emphasisProps={{ gradient: 'tealToBrightPurple' }}
        />
      </Headline3>
      <Box top={[5, { md: 6, lg: 8 }]}>
        <Grid columns={[2, { md: 3, lg: 6 }]} columnGap={3} rowGap={[4, { md: 5 }]}>
          {employees.map(({ name, title, image }) => (
            <Cell key={name}>
              <CircularImage
                borderRadius="lg"
                src={Images[image.name].src}
                alt={image.alt}
                height={Images[image.name].height}
                width={Images[image.name].width}
                layout="responsive"
                sizes="(max-width: 400px) 400px, (min-width: 800px) 450px,"
              />
              <Box top={2} bottom={1}>
                {name.split(' ').map((namePart) => (
                  <Txt
                    key={namePart}
                    size={24}
                    weight="900"
                    lineHeight={1.33}
                    $color="lightest"
                  >
                    {namePart}
                  </Txt>
                ))}
              </Box>
              <Txt lineHeight={1.5} $color="lightest">
                {title}
              </Txt>
            </Cell>
          ))}
          <Cell $width={2}>
            <Box height100 all={3} backgroundColor="darkPurple" borderRadius="lg">
              <Txt
                size={[32, { md: 40 }]}
                lineHeight={[1.25, { md: 1.4, lg: 1.17 }]}
                $color="lightest"
                weight="900"
              >
                {ctaBox.title}
              </Txt>
              <Box top={2} bottom={5.5}>
                <Txt lineHeight={[1.25, { md: 1.4 }]} $color="lightest60">
                  {ctaBox.subTitle}
                </Txt>
              </Box>
              <Flex justify="space-between" align="center">
                <Txt $color="lightest" as="span">
                  {ctaBox.ctaLabel}
                </Txt>
                <Link href={ctaBox.to}>
                  <a>
                    <CircularIconButton as="span">
                      <Icon name="Arrow" primaryStroke="lightest" height={8} />
                    </CircularIconButton>
                  </a>
                </Link>
              </Flex>
            </Box>
          </Cell>
        </Grid>
      </Box>
    </Container>
  )
}
