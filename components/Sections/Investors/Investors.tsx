import Image from 'next/image'
import React from 'react'
import { Container, Headline3, Box, Grid } from 'components'
import { Cell } from 'components/Grid'
import HeadlineText from 'components/HeaderText'
import { InvestorsSection } from 'types'
import { Images, ImageType } from 'utils/images'
import {
  AspectRatioLock,
  ImageContainer,
  ImagePositioner,
  InvestorListItem,
} from './Investors.styles'

type Props = InvestorsSection
export default function Investors({
  headline,
  main,
  others,
}: Props): React.ReactElement {
  return (
    <Container>
      <Headline3>
        <HeadlineText
          headlineCopyRaw={headline}
          emphasisProps={{ gradient: 'tealToBrightPurple' }}
        />
      </Headline3>
      <Box top={[4, { md: 6 }]} bottom={[4, { md: 8 }]}>
        <Box
          vertical={[4, { md: 7, lg: 8 }]}
          horizontal={[2, { md: 7, lg: 12 }]}
          backgroundColor="darkPurple"
          borderRadius="lg"
        >
          <Grid
            columns={[2, { md: 4 }]}
            columnGap={[4, { sm: 8, lg: 12 }]}
            rowGap={4}
            rows={['3']}
          >
            {main.map(({ image: { name, alt } }) => (
              <Cell key={name}>
                <AspectRatioLock>
                  <ImageContainer>
                    <ImagePositioner
                      nudgeRight={
                        (Images[name] as ImageType).nudgeRightInvestorSection
                          ? 20
                          : undefined
                      }
                    >
                      <Image
                        alt={alt}
                        src={Images[name].src as unknown as StaticImageData}
                        layout="fill"
                      />
                    </ImagePositioner>
                  </ImageContainer>
                </AspectRatioLock>
              </Cell>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box horizontal={[2, { md: 7, lg: 12 }]}>
        <Grid
          columns={[2, { md: 3, lg: 4 }]}
          columnGap={[3, { md: 4, lg: 5 }]}
          rowGap={4}
          as="ul"
        >
          {others.map((investor) => (
            <InvestorListItem key={investor} as="li">
              {investor}
            </InvestorListItem>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
