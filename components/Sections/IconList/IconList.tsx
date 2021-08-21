import React from 'react'
import {
  Container,
  Headline3,
  Headline4,
  Box,
  BodyParagraph,
  Grid,
  Flex,
  Cell,
} from 'components'
import HeadlineText from 'components/HeaderText'
import { Icon } from 'components/Icon'
import { IconListSection } from 'types'
import { FakeBoxShadow } from './IconList.styles'

type Props = IconListSection
export default function IconList({ headline, items }: Props): React.ReactElement {
  return (
    <Container>
      <Headline3>
        <HeadlineText
          headlineCopyRaw={headline}
          emphasisProps={{ gradient: 'tealToBrightPurple' }}
        />
      </Headline3>
      <Box top={[5, { md: 9 }]}>
        <Grid
          columns={[1, { md: 2, lg: 3 }]}
          rowGap={[5, { lg: 6, xl: 8 }]}
          columnGap={3}
        >
          {items.map(({ title, description, iconName }) => (
            <Grid key={title} columns="4.8rem auto" rows="4.8rem auto" columnGap={4}>
              <Flex
                align="center"
                justify="center"
                backgroundColor="darkPurple"
                borderRadius="lg"
                position="relative"
              >
                <FakeBoxShadow />
                <Icon
                  name={iconName}
                  gradient={['emphasis2Light', 'emphasis2Dark']}
                  primaryStroke="darkest"
                  width={24}
                />
              </Flex>
              <Cell align="start" elementHeight="auto">
                <Headline4 noWrap>{title}</Headline4>
              </Cell>
              <Cell top={2} left={2}>
                <BodyParagraph>{description}</BodyParagraph>
              </Cell>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
