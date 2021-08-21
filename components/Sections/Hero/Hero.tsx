import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Grid, Cell, Headline2, Box, PrimaryButton } from 'components'
import HeadlineText from 'components/HeaderText'
import { Div } from 'styles/base'
import { HeroSection } from 'types'
import { Images } from 'utils/images'
import { HeroImageContainer } from './Hero.styles'

type Props = HeroSection
export default function Hero({ headline, cta, image }: Props): React.ReactElement {
  const imageInfo = Images[image.name]
  return (
    <Container position="relative">
      <Box bottom={[20, { sm: 28, md: 5 }]}>
        <Cell left={2} $width={2}>
          <Grid columnGap={2}>
            <Cell $width={[12, { md: 8, lg: 7, xl: 6 }]}>
              <Headline2>
                <HeadlineText
                  emphasisProps={{ gradient: 'sandToBlurple' }}
                  headlineCopyRaw={headline}
                />
              </Headline2>
              <Box top={[3, { md: 4, lg: 6 }]}>
                <Link href={cta.to}>
                  <a>
                    <PrimaryButton
                      width={'auto'}
                      minWidth={['20rem', { md: '24.8rem' }]}
                      as="span"
                    >
                      {cta.label}
                    </PrimaryButton>
                  </a>
                </Link>
              </Box>
            </Cell>
            <Cell $width={[6, { sm: 5, md: 4 }]} top={2}>
              <Box top={[5, { md: 6, lg: 10 }]}>
                <Grid
                  columns={[
                    'minmax(4.5rem, 6.5rem) minmax(4.5rem, 6.5rem) minmax(4.5rem, 6.5rem)',
                    { lg: 2 },
                  ]}
                  areas={[
                    ['first first first', 'second third fourth'],
                    { lg: ['first second', 'third fourth'] },
                  ]}
                  columnGap={[2, { md: 3, lg: 2 }]}
                  rowGap={[1, { md: 2, lg: 3 }]}
                >
                  <Cell area="first">
                    <Image
                      priority
                      src={Images.NYT.src}
                      layout="responsive"
                      alt="new york times logo"
                      width={Images.NYT.width}
                      height={Images.NYT.height}
                    />
                  </Cell>
                  <Cell area="second">
                    <Div display={['none', { lg: 'block' }]}>
                      <Image
                        priority
                        src={Images.WSJ.src}
                        layout="responsive"
                        alt="wall street journal logo"
                        width={Images.WSJ.width}
                        height={Images.WSJ.height}
                      />
                    </Div>
                    <Div display={['block', { lg: 'none' }]}>
                      <Image
                        priority
                        src={Images.WSJSmall.src}
                        layout="responsive"
                        alt="wall street journal logo"
                        width={Images.WSJSmall.width}
                        height={Images.WSJSmall.height}
                      />
                    </Div>
                  </Cell>
                  <Cell area="third">
                    <Div display={['none', { lg: 'block' }]}>
                      <Image
                        priority
                        src={Images.Techcrunch.src}
                        layout="responsive"
                        alt="techcrunch logo"
                        width={Images.Techcrunch.width}
                        height={Images.Techcrunch.height}
                      />
                    </Div>
                    <Div display={['block', { lg: 'none' }]}>
                      <Image
                        priority
                        src={Images.LATSmall.src}
                        layout="responsive"
                        alt="los angeles times logo"
                        width={Images.LATSmall.width}
                        height={Images.LATSmall.height}
                      />
                    </Div>
                  </Cell>
                  <Cell area="fourth">
                    <Div display={['none', { lg: 'block' }]}>
                      <Image
                        priority
                        src={Images.LAT.src}
                        layout="responsive"
                        alt="los angeles times logo"
                        width={Images.LAT.width}
                        height={Images.LAT.height}
                      />
                    </Div>
                    <Div display={['block', { lg: 'none' }]}>
                      <Image
                        priority
                        src={Images.TechcrunchSmall.src}
                        layout="responsive"
                        alt="techcrunch logo"
                        width={Images.TechcrunchSmall.width}
                        height={Images.TechcrunchSmall.height}
                      />
                    </Div>
                  </Cell>
                </Grid>
              </Box>
            </Cell>
          </Grid>
        </Cell>
        <HeroImageContainer>
          <Image
            priority
            src={imageInfo.src as StaticImageData}
            alt={image.alt}
            layout="responsive"
            width={imageInfo.width}
            height={imageInfo.height}
          />
        </HeroImageContainer>
      </Box>
    </Container>
  )
}
