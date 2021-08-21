import Image from 'next/image'
import React from 'react'
import {
  BodyParagraph,
  Box,
  Cell,
  Container,
  Grid,
  Headline3,
  Txt,
  VList,
} from 'components'
import HeadlineText from 'components/HeaderText'
import { Div } from 'styles/base'
import { LogoBoxSection } from 'types'
import { Images } from 'utils/images'
import { LogoSectionGradient, LogoBackground } from './LogoBox.styles'

type Props = LogoBoxSection
export default function LogoBox({
  headline,
  headline2,
  body,
}: Props): React.ReactElement {
  return (
    <Container>
      <LogoSectionGradient
        vertical={[7, { md: 12, lg: 25 }]}
        horizontal={[4, { lg: 0 }]}
        borderRadius="lg"
        display={['none', { md: 'block' }]}
      >
        <LogoBackground>
          <Image
            src={Images.LogoBackground.src}
            alt="company logos"
            layout="fill"
            objectFit="cover"
          />
        </LogoBackground>
        <Grid justify="center" columns={[1, { md: 12 }]} position="relative">
          <Cell $width={[10, { lg: 8 }]} left={[2, { lg: 3 }]}>
            <Box
              backgroundColor="lightest"
              horizontal={[3, { md: 7, lg: 7 }]}
              vertical={[6, { md: 5, lg: 8 }]}
              borderRadius="normal"
            >
              <LogoBoxContent headline={headline} body={body} />
            </Box>
          </Cell>
        </Grid>
      </LogoSectionGradient>
      <Div display={['block', { md: 'none' }]}>
        <LogoSectionGradient top={5} bottom={2} borderRadius="lg">
          <Box horizontal={4}>
            <Txt as="h3" size={20} lineHeight={1.6} $color="lightest" weight="900">
              <HeadlineText
                headlineCopyRaw={headline2}
                emphasisProps={{ gradient: 'aquaToAqua' }}
              />
            </Txt>
          </Box>
          <Box top={5}>
            <Image
              src={Images.LogoBackgroundMobile.src}
              layout="responsive"
              height={Images.LogoBackgroundMobile.height}
              width={Images.LogoBackgroundMobile.width}
              alt="logos of our client's companies"
            />
          </Box>
        </LogoSectionGradient>
        <Box top={10}>
          <Box
            backgroundColor="lightest"
            vertical={5}
            horizontal={4}
            borderRadius="lg"
          >
            <LogoBoxContent headline={headline} body={body} />
          </Box>
        </Box>
      </Div>
    </Container>
  )
}

function LogoBoxContent({
  headline,
  body,
}: Pick<Props, 'headline' | 'body'>): React.ReactElement {
  return (
    <>
      <Headline3 textAlign="left" $color="darkest">
        <HeadlineText
          emphasisProps={{
            gradient: 'tealToBrightPurple',
          }}
          headlineCopyRaw={headline}
        />
      </Headline3>
      <Box top={2}>
        <VList size={2}>
          {body.split('<br>').map((paragraph) => (
            <BodyParagraph key={paragraph} $color="darkest" textAlign="left">
              {paragraph}
            </BodyParagraph>
          ))}
        </VList>
      </Box>
    </>
  )
}
