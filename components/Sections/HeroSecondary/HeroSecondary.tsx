import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Box, Cell, Grid, Headline2, PrimaryButton } from 'components'
import HeadlineText from 'components/HeaderText'
import { Div } from 'styles/base'
import { HeroSecondarySection } from 'types'
import { Images } from 'utils/images'
import { ImagePositioner, ImageSpacer } from './HeroSecondary.styles'

type Props = HeroSecondarySection
export default function HeroSecondary({
  headline,
  cta,
  image,
}: Props): React.ReactElement {
  const imageInfo = Images[image.name]
  return (
    <Container position="relative">
      <Box>
        <Grid>
          <Cell $width={[12, { md: 8, lg: 6 }]}>
            <Div position="relative" zIndex="foregroundContent">
              <Headline2 $color="darkest">
                <HeadlineText
                  emphasisProps={{
                    gradient: 'tealToBrightPurple',
                  }}
                  headlineCopyRaw={headline}
                />
              </Headline2>
              <Box top={[3, { md: 4, lg: 6 }]}>
                <Link href={cta.to}>
                  <a>
                    <PrimaryButton
                      width={'auto'}
                      minWidth={['20rem', { md: '24.8rem' }]}
                      boxShadow={['primaryButton', 50]}
                    >
                      {cta.label}
                    </PrimaryButton>
                  </a>
                </Link>
              </Box>
            </Div>
          </Cell>
          <Cell $width={[12, { lg: 6 }]}>
            <ImageSpacer imageName={image.name} />
            <ImagePositioner imageName={image.name}>
              <Image
                src={imageInfo.src as StaticImageData}
                alt={image.alt}
                layout="responsive"
                width={imageInfo.width}
                height={imageInfo.height}
                priority
              />
            </ImagePositioner>
          </Cell>
        </Grid>
      </Box>
    </Container>
  )
}
