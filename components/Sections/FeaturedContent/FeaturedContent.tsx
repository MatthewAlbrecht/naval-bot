import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Container,
  Box,
  Grid,
  Cell,
  Headline3,
  Icon,
  Headline4,
  BodyParagraph,
  PrimaryButton,
  PrimaryButtonAlt,
  VList,
} from 'components'
import HeadlineText from 'components/HeaderText'
import { OverflowHidden } from 'components/MiscStyles'
import { FeaturedContentSection } from 'types'
import { Images } from 'utils/images'
import {
  getContentCellProps,
  getImageCellProps,
  getSpacingDetails,
  getVariantDetails,
} from './FeaturedContent.helpers'
import {
  BulletIconWrapper,
  ContentStyle,
  ImagePositioningContainer,
  ImageSpacer,
  SectionSpacer,
} from './FeaturedContent.styles'

type Props = FeaturedContentSection
export default function FeaturedContent({
  contentSide,
  contentSideMobile,
  headline,
  contentColumns = 6,
  cta,
  featureList,
  bulletList,
  image,
  variant,
  spacing,
  body,
}: Props): React.ReactElement {
  const imageInfo = Images[image.name]
  const hideOverflow = image.name === 'Maze' || image.name === 'Lighting'
  const { contentBoxProps, headlineEmphasisProps, ButtonComponent } =
    getVariantDetails(variant)
  const { verticalSpacing, horizontalSpacing } = getSpacingDetails(spacing)

  return (
    <Container>
      <SectionSpacer imageName={image.name}>
        <OverflowHidden hide={hideOverflow} borderRadius="lg">
          <Box
            vertical={verticalSpacing}
            horizontal={horizontalSpacing}
            borderRadius="lg"
            position="relative"
            {...contentBoxProps}
          >
            <Grid rowGap={3}>
              <Cell
                {...getContentCellProps(
                  contentSide,
                  contentSideMobile,
                  contentColumns
                )}
              >
                <ContentStyle>
                  <Headline3>
                    <HeadlineText
                      headlineCopyRaw={headline}
                      emphasisProps={headlineEmphasisProps}
                    />
                  </Headline3>
                  {bulletList && (
                    <BulletList
                      bulletList={bulletList}
                      cta={cta}
                      ButtonComponent={ButtonComponent}
                    />
                  )}
                  {featureList && (
                    <FeatureList
                      featureList={featureList}
                      cta={cta}
                      ButtonComponent={ButtonComponent}
                    />
                  )}
                  {body && (
                    <Box top={3}>
                      <VList size={2}>
                        {body.split('<br>').map((paragraph) => (
                          <BodyParagraph key={paragraph}>{paragraph}</BodyParagraph>
                        ))}
                      </VList>
                      {cta && (
                        <Box top={6}>
                          <FeaturedContentButton
                            cta={cta}
                            ButtonComponent={ButtonComponent}
                          />
                        </Box>
                      )}
                    </Box>
                  )}
                </ContentStyle>
              </Cell>
              <Cell
                {...getImageCellProps(
                  contentSide,
                  contentSideMobile,
                  contentColumns
                )}
              >
                <ImagePositioningContainer imageName={image.name}>
                  <Image
                    alt={image.alt}
                    src={imageInfo.src as StaticImageData}
                    layout="responsive"
                    width={imageInfo.width}
                    height={imageInfo.height}
                  />
                </ImagePositioningContainer>
                <ImageSpacer imageName={image.name} />
              </Cell>
            </Grid>
          </Box>
        </OverflowHidden>
      </SectionSpacer>
    </Container>
  )
}

type FeatureListProps = {
  featureList: NonNullable<FeaturedContentSection['featureList']>
  cta: FeaturedContentSection['cta']
  ButtonComponent: typeof PrimaryButton | typeof PrimaryButtonAlt
}

function FeatureList({ featureList, cta, ButtonComponent }: FeatureListProps) {
  return (
    <Box top={5}>
      <Grid columns={1} rowGap={4}>
        {featureList.map((item) => (
          <Grid
            columns="4.8rem auto"
            areas={['a b', 'a c']}
            columnGap={4}
            rowGap={1}
            key={item.title}
          >
            <Cell area="a" justify="center">
              <Box top={1}>
                <Icon
                  name={item.iconName}
                  height={32}
                  gradient={['sand', 'blurple2']}
                />
              </Box>
            </Cell>
            <Cell area="b">
              <Headline4>{item.title}</Headline4>
            </Cell>
            <Cell area="c">
              <BodyParagraph opacity={0.85}>{item.description}</BodyParagraph>
            </Cell>
          </Grid>
        ))}
        {cta && (
          <Grid
            columns="4.8rem auto"
            areas={[['a a'], { lg: ['a b'] }]}
            columnGap={4}
            rowGap={1}
          >
            <Cell area={['a', { lg: 'b' }]}>
              <Box top={2}>
                <FeaturedContentButton cta={cta} ButtonComponent={ButtonComponent} />
              </Box>
            </Cell>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

type BulletListProps = {
  bulletList: NonNullable<FeaturedContentSection['bulletList']>
  cta: FeaturedContentSection['cta']
  ButtonComponent: typeof PrimaryButton | typeof PrimaryButtonAlt
}

function BulletList({ bulletList, cta, ButtonComponent }: BulletListProps) {
  return (
    <Box top={[7, { md: 8, lg: 6.5 }]}>
      <Grid
        columns={[1, { md: 2 }]}
        rows={[8, { md: 4 }]}
        columnGap={[4, { lg: 9 }]}
        rowGap={[2, { md: 4, lg: 3 }]}
        flow="column"
      >
        {bulletList.items.map((bullet) => (
          <Grid columns="1.8rem auto" key={bullet}>
            <Cell elementHeight="auto" align="center">
              <BulletIconWrapper>
                <Icon
                  name={bulletList.iconName}
                  primaryFill="primaryButton"
                  primaryStroke="lightest"
                  height={18}
                />
              </BulletIconWrapper>
            </Cell>
            <Cell>
              <Box left={2.5}>
                <BodyParagraph noWrap>{bullet}</BodyParagraph>
              </Box>
            </Cell>
          </Grid>
        ))}
      </Grid>
      {cta && (
        <Box top={6}>
          <FeaturedContentButton cta={cta} ButtonComponent={ButtonComponent} />
        </Box>
      )}
    </Box>
  )
}

type FeaturedContentButtonProps = {
  cta: FeaturedContentSection['cta']
  ButtonComponent: typeof PrimaryButton | typeof PrimaryButtonAlt
}

function FeaturedContentButton({
  cta,
  ButtonComponent,
}: FeaturedContentButtonProps) {
  return cta ? (
    <Link href={cta.to}>
      <a>
        <ButtonComponent width={['100%', { md: 'auto' }]}>
          {cta.label}
        </ButtonComponent>
      </a>
    </Link>
  ) : null
}
